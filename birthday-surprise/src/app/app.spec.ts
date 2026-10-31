import { memories } from './shared/models/birthday-content';
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

  it('defines two pages and a fallback route', () => {
    expect(routes.map((route) => route.path)).toEqual(['', 'surprise', '**']);
  });
});
