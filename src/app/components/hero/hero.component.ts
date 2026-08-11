import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  standalone: false,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  constructor(public lang: LanguageService) {}
}
