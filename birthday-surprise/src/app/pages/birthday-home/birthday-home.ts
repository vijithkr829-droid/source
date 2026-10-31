import { Component, inject } from '@angular/core';
import { MusicService } from '../../core/services/music';
import { birthdayChallenges, birthdayLetter, birthdayMoments, birthdayNotes, memories, recipientName } from '../../shared/models/birthday-content';
import { LetterCard } from '../../shared/components/letter-card/letter-card';
import { PhotoGallery } from '../../shared/components/photo-gallery/photo-gallery';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-birthday-home',
  imports: [LetterCard, PhotoGallery, RevealDirective],
  templateUrl: './birthday-home.html',
  styleUrl: './birthday-home.css',
})
export class BirthdayHome {
  private readonly music = inject(MusicService);
  protected readonly recipientName = recipientName;
  protected readonly letter = birthdayLetter;
  protected readonly memories = memories;
  protected readonly birthdayNotes = birthdayNotes;
  protected readonly birthdayMoments = birthdayMoments;
  protected readonly birthdayChallenges = birthdayChallenges;
  protected activeNoteId: string | null = null;
  protected pickedChallengeIds: string[] = [];

  protected get completedMomentCount(): number {
    return this.pickedChallengeIds.length;
  }

  protected get challengeProgress(): number {
    return (this.completedMomentCount / this.birthdayChallenges.length) * 100;
  }

  protected startMusic(): void {
    this.music.startAfterWelcome();
  }

  protected toggleNote(noteId: string): void {
    this.activeNoteId = this.activeNoteId === noteId ? null : noteId;
  }

  protected isChallengePicked(challengeId: string): boolean {
    return this.pickedChallengeIds.includes(challengeId);
  }

  protected toggleChallenge(challengeId: string): void {
    this.pickedChallengeIds = this.isChallengePicked(challengeId)
      ? this.pickedChallengeIds.filter((id) => id !== challengeId)
      : [...this.pickedChallengeIds, challengeId];
  }

  protected hideMissingImage(event: Event): void {
    const image = event.target;
    if (image instanceof HTMLImageElement) image.remove();
  }
}
