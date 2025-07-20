import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Download, LucideAngularModule, Menu, X } from "lucide-angular";

@Component({
  selector: "app-header",
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  isMenuOpen = false;
  downloadIcon = Download;
  menuIcon = Menu;
  xIcon = X;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      this.isMenuOpen = false;
    }
  }
}
