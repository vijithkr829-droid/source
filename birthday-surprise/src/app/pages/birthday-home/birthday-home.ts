import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MusicService } from '../../core/services/music';
import { birthdayLetter, memories, qualities, recipientName } from '../../shared/models/birthday-content';
import { LetterCard } from '../../shared/components/letter-card/letter-card';
import { PhotoGallery } from '../../shared/components/photo-gallery/photo-gallery';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-birthday-home',
  imports: [RouterLink, LetterCard, PhotoGallery, RevealDirective],
  templateUrl: './birthday-home.html',
  styleUrl: './birthday-home.css',
})
export class BirthdayHome {
  private readonly music = inject(MusicService);
  protected readonly recipientName = recipientName;
  protected readonly letter = birthdayLetter;
  protected readonly memories = memories;
  protected readonly qualities = qualities;

  protected openSurprise(): void {
    this.music.startAfterWelcome();
  }

  protected hideMissingImage(event: Event): void {
    const image = event.target;
    if (image instanceof HTMLImageElement) image.remove();
  }
}
