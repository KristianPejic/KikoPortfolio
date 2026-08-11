import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  standalone: false,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isMenuOpen = false;
  constructor(public lang: LanguageService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleLanguage() {
    this.lang.setLanguage(this.lang.current === 'en' ? 'hr' : 'en');
  }
}
