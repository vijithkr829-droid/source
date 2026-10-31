import { Component, Input } from '@angular/core';
import { PhotoItem } from '../../models/birthday-content';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-photo-gallery',
  imports: [RevealDirective],
  templateUrl: './photo-gallery.html',
  styleUrl: './photo-gallery.css',
})
export class PhotoGallery {
  @Input({ required: true }) photos: readonly PhotoItem[] = [];
  @Input() compact = false;

  protected markImageUnavailable(event: Event): void {
    const image = event.target;
    if (image instanceof HTMLImageElement) {
      image.closest('.photo-card')?.classList.add('image-unavailable');
      image.remove();
    }
  }
}
