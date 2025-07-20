import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  imports: [CommonModule],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  offerings = [
    "Full-stack web development",
    "API integrations and backend solutions",
    "Modern JavaScript frameworks",
    "Database design and optimization",
  ];

  stats = [
    { value: "2+", label: "Years Experience", color: "text-blue-600" },
    { value: "10+", label: "Technologies", color: "text-purple-600" },
    { value: "3", label: "Major Projects", color: "text-blue-600" },
    { value: "100%", label: "Freelance Ready", color: "text-purple-600" },
  ];
}
