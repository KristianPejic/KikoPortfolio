import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-education',
  templateUrl: './education.component.html',
})
export class EducationComponent {
  educationItems = [
    {
      institution: 'Bachelor of Computer Science',
      place:
        'Faculty of Natural Sciences, Mathematics, and Educational Sciences, University of Mostar',
      period: '2021 - 2024',
    },
    {
      institution: 'Gymnasium, Secondary School Antun Branko Šimić',
      place: 'Dr. Franje Tuđmana 14, Grude (BiH)',
      period: '2017 - 2021',
    },
  ];
}
