import { Directive, ElementRef, OnDestroy, OnInit, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (
      typeof IntersectionObserver === 'undefined' ||
      (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    ) {
      return;
    }

    this.renderer.addClass(this.element.nativeElement, 'reveal-pending');
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.element.nativeElement, 'revealed');
          this.observer?.unobserve(this.element.nativeElement);
        }
      },
      { threshold: 0.12 },
    );
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
