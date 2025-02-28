import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  currentLanguage: 'en' | 'hr' = 'en';

  constructor(private languageService: LanguageService) {}

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'hr' : 'en';
    this.languageService.setLanguage(this.currentLanguage);
  }
}
