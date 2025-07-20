import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  ArrowRight,
  Code,
  LucideAngularModule,
  Sparkles,
  Zap,
} from "lucide-angular";

@Component({
  selector: "app-hero",
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css",
})
export class HeroComponent {
  arrowRightIcon = ArrowRight;
  sparklesIcon = Sparkles;
  codeIcon = Code;
  zapIcon = Zap;

  techStack = ["Angular", "React", ".NET", "Python", "JavaScript"];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}
