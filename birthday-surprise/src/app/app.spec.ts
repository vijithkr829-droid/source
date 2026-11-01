import { birthdayAppreciations, birthdayChallenges, birthdayMoments, birthdayNotes, memories, yearAheadWishes } from './shared/models/birthday-content';
import { routes } from './app.routes';

describe('Birthday experience content', () => {
  it('offers exactly six replaceable photo slots', () => {
    expect(memories).toHaveLength(6);
    expect(memories.map((photo) => photo.src)).toEqual([
      'assets/images/memory-01.jpeg',
      'assets/images/memory-02.jpeg',
      'assets/images/memory-03.jpeg',
      'assets/images/memory-04.jpeg',
      'assets/images/memory-05.jpeg',
      'assets/images/memory-06.jpeg',
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

  it('includes personal appreciations and wishes for the year ahead', () => {
    expect(birthdayAppreciations).toHaveLength(4);
    expect(yearAheadWishes).toHaveLength(3);
    expect(birthdayAppreciations.every(({ title, detail }) => title.length > 0 && detail.length > 0)).toBe(true);
    expect(yearAheadWishes.every(({ title, detail }) => title.length > 0 && detail.length > 0)).toBe(true);
  });
});
