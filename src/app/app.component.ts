import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading = true;
  displayText = '';
  private fullText = '<Loading>Welcome</Loading>';
  private typingSpeed = 50;
  private currentIndex = 0;

  ngOnInit() {
    this.typeText();

    setTimeout(() => {
      this.loading = false;
    }, this.fullText.length * this.typingSpeed + 1000);
  }

  typeText() {
    if (this.currentIndex < this.fullText.length) {
      this.displayText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeText(), this.typingSpeed);
    }
  }
}
