/**
 * Form Service
 * 
 * This service provides utilities for form handling, validation,
 * and submission across the application.
 */

import { contactService, type ContactFormData } from './contactService';

// Generic form field interface
export interface FormField {
  name: string;
  value: any;
  error?: string;
  touched?: boolean;
  required?: boolean;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  options?: { label: string; value: string }[];
}

// Form state interface
export interface FormState {
  fields: Record<string, FormField>;
  isValid: boolean;
  isSubmitting: boolean;
  submitError?: string;
  submitSuccess?: boolean;
}

// Validation rules
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => string | null;
}

// Form configuration
export interface FormConfig {
  fields: Record<string, ValidationRule>;
  onSubmit: (data: any) => Promise<any>;
  onSuccess?: (response: any) => void;
  onError?: (error: any) => void;
}

class FormService {
  /**
   * Validate a single field
   */
  validateField(value: any, rules: ValidationRule): string | null {
    // Required validation
    if (rules.required && (!value || (typeof value === 'string' && !value.trim()))) {
      return 'This field is required';
    }

    // Skip other validations if field is empty and not required
    if (!value && !rules.required) {
      return null;
    }

    // String-specific validations
    if (typeof value === 'string') {
      // Min length validation
      if (rules.minLength && value.length < rules.minLength) {
        return `Must be at least ${rules.minLength} characters`;
      }

      // Max length validation
      if (rules.maxLength && value.length > rules.maxLength) {
        return `Must be no more than ${rules.maxLength} characters`;
      }

      // Pattern validation
      if (rules.pattern && !rules.pattern.test(value)) {
        return 'Invalid format';
      }
    }

    // Custom validation
    if (rules.custom) {
      const customError = rules.custom(value);
      if (customError) {
        return customError;
      }
    }

    return null;
  }

  /**
   * Validate entire form
   */
  validateForm(data: Record<string, any>, config: Record<string, ValidationRule>): Record<string, string> {
    const errors: Record<string, string> = {};

    Object.keys(config).forEach(fieldName => {
      const value = data[fieldName];
      const rules = config[fieldName];
      const error = this.validateField(value, rules);
      
      if (error) {
        errors[fieldName] = error;
      }
    });

    return errors;
  }

  /**
   * Create form state
   */
  createFormState(initialData: Record<string, any> = {}): FormState {
    const fields: Record<string, FormField> = {};

    Object.keys(initialData).forEach(key => {
      fields[key] = {
        name: key,
        value: initialData[key] || '',
        touched: false,
      };
    });

    return {
      fields,
      isValid: false,
      isSubmitting: false,
    };
  }

  /**
   * Update form field
   */
  updateField(
    formState: FormState,
    fieldName: string,
    value: any,
    rules?: ValidationRule
  ): FormState {
    const updatedFields = {
      ...formState.fields,
      [fieldName]: {
        ...formState.fields[fieldName],
        value,
        touched: true,
        error: rules ? this.validateField(value, rules) || undefined : undefined,
      },
    };

    return {
      ...formState,
      fields: updatedFields,
      isValid: this.isFormValid(updatedFields),
    };
  }

  /**
   * Check if form is valid
   */
  private isFormValid(fields: Record<string, FormField>): boolean {
    return Object.values(fields).every(field => !field.error);
  }

  /**
   * Submit contact form
   */
  async submitContactForm(formData: ContactFormData): Promise<any> {
    try {
      const response = await contactService.submitContactForm(formData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Subscribe to newsletter
   */
  async subscribeNewsletter(email: string, firstName?: string, lastName?: string): Promise<any> {
    try {
      const response = await contactService.subscribeToNewsletter({
        email,
        firstName,
        lastName,
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get common validation rules
   */
  getValidationRules() {
    return {
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        custom: (value: string) => {
          if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return 'Please enter a valid email address';
          }
          return null;
        },
      },
      phone: {
        pattern: /^[\+]?[1-9][\d]{0,15}$/,
        custom: (value: string) => {
          if (value && !/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ''))) {
            return 'Please enter a valid phone number';
          }
          return null;
        },
      },
      required: {
        required: true,
      },
      name: {
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: /^[a-zA-Z\s]+$/,
        custom: (value: string) => {
          if (value && !/^[a-zA-Z\s]+$/.test(value)) {
            return 'Name can only contain letters and spaces';
          }
          return null;
        },
      },
      message: {
        required: true,
        minLength: 10,
        maxLength: 1000,
      },
      subject: {
        required: true,
        minLength: 5,
        maxLength: 100,
      },
    };
  }

  /**
   * Format form data for submission
   */
  formatFormData(fields: Record<string, FormField>): Record<string, any> {
    const data: Record<string, any> = {};
    
    Object.keys(fields).forEach(key => {
      const field = fields[key];
      data[key] = field.value;
    });

    return data;
  }

  /**
   * Reset form state
   */
  resetForm(formState: FormState): FormState {
    const resetFields: Record<string, FormField> = {};

    Object.keys(formState.fields).forEach(key => {
      resetFields[key] = {
        ...formState.fields[key],
        value: '',
        error: undefined,
        touched: false,
      };
    });

    return {
      fields: resetFields,
      isValid: false,
      isSubmitting: false,
      submitError: undefined,
      submitSuccess: false,
    };
  }

  /**
   * Handle form submission
   */
  async handleSubmit(
    formState: FormState,
    config: FormConfig,
    updateFormState: (state: FormState) => void
  ): Promise<void> {
    // Set submitting state
    updateFormState({
      ...formState,
      isSubmitting: true,
      submitError: undefined,
      submitSuccess: false,
    });

    try {
      // Validate form
      const formData = this.formatFormData(formState.fields);
      const errors = this.validateForm(formData, config.fields);

      if (Object.keys(errors).length > 0) {
        // Update fields with errors
        const updatedFields = { ...formState.fields };
        Object.keys(errors).forEach(key => {
          if (updatedFields[key]) {
            updatedFields[key].error = errors[key];
          }
        });

        updateFormState({
          ...formState,
          fields: updatedFields,
          isSubmitting: false,
          submitError: 'Please fix the errors above',
        });
        return;
      }

      // Submit form
      const response = await config.onSubmit(formData);

      // Handle success
      updateFormState({
        ...formState,
        isSubmitting: false,
        submitSuccess: true,
      });

      if (config.onSuccess) {
        config.onSuccess(response);
      }

    } catch (error) {
      // Handle error
      const errorMessage = error instanceof Error ? error.message : 'An error occurred';
      
      updateFormState({
        ...formState,
        isSubmitting: false,
        submitError: errorMessage,
      });

      if (config.onError) {
        config.onError(error);
      }
    }
  }
}

// Export singleton instance
export const formService = new FormService();
export default formService;