import { Routes } from '@angular/router';

// Make sure all routes are properly exported
export const routes: Routes = [
  // Define your routes here
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/hero/hero.component').then((m) => m.HeroComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./components/project-showcase/project-showcase.component').then(
        (m) => m.ProjectShowcaseComponent
      ),
  },
  {
    path: 'experience',
    loadComponent: () =>
      import('./components/experience/experience.component').then(
        (m) => m.ExperienceComponent
      ),
  },
  {
    path: 'education',
    loadComponent: () =>
      import('./components/education/education.component').then(
        (m) => m.EducationComponent
      ),
  },
  {
    path: 'certificates',
    loadComponent: () =>
      import('./components/certificates/certificates.component').then(
        (m) => m.CertificatesComponent
      ),
  },
  // Add a wildcard route
  { path: '**', redirectTo: '/home' },
];

// main.ts (updated)
import { bootstrapApplication } from '@angular/platform-browser';

import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';

// app.component.ts (update the imports section)
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

// Import all components used in your template
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { TechStackComponent } from './components/tech-stack/tech-stack.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectShowcaseComponent } from './components/project-showcase/project-showcase.component';
import { EducationComponent } from './components/education/education.component';
import { CertificatesComponent } from './components/certificates/certificates.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    console.log('AppComponent initialized');
  }
}
