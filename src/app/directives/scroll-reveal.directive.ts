import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  standalone: false,
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const node = this.el.nativeElement;
    this.renderer.addClass(node, 'scroll-reveal');

    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(node, 'revealed');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(node, 'revealed');
            this.observer?.unobserve(node);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -80px 0px' }
    );
    this.observer.observe(node);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
