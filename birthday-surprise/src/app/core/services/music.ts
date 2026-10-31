import { Injectable, signal } from '@angular/core';

const MUSIC_SOURCE = 'assets/audio/birthday-music.wav';
const ENABLED_KEY = 'birthday-music-enabled';
const MUTED_KEY = 'birthday-music-muted';

@Injectable({ providedIn: 'root' })
export class MusicService {
  private audio?: HTMLAudioElement;
  private readonly enabledState = signal(this.readPreference(ENABLED_KEY, true));
  private readonly mutedState = signal(this.readPreference(MUTED_KEY, false));
  private readonly playingState = signal(false);
  private readonly errorState = signal('');

  readonly enabled = this.enabledState.asReadonly();
  readonly muted = this.mutedState.asReadonly();
  readonly playing = this.playingState.asReadonly();
  readonly error = this.errorState.asReadonly();

  startAfterWelcome(): void {
    this.enabledState.set(true);
    this.savePreference(ENABLED_KEY, true);
    this.ensureAudio();
    this.play();
  }

  togglePlayback(): void {
    if (this.playingState()) {
      this.audio?.pause();
      this.playingState.set(false);
      this.enabledState.set(false);
      this.savePreference(ENABLED_KEY, false);
      return;
    }

    this.enabledState.set(true);
    this.savePreference(ENABLED_KEY, true);
    this.ensureAudio();
    this.play();
  }

  toggleMuted(): void {
    const nextMuted = !this.mutedState();
    this.mutedState.set(nextMuted);
    if (this.audio) this.audio.muted = nextMuted;
    this.savePreference(MUTED_KEY, nextMuted);
  }

  private ensureAudio(): void {
    if (this.audio) return;

    this.audio = new Audio(MUSIC_SOURCE);
    this.audio.loop = true;
    this.audio.preload = 'none';
    this.audio.volume = 0.32;
    this.audio.muted = this.mutedState();
    this.audio.addEventListener('playing', () => {
      this.playingState.set(true);
      this.errorState.set('');
    });
    this.audio.addEventListener('pause', () => this.playingState.set(false));
    this.audio.addEventListener('error', () => {
      this.playingState.set(false);
      this.errorState.set('The birthday soundtrack could not be loaded from src/assets/audio/birthday-music.wav.');
    });
  }

  private play(): void {
    if (!this.audio) return;
    this.errorState.set('');
    void this.audio.play().catch(() => {
      this.playingState.set(false);
      this.errorState.set('The soundtrack could not be played. Check the audio file and try again.');
    });
  }

  private readPreference(key: string, fallback: boolean): boolean {
    try {
      const saved = sessionStorage.getItem(key);
      return saved === null ? fallback : saved === 'true';
    } catch {
      return fallback;
    }
  }

  private savePreference(key: string, value: boolean): void {
    try {
      sessionStorage.setItem(key, String(value));
    } catch {
      this.errorState.set('Your browser could not save the music preference for this session.');
    }
  }
}
