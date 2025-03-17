import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
})
export class EducationComponent {
  educationItems = [
    {
      institution: 'Sveučilišni prvostupnik informatike',
      place:
        'Fakultet prirodoslovno-matematičkih i obrazovanih znanosti, Sveučilište u Mostaru',
      period: '2021 - 2024',
    },
    {
      institution: 'Gimnazija, Srednja škola Antuna Branka Šimića',
      place: 'Dr. Franje Tuđmana 14, Grude(BiH)',
      period: '2017 - 2021',
    },
  ];
}
