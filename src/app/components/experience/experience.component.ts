import { Component } from '@angular/core';

interface Experience {
  company: string;
  companyUrl?: string;
  position: string;
  period: string;
  description: string;
  color?: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Global-Soft',
      companyUrl: 'https://www.globalsoft.co/',
      position: 'Back-end Web Developer',
      period: 'March, 2023 - June, 2023',
      description:
        'Working on a full-stack application using Node.js. The project was a To-Do list.',
      color: '#36b5c9',
    },
    {
      company: 'Ericsson',
      companyUrl: 'https://ericssonnikolatesla.com/',
      position: 'Full-Stack Web Developer',
      period: 'November, 2024 - January 2025',
      description:
        'Trello board like website , using Angular , Java Spring Boot , PostgreSQL. Implementing Login/Register , CRUD operations on boards and tasks, Drag n drop feature.',
      color: '#36b5c9',
    },
    {
      company: 'OpenSource',
      position: 'Contributor',
      period: 'May 2023 - Present',
      description: 'I actively try to contribute to Open Source on my GitHub.',
      color: '#36b5c9',
    },
  ];
}
