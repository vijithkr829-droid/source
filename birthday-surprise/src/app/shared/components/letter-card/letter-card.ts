import { Component, Input } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-letter-card',
  imports: [RevealDirective],
  templateUrl: './letter-card.html',
  styleUrl: './letter-card.css',
})
export class LetterCard {
  @Input({ required: true }) salutation = '';
  @Input({ required: true }) paragraphs: readonly string[] = [];
}
