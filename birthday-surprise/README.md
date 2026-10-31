# A Little Birthday Surprise

A one-page Angular 21 birthday experience for Veda. The page brings together top section navigation, a photo collage, a flexible day-of timeline, ten interactive birthday notes, a tappable birthday bucket list, and one personal letter. Its background music player lives in the root shell.

## Run locally

```powershell
npm install
npm start
```

Open the local URL printed by Angular CLI. Create a production build with `npm run build`.

## Personalize the gift

- Replace `Veda` and the birthday notes and letter in `src/app/shared/models/birthday-content.ts`.
- The six SVGs in `src/assets/images/` are abstract placeholders, not photographs or depictions of real events. Replace them with your own `photo-1.jpg` through `photo-6.jpg` and update their paths, captions, and alt text in `src/app/shared/models/birthday-content.ts`. The opening and collage use these images.
- The site includes an original, gentle instrumental loop at `src/assets/audio/birthday-music.wav`. Replace it with an appropriately licensed track in WAV format, or update the source path in `src/app/core/services/music.ts` to use your own supported audio format. Music starts only after the visitor presses play, never automatically. The floating controls retain play/mute preferences for the current browser session.

The asset folders are copied to `/assets/` by Angular's build configuration.
