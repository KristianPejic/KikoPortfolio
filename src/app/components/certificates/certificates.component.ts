// certificates.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
})
export class CertificatesComponent {
  certificates = [
    {
      date: '01.11.2021. - 27.12.2021.',
      institution: 'Kulturni Centar Kralj Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Napredna informatika - Programiranje 1 (C++)',
    },
    {
      date: '07.03.2022. - 28.04.2022.',
      institution: 'Kulturni Centar Kralj Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Napredna informatika - Programiranje 2 (C++)',
    },
    {
      date: '01.11.2022. - 17.12.2022.',
      institution: 'Kulturni Centar Kralj Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Napredna informatika - Web Dizajn(HTML & CSS)',
    },
    {
      date: '06.03.2022.-24.04.2022.',
      institution: 'Kulturni Centar Kralj Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Napredna informatika - Baze Podataka 1 (Access)',
    },
    {
      date: '13.11.2022. - 04.03.2023.',
      institution: 'Kulturni Centar Kralj Fahd',
      location: 'Mala Tepa, Mostar, BiH',
      title: 'Napredna informatika - Baze Podataka 2 (SQL)',
    },
  ];
}
