import { Component } from '@angular/core';
import { LanguageService, Language } from '../../services/language.service';

interface Experience {
  company: string;
  companyUrl?: string;
  position: string;
  period: Record<Language, string>;
  description: Record<Language, string>;
  color?: string;
}

@Component({
  standalone: false,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  // First working day: Global-Soft, March 2023
  private careerStart = new Date(2023, 2, 1);

  constructor(public lang: LanguageService) {}

  get daysOfExperience(): number {
    return Math.floor(
      (Date.now() - this.careerStart.getTime()) / (1000 * 60 * 60 * 24)
    );
  }

  experiences: Experience[] = [
    {
      company: 'Global-Soft',
      companyUrl: 'https://www.globalsoft.co/',
      position: 'Back-end Web Developer',
      period: {
        en: 'March 2023 - June 2023',
        hr: 'ožujak 2023. - lipanj 2023.',
      },
      description: {
        en: 'Working on a full-stack application using Node.js. The project was a To-Do list.',
        hr: 'Rad na full-stack aplikaciji koristeći Node.js. Projekt je bio To-Do lista.',
      },
      color: '#36b5c9',
    },
    {
      company: 'Ericsson',
      companyUrl: 'https://ericssonnikolatesla.com/',
      position: 'Full-Stack Web Developer',
      period: {
        en: 'November 2024 - January 2025',
        hr: 'studeni 2024. - siječanj 2025.',
      },
      description: {
        en: 'Trello board like website, using Angular, Java Spring Boot, PostgreSQL. Implementing Login/Register, CRUD operations on boards and tasks, Drag n drop feature.',
        hr: 'Web stranica nalik Trello ploči, koristeći Angular, Java Spring Boot i PostgreSQL. Implementacija prijave/registracije, CRUD operacija na pločama i zadacima te drag and drop funkcionalnosti.',
      },
      color: '#36b5c9',
    },
    {
      company: 'AG Chamaeleon',
      position: 'Full-Stack Web Developer',
      period: {
        en: 'July 2025 - Present',
        hr: 'srpanj 2025. - danas',
      },
      description: {
        en: 'Working as a Full-Stack Web Developer on client projects and internal products.',
        hr: 'Radim kao full-stack web developer na klijentskim projektima i internim proizvodima.',
      },
      color: '#36b5c9',
    },
    {
      company: 'OpenSource',
      position: 'Contributor',
      period: {
        en: 'May 2023 - Present',
        hr: 'svibanj 2023. - danas',
      },
      description: {
        en: 'I actively try to contribute to Open Source on my GitHub.',
        hr: 'Aktivno pokušavam doprinositi open sourceu na svom GitHubu.',
      },
      color: '#36b5c9',
    },
  ];
}
