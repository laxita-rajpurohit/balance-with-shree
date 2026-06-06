import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../../shared/config/emailConfig";
import { contactData } from "../../shared/data/contact";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const contactService = {
  init() {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  },

  async sendEmail(data: ContactFormData) {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_email: contactData.receiverEmail,
      message: data.message,
      reply_to: data.email,
    };

    return emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
    );
  },
};
