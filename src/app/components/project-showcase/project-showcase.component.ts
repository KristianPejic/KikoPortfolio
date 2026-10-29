import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
  liveLink?: string;
}

@Component({
  standalone: false,
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css'],
})
export class ProjectShowcaseComponent implements OnInit {
  hoveredProject: number | null = null;
  currentPage = 1;
  projectsPerPage = 3;
  selectedProject: Project | null = null;
  showModal = false;
  selectedTech: string | null = null;

  techIcons: Record<string, string> = {
    Angular: 'fab fa-angular',
    React: 'fab fa-react',
    'Vue.js': 'fab fa-vuejs',
    TypeScript: 'fab fa-js',
    JavaScript: 'fab fa-js',
    'Node.js': 'fab fa-node-js',
    HTML: 'fab fa-html5',
    CSS: 'fab fa-css3-alt',
    SCSS: 'fab fa-sass',
    Sass: 'fab fa-sass',
    Tailwind: 'fab fa-css3',
    MongoDB: 'fas fa-database',
    PostgreSQL: 'fas fa-database',
    MySQL: 'fas fa-database',
    Firebase: 'fas fa-fire',
    Java: 'fab fa-java',
    'Spring Boot': 'fas fa-leaf',
    Python: 'fab fa-python',
    Git: 'fab fa-git-alt',
    Laravel: 'fab fa-laravel',
    Kotlin: 'fab fa-android',
  };

  projects: Project[] = [
    {
      title: 'Matica hrvatska Travnik',
      description:
        'News and culture website for the Matica hrvatska branch in Travnik, with news articles, a gallery, contact page and a full admin panel for managing content. Built with Angular SSR, Spring Boot and PostgreSQL, deployed with Docker and Caddy.',
      imageUrl: 'MaticaTravnik.jpg',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Tailwind'],
      liveLink: 'https://maticatravnik.com/',
    },
    {
      title: 'Finance Manager',
      description:
        'Personal finance management application for tracking income, expenses and budgets.',
      imageUrl: 'FinanceManager.png',
      technologies: ['Java'],
      link: 'https://github.com/KristianPejic/UpravljanjeFinancijama',
    },
    {
      title: 'Arena Shooter',
      description: 'Browser based arena shooter game built with TypeScript.',
      imageUrl: 'ArenaShooter.png',
      technologies: ['TypeScript'],
      link: 'https://github.com/KristianPejic/ArenaShooter',
    },
    {
      title: 'Library App',
      description:
        'Library management application built with Vue.js, an Open API and a Node.js backend on MariaDB.',
      imageUrl: 'LibraryApp.png',
      technologies: ['Vue.js', 'Node.js', 'MySQL'],
      link: 'https://github.com/KristianPejic/LibraryApp',
    },
    {
      title: 'Parking Project',
      description: 'Parking management system built with Python.',
      imageUrl: 'ParkingProjekt.png',
      technologies: ['Python'],
      link: 'https://github.com/KristianPejic/ParkingProjekt',
    },
    {
      title: 'SportRadar',
      description: 'World Cup live results application built with Java.',
      imageUrl: 'SportRadar.png',
      technologies: ['Java'],
      link: 'https://github.com/KristianPejic/SportRadar',
    },
    {
      title: 'Ecommerce',
      description:
        'E-commerce store with Angular, Java Spring Boot and a MySQL database.',
      imageUrl: 'Ecommerce.png',
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      link: 'https://github.com/KristianPejic/Ecommerce',
    },
    {
      title: 'Volkswagen Website',
      description: 'Volkswagen showcase website built with HTML/CSS/JS.',
      imageUrl: 'Volkswagen.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/KristianPejic/Volkswagen',
    },
    {
      title: 'Berik Barbershop',
      description:
        'Modern barbershop website with login/register, reservations, administration, shop purchases, a blog system, a cart system and much more.',
      imageUrl: 'BarberShop.png',
      technologies: ['Laravel', 'Tailwind', 'MySQL'],
      link: 'https://github.com/tioberik/beriks-barbershop',
      liveLink: 'http://pzi132024.studenti.sum.ba/',
    },
    {
      title: 'TravelPlanner',
      description:
        'TravelPlanner is an easy-to-use Android application for travelling and planning your trips: you pick your desired location and the application does the rest.',
      imageUrl: 'TravelPlannerApp.png',
      technologies: ['Kotlin'],
      link: 'https://github.com/KristianPejic/TravelMate',
    },
    {
      title: 'Job Application',
      description: 'Backend made for handling job applications.',
      imageUrl: 'JobApp.png',
      technologies: ['Spring Boot', 'MySQL'],
      link: 'https://github.com/KristianPejic/JobApplication',
    },
    {
      title: 'Learning Analytics',
      description:
        'Learning Analytics is a web application that analyzes a dataset of student exam performance using ML and DL algorithms and predictions.',
      imageUrl: 'AnalyticsLearning.png',
      technologies: ['Python', 'Angular'],
      link: 'https://github.com/KristianPejic/StudentsPerformanceAnalytics',
    },
    {
      title: 'Global-Soft To-do list',
      description:
        'Full-stack to-do list app, made during my internship at Global-Soft.',
      imageUrl: 'GlobalSoft.png',
      technologies: ['Node.js', 'React', 'MySQL'],
      link: 'https://github.com/KristianPejic/Global-Soft-To-Do-List',
    },
    {
      title: 'FastAPI App',
      description:
        'FastAPI application for product and user management, with Swagger UI for the API docs.',
      imageUrl: 'FastApi.png',
      technologies: ['Python'],
      link: 'https://github.com/KristianPejic/FastApiProject',
    },
    {
      title: 'Blog App',
      description:
        'Blog application with login/register, hashtag creation, post creation, a like system and more.',
      imageUrl: 'BlogApp.png',
      technologies: ['React', 'Spring Boot', 'MySQL'],
      link: 'https://github.com/KristianPejic/BlogApp',
    },
    {
      title: 'Netflix Replica',
      description:
        'Angular/Spring Boot/MySQL site with login/register, JWT security, CRUD operations, authentication, a forgot-password flow and more.',
      imageUrl: 'NetflixReplica.png',
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      link: 'https://github.com/KristianPejic/NetflixReplica',
    },
    {
      title: 'Trello board replica',
      description:
        'Full-stack Trello board replica, made during my internship at Ericsson.',
      imageUrl: 'TrelloBoard.png',
      technologies: ['Spring Boot', 'Angular', 'MySQL'],
      link: 'https://github.com/KristianPejic/TrelloBoard',
    },
    {
      title: 'Pokedle',
      description:
        'Fun, interactive Pokémon guessing game, made for the sole purpose of learning Angular.',
      imageUrl: 'Pokedle.png',
      technologies: ['Angular'],
      link: 'https://github.com/KristianPejic/Pokedle',
      liveLink: 'https://pokedle-kappa.vercel.app/',
    },
    {
      title: 'Python Database Project',
      description: 'Project using Python to manipulate data in PostgreSQL',
      imageUrl: 'python.png',
      technologies: ['Python', 'PostgreSQL'],
      link: 'https://github.com/KristianPejic/PythonDatabase',
    },
    {
      title: 'Super Cars Website',
      description: 'Freelance showcase website built for a client.',
      imageUrl: 'SuperCars.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/KristianPejic/SuperCars',
    },
    {
      title: 'BMW',
      description: 'Freelance showcase website built for a client.',
      imageUrl: 'BMW.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/KristianPejic/BMW',
    },
  ];

