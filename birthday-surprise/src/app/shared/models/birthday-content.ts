export interface PhotoItem {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
}

export interface Quality {
  readonly title: string;
  readonly detail: string;
  readonly number: string;
}

export interface LittleReason {
  readonly message: string;
  readonly number: string;
}

export const recipientName = 'Veda';

export const birthdayLetter = {
  salutation: `Happy Birthday, ${recipientName}.`,
  paragraphs: [
    'I hope this new chapter brings you the kind of happiness that stays, the kind of peace that makes everything feel lighter, and the kind of memories that make you smile long after the moment has passed.',
    'I hope you keep discovering beautiful things, chasing the dreams that matter to you, and becoming the person you have always wanted to be. You deserve a life filled with genuine laughter, people who understand you, little surprises that brighten your days, and countless reasons to feel proud of yourself.',
    'No matter how ordinary today might seem, I hope you remember that your existence is something worth celebrating. Today, tomorrow, and in all the days ahead, I wish you nothing but beautiful things.',
  ],
};

export const memories: readonly PhotoItem[] = [
  { src: '/assets/images/photo-1.svg', alt: 'Replace with a description of photo one', caption: 'Add photo one' },
  { src: '/assets/images/photo-2.svg', alt: 'Replace with a description of photo two', caption: 'Add photo two' },
  { src: '/assets/images/photo-3.svg', alt: 'Replace with a description of photo three', caption: 'Add photo three' },
  { src: '/assets/images/photo-4.svg', alt: 'Replace with a description of photo four', caption: 'Add photo four' },
  { src: '/assets/images/photo-5.svg', alt: 'Replace with a description of photo five', caption: 'Add photo five' },
  { src: '/assets/images/photo-6.svg', alt: 'Replace with a description of photo six', caption: 'Add photo six' },
];

export const qualities: readonly Quality[] = [
  { number: '01', title: 'Your kindness', detail: 'The thoughtful little things you do never go unnoticed.' },
  { number: '02', title: 'Your individuality', detail: 'There is no one else quite like you, and that is a lovely thing.' },
  { number: '03', title: 'Your determination', detail: 'You keep showing up for the things that matter to you.' },
  { number: '04', title: 'Your sense of humor', detail: 'You have a way of making an ordinary day feel lighter.' },
  { number: '05', title: 'Your beautiful smile', detail: 'It has a way of making the people around you smile, too.' },
  { number: '06', title: 'All the little things', detail: 'The details that make you unmistakably, wonderfully you.' },
];

export const littleReasons: readonly LittleReason[] = [
  { number: '01', message: 'You deserve to feel appreciated.' },
  { number: '02', message: 'Your dreams deserve a chance.' },
  { number: '03', message: 'Your happiness matters.' },
  { number: '04', message: 'You are allowed to grow at your own pace.' },
  { number: '05', message: 'There is beauty in being yourself.' },
  { number: '06', message: 'Your next chapter can be wonderful.' },
];

export const heartfeltLetter = {
  salutation: `${recipientName},`,
  paragraphs: [
    'I hope you never feel like you have to become someone else to be appreciated. I hope you give yourself permission to grow at your own pace, change your mind, make mistakes, and begin again whenever life asks you to.',
    'You do not have to have everything figured out to be doing well. You do not have to be happy every second to deserve beautiful things. And you do not have to prove your worth to anyone.',
    'There is so much life waiting for you, so many places you have yet to see, so many memories you have yet to make, and so many versions of yourself you have yet to discover. I hope this year brings you closer to the things that make your heart feel alive. Most of all, I hope you are kind to yourself along the way.',
  ],
};

export const birthdayWish =
  'May the year ahead bring you laughter that comes easily, confidence in the person you are becoming, and friends who make even the quiet days feel brighter. I hope you find new places that take your breath away, try things that make you feel brave, and collect memories you will be telling stories about for years. Most of all, may you notice the happiness in the small, everyday moments—and know how much you deserve it.';

export const finalMessage =
  'I hope you smile a little more today, worry a little less about tomorrow, and remember that there are so many beautiful things still waiting for you. Whatever this new year of life brings, I hope you find the courage to follow your dreams, the strength to overcome difficult days, and the happiness of knowing that you are becoming your own kind of wonderful.';
