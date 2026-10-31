import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MusicPlayer } from './shared/components/music-player/music-player';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MusicPlayer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
}
