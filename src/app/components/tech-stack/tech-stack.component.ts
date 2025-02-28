import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

interface Technology {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css'],
})
export class TechStackComponent implements OnInit, AfterViewInit {
  technologies: Technology[] = [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'TypeScript', icon: 'fab fa-js' },
    { name: 'PostgreSQL', icon: 'fas fa-database' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Spring Boot', icon: 'fas fa-cogs' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'React', icon: 'fab fa-react' },
  ];

  ngOnInit() {
    // No need to manually duplicate the array, we handle it in the template
  }

  // Implementing ngAfterViewInit method from AfterViewInit interface
  ngAfterViewInit(): void {
    // Your logic here (e.g., accessing DOM elements after view initialization)
    console.log('View has been initialized');
  }
}
