import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Github, Linkedin, LucideAngularModule } from "lucide-angular";

@Component({
  selector: "app-footer",
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  githubIcon = Github;
  linkedinIcon = Linkedin;
  myEmailAddress = "shantanudutta07@gmail.com";

  navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
