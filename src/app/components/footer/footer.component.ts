import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  standalone: false,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, OnDestroy {
  readonly email = 'kristian.pejich@gmail.com';
  currentYear = new Date().getFullYear();
  localTime = '';
  copied = false;

  private clock?: ReturnType<typeof setInterval>;
  private copiedReset?: ReturnType<typeof setTimeout>;
  private readonly timeFormat = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Sarajevo',
  });

  constructor(public lang: LanguageService) {}

  ngOnInit(): void {
    this.updateTime();
    this.clock = setInterval(() => this.updateTime(), 15000);
  }

  ngOnDestroy(): void {
    clearInterval(this.clock);
    clearTimeout(this.copiedReset);
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
    } catch {
      // Clipboard API is unavailable (older browser or insecure origin).
      const field = document.createElement('textarea');
      field.value = this.email;
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      document.execCommand('copy');
      field.remove();
    }
    this.copied = true;
    clearTimeout(this.copiedReset);
    this.copiedReset = setTimeout(() => (this.copied = false), 2000);
  }

  private updateTime(): void {
    this.localTime = this.timeFormat.format(new Date());
  }
}
