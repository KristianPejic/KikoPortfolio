import { Component, OnInit } from '@angular/core';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
}

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.css'],
})
export class ProjectShowcaseComponent implements OnInit {
  hoveredProject: number | null = null;
  currentPage = 1;
  projectsPerPage = 3;

  // Map technology names to their icons (only used in this component)
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
        'Modern barbershop website that includes login/register,reservations,administration,shop purchases,blog system,cart system and much more',
      imageUrl: '/assets/images/projects/project1.jpg',
      technologies: ['Laravel', 'Tailwind', 'MySQL'],
      link: '/projects/project-1',
    },
    {
      title: 'Blog App',
      description:
        'Blog appliciation with login/register,hashtags creation,post creation,like system etc.',
      imageUrl: '/assets/images/projects/project2.jpg',
      technologies: ['React', 'Java', 'MySQL'],
      link: '/projects/project-2',
    },
    {
      title: 'Super Cars Website',
      description:
        'Description for your third project. Talk about the technologies used and what problems it solves.',
      imageUrl: '/assets/images/projects/project3.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: '/projects/project-3',
    },
    {
      title: 'Super Cars Website',
      description:
        'Description for your third project. Talk about the technologies used and what problems it solves.',
      imageUrl: '/assets/images/projects/project3.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: '/projects/project-3',
    },
    {
      title: 'Super Cars Website',
      description:
        'Description for your third project. Talk about the technologies used and what problems it solves.',
      imageUrl: '/assets/images/projects/project3.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: '/projects/project-3',
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

  // Pagination methods
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
}
