import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicPlayer } from './shared/components/music-player/music-player';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MusicPlayer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
}
