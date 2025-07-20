import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Service {
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: "app-skills",
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.css",
})
export class SkillsComponent implements OnInit {
  animatedLevels: { [key: string]: number } = {};

  skillCategories: SkillCategory[] = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "Angular", level: 90 },
        { name: "React", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 80 },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: ".NET", level: 90 },
        { name: "C#", level: 85 },
        { name: "Python", level: 80 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      title: "Other Technologies",
      skills: [
        { name: "Java", level: 75 },
        { name: "Git & Version Control", level: 90 },
        { name: "API Development", level: 85 },
        { name: "Data Science Fundamentals", level: 70 },
      ],
    },
  ];

  services: Service[] = [
    {
      title: "Web Development",
      description:
        "Full-stack web applications using modern frameworks and technologies",
      icon: "🌐",
    },
    {
      title: "API Integration",
      description:
        "Seamless integration of third-party APIs and custom API development",
      icon: "🔗",
    },
    {
      title: "Software Solutions",
      description:
        "Custom software development tailored to your business needs",
      icon: "💻",
    },
    {
      title: "Consulting",
      description:
        "Technical consulting and architecture planning for your projects",
      icon: "🎯",
    },
  ];
  ngOnInit() {
    // Animate skill bars
    setTimeout(() => {
      this.skillCategories.forEach((category) => {
        category.skills.forEach((skill) => {
          this.animatedLevels[skill.name] = skill.level;
        });
      });
    }, 500);
  }
}
