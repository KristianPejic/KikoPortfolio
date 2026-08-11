import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'hr';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<Language>(
    this.getInitialLanguage()
  );
  public language$ = this.languageSubject.asObservable();

  private translations: Record<Language, Record<string, string>> = {
    en: {
      about: 'About',
      myWork: 'My work',
      projects: 'Projects',
      posts: 'Posts',
      contactMe: 'Contact Me',
      education: 'Education',
      whatIWorkWith: 'What I work with',
      experience: 'Experience',
      myProjects: 'My projects',
      myEducation: 'My education',
      myCertificates: 'My certificates',
      viewSource: 'View Source',
      liveDemo: 'Live Demo',
      all: 'All',
      location: 'Grude, Bosnia and Herzegovina',
      nationality: 'Croatian',
      heroBio:
        "I'm a Full-Stack Web Developer with 5 years of experience, specializing in creating websites and web applications. Currently, I'm expanding my expertise in Data Science, working towards becoming a Data Science Engineer.",
      daysOfExperience: 'days of professional experience — and counting',
      footerCreated: 'Created in Bosnia and Herzegovina',
      footerBuiltWith: 'Built with',
      footerUsing: 'using',
      footerLookAt: 'Look at some of my projects on',
    },
    hr: {
      about: 'O meni',
      myWork: 'Moj rad',
      projects: 'Projekti',
      posts: 'Objave',
      contactMe: 'Kontaktiraj me',
      education: 'Obrazovanje',
      whatIWorkWith: 'S čime radim',
      experience: 'Iskustvo',
      myProjects: 'Moji projekti',
      myEducation: 'Moje obrazovanje',
      myCertificates: 'Moji certifikati',
      viewSource: 'Pogledaj kod',
      liveDemo: 'Demo uživo',
      all: 'Sve',
      location: 'Grude, Bosna i Hercegovina',
      nationality: 'Hrvat',
      heroBio:
        'Full-stack web developer sam s 5 godina iskustva, specijaliziran za izradu web stranica i web aplikacija. Trenutno proširujem svoje znanje u području podatkovne znanosti, s ciljem da postanem Data Science inženjer.',
      daysOfExperience: 'dana profesionalnog iskustva — i broji se dalje',
      footerCreated: 'Izrađeno u Bosni i Hercegovini',
      footerBuiltWith: 'Izrađeno s',
      footerUsing: 'koristeći',
      footerLookAt: 'Pogledaj neke od mojih projekata na',
    },
  };

  get current(): Language {
    return this.languageSubject.value;
  }

  private getInitialLanguage(): Language {
    try {
      return localStorage.getItem('language') === 'hr' ? 'hr' : 'en';
    } catch {
      return 'en';
    }
  }

  setLanguage(lang: Language) {
    try {
      localStorage.setItem('language', lang);
    } catch {}
    this.languageSubject.next(lang);
  }

  t(key: string): string {
    return this.translations[this.current][key] || key;
  }

  getTranslation(key: string): string {
    return this.t(key);
  }
}
