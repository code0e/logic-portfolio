import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    name: "HavenDesk",
    summary:
      "A multi-tenant hotel management SaaS platform for managing hotel operations, guests, rooms, bookings and payments. Built with role-based hotel workspaces, public hotel pages and Paystack checkout.",
    technologies: ["React", "Django REST Framework", "PostgreSQL", "Redux Toolkit", "Paystack"],
    image: "/images/HavenDesk.png",
    liveUrl: "https://havendesk-frontend.vercel.app",
    featured: true,
  },
  {
    name: "SpendWise",
    summary:
      "A full-stack personal finance application for tracking income, expenses, categories and budgets, with JWT authentication, transaction management, CSV export and analytics.",
    technologies: ["React", "Django REST Framework", "PostgreSQL", "Redux Toolkit", "Tailwind CSS"],
    image: "/images/spendWise.png",
  },
  {
    name: "NexaMart",
    summary:
      "A responsive e-commerce frontend with structured product listings, interactive product cards and a shopping cart with quantity and subtotal calculations.",
    technologies: ["JavaScript", "HTML", "CSS", "Responsive Design"],
    image: "/images/NexaMart.png",
    liveUrl: "https://nexamart-ecommerce-one.vercel.app",
    githubUrl: "https://github.com/code0e/nexaMart-e-commerce-react-project",
  },
  {
    name: "Banking Management System",
    summary:
      "A command-line banking simulation built with object-oriented Python and SQLite, with structured account operations and an automated test suite.",
    technologies: ["Python", "OOP", "SQLite", "Unit Testing"],
    githubUrl: "https://github.com/code0e/banking_system",
  },
  {
    name: "Logic CGPA Tracker",
    summary:
      "A responsive academic tool that helps students enter course information and calculate their CGPA on a five-point scale.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    image: "/images/Logic CGPA Tracker.png",
    liveUrl: "https://logic-gpa-tracker.vercel.app",
    githubUrl: "https://github.com/code0e/logic-gpa-tracker",
  },
];
