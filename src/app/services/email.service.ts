import { Injectable } from "@angular/core";
import { ContactForm } from "../interfaces/contact-form";
import emailjs from "@emailjs/browser";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  private readonly EMAILJS_CONFIG = {
    SERVICE_ID: "service_sw37ss6",
    TEMPLATE_ID: "template_noo0ps6",
    PUBLIC_KEY: "FgGUVwu7gXmpn4K74",
  };

  async sendContactEmail(formData: ContactForm): Promise<void> {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "shantanudutta07@gmail.com",
      };

      await emailjs.send(
        this.EMAILJS_CONFIG.SERVICE_ID,
        this.EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        this.EMAILJS_CONFIG.PUBLIC_KEY
      );
    } catch (error) {
      console.error("Email sending failed:", error);
      throw new Error("Failed to send email. Please try again.");
    }
  }
}
