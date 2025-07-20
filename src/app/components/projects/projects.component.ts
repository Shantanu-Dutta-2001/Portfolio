import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { ArrowRight, Github, LucideAngularModule } from "lucide-angular";

interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  challenges: string;
  results: string;
  githubUrl?: string | null;
  liveUrl?: string | null;
}

@Component({
  selector: "app-projects",
  imports: [CommonModule, LucideAngularModule],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.css",
})
export class ProjectsComponent {
  flippedCards = signal<number[]>([]);

  projects: Project[] = [
    {
      title: "ERS - Event Registration System",
      description: "A comprehensive event registration platform built with Angular 19 and .NET 8, featuring user authentication, event management, and payment integration with modern reactive patterns.",
      detailedDescription: "ERA is a cutting-edge full-stack event registration system leveraging Angular 19's latest features including standalone components, signals, and control flow. Built with .NET 8 Web APIs and Entity Framework Core 8, it features a modern, responsive interface with Angular Material 18. The system includes advanced user authentication with JWT tokens, role-based access control using Angular Guards, and secure payment processing through Stripe integration. Key features include real-time event capacity tracking using SignalR, automated email notifications with background services, comprehensive reporting dashboards with Angular Charts, and multi-language support using Angular i18n. The application handles high-volume registrations with optimized database queries and implements proper error handling with Angular's new error handling patterns.",
      technologies: ["Angular 19", ".NET 8", "C#", "SQL Server", "SignalR", "Angular Material"],
      features: ["User Registration", "Event Management", "Payment Gateway", "Admin Dashboard", "Real-time Updates"],
      image: "🎟️",
      challenges: "Implemented Angular 19's new control flow (@if, @for) for better performance, used signals for reactive state management, and optimized database performance for handling concurrent registrations with proper async patterns.",
      results: "Successfully processed over 15,000 registrations with 99.9% uptime, reduced registration time by 70% using Angular's new features, and improved user experience with reactive forms and instant feedback.",
      githubUrl: null,
      liveUrl: null
    },
    {
      title: "EMS - Event Management System",
      description: "Enterprise-grade event management platform with Angular 19 standalone architecture, real-time updates, attendee tracking, and comprehensive reporting capabilities.",
      detailedDescription: "EMS is a next-generation enterprise event management platform built with Angular 19's standalone components and signals-based architecture. The system leverages .NET 8 minimal APIs with clean architecture patterns and SignalR for real-time communication. It features a sophisticated attendee management system with QR code generation using Angular QR libraries, check-in/check-out tracking with PWA capabilities, and live analytics dashboard using Angular Charts and observables. The platform includes advanced scheduling with Angular CDK drag-and-drop, resource management with reactive forms, vendor coordination modules, and automated workflows using RxJS operators. Built with microservices architecture using Docker containers and deployed on Azure with Angular Universal for SSR performance.",
      technologies: ["Angular 19", ".NET 8", "Entity Framework", "SignalR", "Angular Material", "PWA"],
      features: ["Real-time Updates", "Attendee Tracking", "QR Code Generation", "Analytics Dashboard", "Offline Support"],
      image: "📅",
      challenges: "Architected a scalable microservices solution with Angular 19's new injection context, implemented real-time data synchronization using signals and RxJS, and created a PWA with offline capabilities using Angular Service Worker.",
      results: "Managed events with 75,000+ attendees, reduced check-in time by 85% with QR scanning, provided real-time insights with sub-second updates, and achieved 98% offline functionality coverage.",
      githubUrl: null,
      liveUrl: null
    },
    // {
    //   title: "HDS - Help Desk System",
    //   description: "Modern IT help desk application built with Angular 19 featuring intelligent ticket management, AI-powered responses, and advanced analytics with real-time collaboration.",
    //   detailedDescription: "HAS is a comprehensive IT service management system built with Angular 19's latest features including signals, standalone components, and the new control flow syntax. Developed using .NET 8 Web APIs with clean architecture, Entity Framework Core 8, and SQL Server database. The system features intelligent ticket routing using machine learning algorithms, automated escalation workflows with Angular animations, and SLA monitoring with real-time alerts using Angular Material notifications. It includes an AI-powered knowledge base with searchable articles using Angular's new search capabilities, integrated chat system with SignalR for real-time support, and comprehensive reporting with interactive charts using Angular Charts. The application implements advanced role-based permissions with Angular Guards, audit trails with detailed logging, and integrates with Active Directory for seamless user management using Microsoft Graph APIs.",
    //   technologies: ["Angular 19", ".NET 8", "SQL Server", "Web APIs", "AI/ML", "Azure"],
    //   features: ["Intelligent Routing", "Real-time Chat", "Advanced Analytics", "Role-based Access"],
    //   image: "🎫",
    //   challenges: "Integrated AI/ML capabilities for intelligent ticket categorization, implemented complex workflow automation with Angular's reactive patterns, and created efficient search algorithms with debounced inputs and caching strategies.",
    //   results: "Reduced average ticket resolution time by 60%, improved customer satisfaction scores by 45%, automated 85% of routine tasks, and achieved 40% faster response times with AI assistance.",
    //   githubUrl: null,
    //   liveUrl: null
    // },
    {
      title: "Studio - Learning Management System",
      description: "Scalable LMS built with Angular 10 and Spring Boot, enabling efficient online course delivery, progress tracking, and collaborative learning for institutions and enterprises.",
      detailedDescription: "Studio is a robust Learning Management System designed using Angular 10 and Java Spring Boot, aimed at simplifying online education and training. The frontend leverages Angular modules, lazy loading, and reactive forms for performance and responsiveness, while the backend is powered by Spring Boot RESTful APIs with JWT-based authentication, Hibernate ORM, and MySQL/PostgreSQL for persistence. Key features include dynamic course creation with multimedia support, role-based dashboards for students, instructors, and admins, real-time quiz evaluation with custom timers, and assignment submission tracking. The system integrates video content hosting, discussion forums, and automated email notifications for improved learner engagement. Admin features include analytics dashboards, user management, and customizable grading workflows. Designed with scalability and security in mind, Studio supports OAuth 2.0 integration and secure file handling.",
      technologies: ["Angular 10", "Spring Boot", "MySQL", "REST APIs", "JWT", "OAuth 2.0"],
      features: ["Course Management", "Student Progress Tracking", "Quiz & Assignment Modules", "Admin Dashboard"],
      image: "🎓",
      challenges: "Implemented secure user roles and permissions, optimized real-time quiz evaluations using reactive patterns, and ensured scalability for concurrent users with efficient pagination and caching mechanisms.",
      results: "Enabled seamless learning for over 5,000 users, reduced instructor workload by 50% with automation, improved assessment turnaround by 65%, and enhanced user retention with gamified learning experiences.",
      githubUrl: null,
      liveUrl: null
    }

  ];

  toggleCardFlip(index: number): void {
    this.flippedCards.update(cards => 
      cards.includes(index) 
        ? cards.filter(i => i !== index)
        : [...cards, index]
    );
  }

  openGithub(url?: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  openLiveDemo(url?: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
