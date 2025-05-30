import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
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
  };

  projects: Project[] = [
    {
      title: 'Berik Barbershop',
      description:
        'Modern barbershop website that includes login/register,reservations,administration,shop purchases,blog system,cart system and much more.',
      imageUrl: 'BarberShop.png',
      technologies: ['Laravel', 'Tailwind', 'MySQL'],
      link: 'https://github.com/tioberik/beriks-barbershop',
      liveLink: 'http://pzi132024.studenti.sum.ba/',
    },
    {
      title: 'TravelPlanner',
      description:
        'TravelPlanner is a easy to use android application for travelling and planning your trips,you pick your desire location and the application will do the rest.',
      imageUrl: 'TravelPlanner.png',
      technologies: ['Java'],
      link: 'https://github.com/KristianPejic/TravelMate',
    },
    {
      title: 'Job Application',
      description: 'backend made for job applications',
      imageUrl: 'JobApp.png',
      technologies: ['Spring Boot', 'MySQL'],
      link: 'https://github.com/KristianPejic/JobApplication',
    },
    {
      title: 'Global-Soft To-do list',
      description:
        'To-do list,fullstack app , made while at practic work at Global-Soft.',
      imageUrl: 'GlobalSoft.png',
      technologies: ['Node.js', 'React', 'MySQL'],
      link: 'https://github.com/KristianPejic/Global-Soft-To-Do-List',
    },
    {
      title: 'Blog App',
      description:
        'Blog appliciation with login/register,hashtags creation,post creation,like system etc.',
      imageUrl: '/assets/images/projects/project2.jpg',
      technologies: ['React', 'Spring Boot', 'MySQL'],
      link: 'https://github.com/KristianPejic/BlogApp',
    },
    {
      title: 'Netflix Replica',
      description:
        'Angular/Spring Boot/MySQL site with login/register,jwt security,CRUD operation, auth , forgot password system etc...',
      imageUrl: 'NetflixReplica.png',
      technologies: ['Angular', 'Spring Boot', 'MySQL'],
      link: 'https://github.com/KristianPejic/NetflixReplica',
    },
    {
      title: 'Trello board replica',
      description:
        'Trello board replica,fullstack app , made while at practic work at Ericsson.',
      imageUrl: '/assets/images/projects/project3.jpg',
      technologies: ['Spring Boot', 'Angular', 'MySQL'],
      link: 'https://github.com/KristianPejic/TrelloBoard',
    },
    {
      title: 'Pokedle',
      description:
        'Fun,interacting pokemon guessing game.Made for sole purpose of learning angular',
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
      title: 'Crypto Analytics',
      description: 'Site made purely for the purpose of learning react.js',
      imageUrl: 'React.png',
      technologies: ['React'],
      link: 'https://github.com/KristianPejic/CryptoAnalytics',
    },
    {
      title: 'Super Cars Website',
      description: 'Freelance made application for someone.',
      imageUrl: 'SuperCars.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/KristianPejic/SuperCars',
    },
    {
      title: 'BMW',
      description: 'Freelance made application for someone.',
      imageUrl: 'BMW.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/KristianPejic/SuperCars',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  setHoveredProject(index: number | null): void {
    this.hoveredProject = index;
  }

  getIcon(tech: string): string {
    return this.techIcons[tech] || 'fas fa-code';
  }

  get totalPages(): number {
    return Math.ceil(this.projects.length / this.projectsPerPage);
  }

  get paginatedProjects(): Project[] {
    const startIndex = (this.currentPage - 1) * this.projectsPerPage;
    return this.projects.slice(startIndex, startIndex + this.projectsPerPage);
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
}
