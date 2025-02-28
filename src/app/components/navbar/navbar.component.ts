import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // Change currentLanguage type to match the 'Language' type ('en' | 'hr')
  currentLanguage: 'en' | 'hr' = 'en';

  constructor(private languageService: LanguageService) {}

  toggleLanguage() {
    // Toggle between 'en' and 'hr'
    this.currentLanguage = this.currentLanguage === 'en' ? 'hr' : 'en';
    this.languageService.setLanguage(this.currentLanguage); // This now works without error
  }
}
