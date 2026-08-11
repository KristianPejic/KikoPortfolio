// certificates.component.ts
import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  standalone: false,
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
})
export class CertificatesComponent {
  constructor(public lang: LanguageService) {}

  certificates = [
    {
      date: '01.11.2021 - 27.12.2021',
      institution: 'Cultural Center King Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Advanced Computer Science - Programming 1 (C++)',
    },
    {
      date: '07.03.2022 - 28.04.2022',
      institution: 'Cultural Center King Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Advanced Computer Science - Programming 2 (C++)',
    },
    {
      date: '06.03.2023 - 24.04.2023',
      institution: 'Cultural Center King Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Advanced Computer Science - Programming 3 (C++)',
    },
    {
      date: '01.11.2022 - 17.12.2022',
      institution: 'Cultural Center King Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Advanced Computer Science - Web Design (HTML & CSS)',
    },
    {
      date: '06.03.2022 - 24.04.2022',
      institution: 'Cultural Center King Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Advanced Computer Science - Databases 1 (Access)',
    },
    {
      date: '13.11.2022 - 04.03.2023',
      institution: 'Cultural Center King Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Advanced Computer Science - Databases 2 (SQL)',
    },
    {
      date: '10.01.2022 - 19.02.2022',
      institution: 'Cultural Center King Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Graphical Design 1 - Adobe Photoshop',
    },
    {
      date: '02.05.2022 - 11.06.2022',
      institution: 'Cultural Center King Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Graphical Design 2 - Adobe Illustrator',
    },
    {
      date: '03.10.2022 - 12.11.2022',
      institution: 'Cultural Center King Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Graphical Design 3 - Adobe InDesign',
    },
    {
      date: '06.03.2023 - 15.04.2023',
      institution: 'Cultural Center King Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Graphical Design 4 - Adobe After Effects',
    },
  ];
}
