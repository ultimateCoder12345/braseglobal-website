import emailjs from "@emailjs/browser";

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_1jmxx0k"; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_tn0afsb"; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = "rYyK0wpQOGcQzEihG"; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;    
  phone: string;
  company: string;
  subject: string;
  message: string;
  serviceType: string;
}

export const sendContactEmail = async (
  formData: ContactFormData,
): Promise<void> => {
  try {
    const templateParams = {
      to_name: "Brase Tech Team",
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service_type: formData.serviceType,
      title: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email. Please try again later.");
  }
};

export default {
  sendContactEmail,
};
