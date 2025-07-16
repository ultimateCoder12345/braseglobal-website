/**
 * Contact Service
 * 
 * This service handles all contact-related API operations including
 * form submissions, newsletter subscriptions, and contact inquiries.
 */

import { api, endpoints } from './apiClient';

// Contact form data interface
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  serviceType?: string;
}

// Newsletter subscription interface
export interface NewsletterSubscription {
  email: string;
  firstName?: string;
  lastName?: string;
  interests?: string[];
}

// Contact inquiry interface
export interface ContactInquiry {
  type: 'general' | 'support' | 'sales' | 'partnership';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  data: ContactFormData;
}

// Response interfaces
export interface ContactSubmissionResponse {
  id: string;
  status: 'received' | 'processing' | 'responded';
  estimatedResponseTime: string;
  ticketNumber: string;
}

export interface SubscriptionResponse {
  id: string;
  status: 'subscribed' | 'pending_confirmation';
  confirmationRequired: boolean;
}

class ContactService {
  /**
   * Submit contact form
   */
  async submitContactForm(formData: ContactFormData): Promise<ContactSubmissionResponse> {
    try {
      // Validate form data
      this.validateContactForm(formData);

      // Prepare submission data
      const submissionData: ContactInquiry = {
        type: this.determineInquiryType(formData.serviceType),
        priority: this.determinePriority(formData.message),
        data: formData,
      };

      const response = await api.post<ContactSubmissionResponse>(
        endpoints.contact.submit,
        submissionData
      );

      // Track form submission for analytics
      this.trackFormSubmission(formData.serviceType || 'general');

      return response.data;
    } catch (error) {
      console.error('Contact form submission failed:', error);
      throw error;
    }
  }

  /**
   * Subscribe to newsletter
   */
  async subscribeToNewsletter(subscriptionData: NewsletterSubscription): Promise<SubscriptionResponse> {
    try {
      // Validate email
      if (!this.isValidEmail(subscriptionData.email)) {
        throw new Error('Invalid email address');
      }

      const response = await api.post<SubscriptionResponse>(
        endpoints.contact.subscribe,
        subscriptionData
      );

      // Track newsletter subscription
      this.trackNewsletterSubscription();

      return response.data;
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      throw error;
    }
  }

  /**
   * Get contact information
   */
  async getContactInfo() {
    // This would typically come from an API, but for now return static data
    return {
      offices: [
        {
          id: 'sf',
          name: 'San Francisco HQ',
          address: '123 Tech Street, San Francisco, CA 94105',
          phone: '+1 (555) 123-4567',
          email: 'sf@brasetech.com',
          hours: 'Mon-Fri: 8:00 AM - 6:00 PM PST',
          isHeadquarters: true,
        },
        {
          id: 'ny',
          name: 'New York Office',
          address: '456 Innovation Ave, New York, NY 10001',
          phone: '+1 (555) 234-5678',
          email: 'ny@brasetech.com',
          hours: 'Mon-Fri: 9:00 AM - 5:00 PM EST',
          isHeadquarters: false,
        },
        {
          id: 'london',
          name: 'London Office',
          address: '789 Digital Lane, London, UK EC1A 1BB',
          phone: '+44 20 7123 4567',
          email: 'london@brasetech.com',
          hours: 'Mon-Fri: 9:00 AM - 5:00 PM GMT',
          isHeadquarters: false,
        },
      ],
      general: {
        email: 'hello@brasetech.com',
        phone: '+1 (555) 123-4567',
        support: 'support@brasetech.com',
        sales: 'sales@brasetech.com',
      },
      socialMedia: {
        linkedin: 'https://linkedin.com/company/brasetech',
        twitter: 'https://twitter.com/brasetech',
        github: 'https://github.com/brasetech',
      },
    };
  }

  /**
   * Validate contact form data
   */
  private validateContactForm(formData: ContactFormData): void {
    const errors: string[] = [];

    if (!formData.firstName?.trim()) {
      errors.push('First name is required');
    }

    if (!formData.lastName?.trim()) {
      errors.push('Last name is required');
    }

    if (!formData.email?.trim()) {
      errors.push('Email is required');
    } else if (!this.isValidEmail(formData.email)) {
      errors.push('Invalid email format');
    }

    if (!formData.subject?.trim()) {
      errors.push('Subject is required');
    }

    if (!formData.message?.trim()) {
      errors.push('Message is required');
    } else if (formData.message.length < 10) {
      errors.push('Message must be at least 10 characters long');
    }

    if (formData.phone && !this.isValidPhone(formData.phone)) {
      errors.push('Invalid phone number format');
    }

    if (errors.length > 0) {
      throw new Error(`Validation failed: ${errors.join(', ')}`);
    }
  }

  /**
   * Validate email format
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate phone number format
   */
  private isValidPhone(phone: string): boolean {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
  }

  /**
   * Determine inquiry type based on service type
   */
  private determineInquiryType(serviceType?: string): ContactInquiry['type'] {
    if (!serviceType) return 'general';
    
    const salesServices = ['web-development', 'mobile-development', 'cloud-solutions', 'custom-software'];
    const supportServices = ['consultation', 'support'];
    
    if (salesServices.includes(serviceType)) return 'sales';
    if (supportServices.includes(serviceType)) return 'support';
    
    return 'general';
  }

  /**
   * Determine priority based on message content
   */
  private determinePriority(message: string): ContactInquiry['priority'] {
    const urgentKeywords = ['urgent', 'asap', 'emergency', 'critical', 'immediately'];
    const highKeywords = ['important', 'priority', 'deadline', 'soon'];
    
    const lowerMessage = message.toLowerCase();
    
    if (urgentKeywords.some(keyword => lowerMessage.includes(keyword))) {
      return 'urgent';
    }
    
    if (highKeywords.some(keyword => lowerMessage.includes(keyword))) {
      return 'high';
    }
    
    return 'medium';
  }

  /**
   * Track form submission for analytics
   */
  private trackFormSubmission(serviceType: string): void {
    // This would integrate with your analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        event_category: 'Contact',
        event_label: serviceType,
        value: 1,
      });
    }
  }

  /**
   * Track newsletter subscription for analytics
   */
  private trackNewsletterSubscription(): void {
    // This would integrate with your analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'newsletter_subscribe', {
        event_category: 'Marketing',
        event_label: 'Newsletter',
        value: 1,
      });
    }
  }
}

// Export singleton instance
export const contactService = new ContactService();
export default contactService;