  constructor(public lang: LanguageService) {}

  ngOnInit(): void {}

  setHoveredProject(index: number | null): void {
    this.hoveredProject = index;
  }

  getIcon(tech: string): string {
    return this.techIcons[tech] || 'fas fa-code';
  }

  get allTechnologies(): string[] {
    const techs = new Set<string>();
    this.projects.forEach((p) => p.technologies.forEach((t) => techs.add(t)));
    return Array.from(techs).sort();
  }

  get filteredProjects(): Project[] {
    if (!this.selectedTech) {
      return this.projects;
    }
    return this.projects.filter((p) =>
      p.technologies.includes(this.selectedTech!)
    );
  }

  setFilter(tech: string | null): void {
    this.selectedTech = tech;
    this.currentPage = 1;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProjects.length / this.projectsPerPage);
  }

  get paginatedProjects(): Project[] {
    const startIndex = (this.currentPage - 1) * this.projectsPerPage;
    return this.filteredProjects.slice(
      startIndex,
      startIndex + this.projectsPerPage
    );
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  previousPage(): void {
    this.changePage(this.currentPage - 1);
  }

  nextPage(): void {
    this.changePage(this.currentPage + 1);
  }

  openProjectModal(project: Project): void {
    this.selectedProject = project;
    this.showModal = true;
    document.body.classList.add('overflow-hidden'); // Prevent scrolling when modal is open
  }

  closeModal(): void {
    this.showModal = false;
    this.selectedProject = null;
    document.body.classList.remove('overflow-hidden');
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.showModal) {
      this.closeModal();
    }
  }
}
