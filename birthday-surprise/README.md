# A Little Birthday Surprise

A one-page Angular 21 birthday experience for Veda. The page brings together top section navigation, a photo collage, a flexible day-of timeline, ten interactive birthday notes, a tappable birthday bucket list, and one personal letter. Its background music player lives in the root shell.

## Run locally

```powershell
npm install
npm start
```

Open the local URL printed by Angular CLI. Create a production build with `npm run build`.

## Publish on GitHub Pages

This is a static Angular site and does not need a separate backend. The repository workflow builds it with the GitHub Pages base path and deploys it whenever files in this app change on `main`.

In the repository settings, open **Pages** and set the build and deployment source to **GitHub Actions**. After the workflow completes, the site will be available at `https://vijithkr829-droid.github.io/source/`. You can also start a deployment from the repository’s **Actions** tab with **Run workflow**.

## Personalize the gift

- Replace `Veda` and the birthday notes and letter in `src/app/shared/models/birthday-content.ts`.
- The six photographs in `src/assets/images/` are used in the opening and memory collage. Replace `memory-01.jpeg` through `memory-06.jpeg` with your own images, then update their paths, captions, and alt text in `src/app/shared/models/birthday-content.ts`. Images added here are publicly accessible on the published site.
- The site plays `src/assets/audio/birthday-music.mp3` on a loop and tries to start it when the page opens. Browsers may block audible autoplay; if that happens, visitors can tap Play. The floating controls let them stop or mute the song.

The asset folders are copied to `/assets/` by Angular's build configuration.
