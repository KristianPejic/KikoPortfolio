import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface Technology {
  name: string;
  icon: string;
}

@Component({
  standalone: false,
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css'],
})
export class TechStackComponent implements OnInit, AfterViewInit {
  constructor(public lang: LanguageService) {}

  technologiesRow1: Technology[] = [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Vue.js', icon: 'fab fa-vuejs' },
    { name: 'TypeScript', icon: 'fab fa-js' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'Tailwind', icon: 'fab fa-css3' },
  ];

  technologiesRow2: Technology[] = [
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Spring Boot', icon: 'fas fa-leaf' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'PostgreSQL', icon: 'fas fa-database' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Kotlin', icon: 'fab fa-android' },
    { name: 'Laravel', icon: 'fab fa-laravel' },
  ];

  ngOnInit() {}

  ngAfterViewInit(): void {
    console.log('View has been initialized');
  }
}
