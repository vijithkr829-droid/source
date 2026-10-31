import { birthdayChallenges, birthdayMoments, birthdayNotes, memories } from './shared/models/birthday-content';
import { routes } from './app.routes';

describe('Birthday experience content', () => {
  it('offers exactly six replaceable photo slots', () => {
    expect(memories).toHaveLength(6);
    expect(memories.map((photo) => photo.src)).toEqual([
      '/assets/images/photo-1.svg',
      '/assets/images/photo-2.svg',
      '/assets/images/photo-3.svg',
      '/assets/images/photo-4.svg',
      '/assets/images/photo-5.svg',
      '/assets/images/photo-6.svg',
    ]);
  });

  it('defines one birthday page and a fallback route', () => {
    expect(routes.map((route) => route.path)).toEqual(['', '**']);
  });

  it('provides varied moments and a uniquely identified birthday list', () => {
    expect(birthdayMoments).toHaveLength(4);
    expect(birthdayChallenges).toHaveLength(5);
    expect(new Set(birthdayChallenges.map((challenge) => challenge.id)).size).toBe(birthdayChallenges.length);
  });

  it('offers ten distinct birthday notes', () => {
    expect(birthdayNotes).toHaveLength(10);
    expect(new Set(birthdayNotes.map((note) => note.id)).size).toBe(birthdayNotes.length);
  });
});
