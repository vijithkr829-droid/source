import { Component, inject } from '@angular/core';
import { MusicService } from '../../../core/services/music';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.html',
  styleUrl: './music-player.css',
})
export class MusicPlayer {
  protected readonly music = inject(MusicService);

  constructor() {
    this.music.startOnLoad();
  }
}
