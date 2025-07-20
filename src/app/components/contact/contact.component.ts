import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  Github,
  Linkedin,
  Loader2,
  LucideAngularModule,
  Send,
} from "lucide-angular";
import { FormsModule } from "@angular/forms";
import { EmailService } from "../../services/email.service";
import { ContactForm } from "../../interfaces/contact-form";
@Component({
  selector: "app-contact",
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  githubIcon = Github;
  linkedinIcon = Linkedin;
  sendIcon = Send;
  loader2Icon = Loader2;
  myEmailAddress = "shantanudutta07@gmail.com";

  formData: ContactForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  isSubmitting = false;
  toastMessage: string | null = null;
  toastType: 'success' | 'error' = 'success';

  constructor(private emailService: EmailService) {}

  async onSubmit() {
    if (this.isSubmitting) return;

    // Basic validation
    if (
      !this.formData.name.trim() ||
      !this.formData.email.trim() ||
      !this.formData.subject.trim() ||
      !this.formData.message.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    this.isSubmitting = true;

    try {
      await this.emailService.sendContactEmail(this.formData);
      // alert("Message sent successfully! I'll get back to you soon.");
      this.showToast("Message sent successfully! I'll get back to you soon.", 'success');
      this.resetForm();
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    } finally {
      this.isSubmitting = false;
    }
  }

  private resetForm() {
    this.formData = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }
  showToast(message: string, type: 'success' | 'error' = 'success') {
  this.toastMessage = message;
  this.toastType = type;

  setTimeout(() => {
    this.toastMessage = null;
  }, 4000); // Auto dismiss after 4 seconds
}
}
