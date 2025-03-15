// app.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading = true;
  displayText = '';
  finalText = '';
  showFinalText = false;
  private fullText =
    '<span class="color-cyan-650 font-bold text-2xl">Welcome</span>';
  private typingSpeed = 20;
  private currentIndex = 0;

  ngOnInit() {
    this.typeText();
  }

  typeText() {
    if (this.currentIndex < this.fullText.length) {
      // Add character to display text (showing the code being typed)
      this.displayText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    } else {
      // When typing is complete, wait a moment then transform
      setTimeout(() => {
        this.transformText();
      }, 500);
    }
  }

  transformText() {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = this.fullText;
    const spanElement = tempDiv.querySelector('span');

    if (spanElement) {
      const textContent = spanElement.textContent || 'Welcome';

      this.finalText = textContent;
      this.showFinalText = true;
      this.displayText = '';

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    } else {
      this.finalText = 'Welcome';
      this.showFinalText = true;
      this.displayText = '';

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
}
