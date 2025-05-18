import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  standalone: false,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  currentLanguage: 'en' | 'hr' = 'en';
  isMenuOpen = false;
  constructor(private languageService: LanguageService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'hr' : 'en';
    this.languageService.setLanguage(this.currentLanguage);
  }
}
