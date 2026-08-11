import { Component } from '@angular/core';
import { LanguageService, Language } from '../../services/language.service';

interface EducationItem {
  institution: Record<Language, string>;
  place: Record<Language, string>;
  period: string;
}

@Component({
  standalone: false,
  selector: 'app-education',
  templateUrl: './education.component.html',
})
export class EducationComponent {
  constructor(public lang: LanguageService) {}

  educationItems: EducationItem[] = [
    {
      institution: {
        en: 'Master of Computer Science',
        hr: 'Magistar računarstva',
      },
      place: {
        en: 'Faculty of Natural Sciences, Mathematics, and Educational Sciences, University of Mostar',
        hr: 'Fakultet prirodoslovno-matematičkih i odgojnih znanosti, Sveučilište u Mostaru',
      },
      period: '2024 - 2026',
    },
    {
      institution: {
        en: 'Bachelor of Computer Science',
        hr: 'Prvostupnik računarstva',
      },
      place: {
        en: 'Faculty of Natural Sciences, Mathematics, and Educational Sciences, University of Mostar',
        hr: 'Fakultet prirodoslovno-matematičkih i odgojnih znanosti, Sveučilište u Mostaru',
      },
      period: '2021 - 2024',
    },
    {
      institution: {
        en: 'Gymnasium, Secondary School Antun Branko Šimić',
        hr: 'Gimnazija, Srednja škola Antuna Branka Šimića',
      },
      place: {
        en: 'Dr. Franje Tuđmana 14, Grude (BiH)',
        hr: 'Dr. Franje Tuđmana 14, Grude (BiH)',
      },
      period: '2017 - 2021',
    },
  ];
}
