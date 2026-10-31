import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { birthdayWish, finalMessage, heartfeltLetter, littleReasons, memories, recipientName } from '../../shared/models/birthday-content';
import { LetterCard } from '../../shared/components/letter-card/letter-card';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-heartfelt-surprise',
  imports: [RouterLink, LetterCard, RevealDirective],
  templateUrl: './heartfelt-surprise.html',
  styleUrl: './heartfelt-surprise.css',
})
export class HeartfeltSurprise {
  protected readonly recipientName = recipientName;
  protected readonly letter = heartfeltLetter;
  protected readonly reasons = littleReasons;
  protected readonly memories = memories;
  protected readonly birthdayWish = birthdayWish;
  protected readonly finalMessage = finalMessage;

  protected hideMissingImage(event: Event): void {
    const image = event.target;
    if (image instanceof HTMLImageElement) image.remove();
  }
}
