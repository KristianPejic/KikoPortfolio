import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Language = 'en' | 'hr';

type TranslationKey =
  | 'about'
  | 'myWork'
  | 'projects'
  | 'posts'
  | 'contactMe'
  | 'whatIWorkWith'
  | 'experience';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<Language>('en');
  public language$ = this.languageSubject.asObservable();

  private translations: Record<Language, Record<TranslationKey, string>> = {
    en: {
      about: 'About',
      myWork: 'My work',
      projects: 'Projects',
      posts: 'Posts',
      contactMe: 'Contact Me',
      whatIWorkWith: 'What I work with',
      experience: 'Experience',
    },
    hr: {
      about: 'O meni',
      myWork: 'Moj rad',
      projects: 'Projekti',
      posts: 'Objave',
      contactMe: 'Kontaktiraj me',
      whatIWorkWith: 'S čime radim',
      experience: 'Iskustvo',
    },
  };

  setLanguage(lang: Language) {
    this.languageSubject.next(lang);
  }

  getTranslation(key: TranslationKey): string {
    const currentLang = this.languageSubject.value;
    return this.translations[currentLang][key] || key;
  }
}
