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
      company: 'QPlay.cz',
      companyUrl: 'https://qplay.cz',
      position: 'Full-Stack Web Developer',
      period: 'October, 2023 - March, 2024',
      description:
        'Adding features to an already built page. Minor website modifications. The project was ended in March 2024.',
      color: '#36b5c9',
    },
    {
      company: 'Pixelnite',
      companyUrl: 'https://pixelnite.example',
      position: 'Full-Stack Web Developer',
      period: 'July, 2024',
      description:
        'Website for minecraft server called Pixelnite. It contains the current number of players on a server, news, admin team and other informations.',
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
