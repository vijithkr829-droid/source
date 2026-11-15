export interface PhotoItem {
  readonly src: string;
  readonly alt: string;
  readonly caption: string;
}

export interface BirthdayNote {
  readonly id: string;
  readonly title: string;
  readonly message: string;
  readonly number: string;
}

export interface BirthdayMoment {
  readonly time: string;
  readonly icon: string;
  readonly title: string;
  readonly detail: string;
}

export interface BirthdayChallenge {
  readonly id: string;
  readonly label: string;
  readonly note: string;
}

export interface BirthdayAppreciation {
  readonly number: string;
  readonly title: string;
  readonly detail: string;
}

export interface YearAheadWish {
  readonly title: string;
  readonly detail: string;
}

export const recipientName = 'Veda';

export const birthdayLetter = {
  salutation: `Happy Birthday, ${recipientName}.`,
  paragraphs: [
    'I wanted your birthday to have something you could keep, not just another message that disappears into a chat. So I gathered the photos, music, and words on this page with you in mind.',
    'There is no sequence to follow and nothing you need to do here. I just hope opening it gives you a quiet moment to feel celebrated.',
    'Have a lovely birthday, Veda. I am glad today gives me a reason to say that properly.',
  ],
};

export const heartfeltMessage = {
  paragraphs: [
    'I still miss you, especially in the small in-between moments: when I hear a song you would have had an opinion about, or see something I would once have sent you.',
    'I know we have our own lives now. I wanted to be honest about what I feel without asking you to do anything with it.',
  ],
};

export const memories: readonly PhotoItem[] = [
  { src: 'assets/images/memory-01.jpeg', alt: 'Veda with a yellow flower tucked behind her ear', caption: 'A yellow bloom in the afternoon light' },
  { src: 'assets/images/memory-02.jpeg', alt: 'Veda smiling among bright bougainvillea flowers', caption: 'Bougainvillea in full color' },
  { src: 'assets/images/memory-03.jpeg', alt: 'Veda exploring a historic temple courtyard', caption: 'A courtyard made for wandering' },
  { src: 'assets/images/memory-04.jpeg', alt: 'Veda sitting beneath a temple arch and looking toward the courtyard', caption: 'Framed by an old stone arch' },
  { src: 'assets/images/memory-05.jpeg', alt: 'Veda beneath a tree in a historic temple courtyard', caption: 'A shady spot beneath the trees' },
  { src: 'assets/images/memory-06.jpeg', alt: 'Veda among flowering bougainvillea in warm sunlight', caption: 'A bright afternoon among the flowers' },
];

export const birthdayMoments: readonly BirthdayMoment[] = [
  { time: 'WHEN YOU WAKE', icon: '☼', title: 'Start without a checklist', detail: 'You do not have to make your birthday a productive day.' },
  { time: 'WHEN SOMEONE OFFERS', icon: '♡', title: 'Let someone else make a plan', detail: 'Accept the invitation without organizing every detail yourself.' },
  { time: 'WHEN THE DAY GETS BUSY', icon: '✳', title: 'Take a breather between plans', detail: 'A few quiet minutes can help you enjoy whatever comes next.' },
  { time: 'WHEN EVENING COMES', icon: '✦', title: 'Leave while it is still fun', detail: 'You can call it a perfect day without being the last one awake.' },
];

export const birthdayChallenges: readonly BirthdayChallenge[] = [
  { id: 'flavor', label: 'Try a flavor you have never ordered', note: 'a small experiment' },
  { id: 'dance', label: 'Learn a silly dance move', note: 'no audience required' },
  { id: 'photo', label: 'Take a deliberately dramatic birthday photo', note: 'commit to the pose' },
  { id: 'sketch', label: 'Draw a tiny birthday doodle', note: 'art is optional' },
  { id: 'playlist', label: 'Add one song to a birthday playlist', note: 'start a new tradition' },
];

export const birthdayAppreciations: readonly BirthdayAppreciation[] = [
  { number: '01', title: 'You notice the details', detail: 'You remember what matters to people and make them feel heard.' },
  { number: '02', title: 'You think for yourself', detail: 'Your point of view is unmistakably yours, even in the smallest choices.' },
  { number: '03', title: 'You keep showing up', detail: 'There is a quiet strength in the way you meet difficult days.' },
  { number: '04', title: 'You bring your own humor', detail: 'You can make an ordinary conversation feel like one people want to keep having.' },
];

export const yearAheadWishes: readonly YearAheadWish[] = [
  { title: 'A goal that is truly yours', detail: 'May you find something worth working toward for no reason other than it matters to you.' },
  { title: 'Care that goes both ways', detail: 'May your closest relationships make room for your needs as naturally as you make room for theirs.' },
  { title: 'Permission to change course', detail: 'May you feel free to choose a different road when the old one no longer fits.' },
];

export const birthdayNotes: readonly BirthdayNote[] = [
  { id: 'adventure', number: '01', title: 'For a change of scene', message: 'May you find yourself somewhere new today, even if it is only a café one street over.' },
  { id: 'laughter', number: '02', title: 'For a ridiculous laugh', message: 'May someone tell you a story so absurd that you have to hear it twice.' },
  { id: 'quiet', number: '03', title: 'For the cake debate', message: 'May the best slice be the one with the most frosting, and may nobody question your choice.' },
  { id: 'confidence', number: '04', title: 'For the perfect song', message: 'May your favorite song come on just when you need it, loud enough to sing along.' },
  { id: 'pride', number: '05', title: 'For a lovely surprise', message: 'May a message, a knock at the door, or an unexpected treat brighten an ordinary minute.' },
  { id: 'kindness', number: '06', title: 'For your birthday table', message: 'May you share a meal with people who make time disappear in the nicest way.' },
  { id: 'beginnings', number: '07', title: 'For a little sparkle', message: 'May the light hit just right when you look in the mirror today.' },
  { id: 'friendship', number: '08', title: 'For the old stories', message: 'May someone bring up a memory that still makes you smile before they reach the punchline.' },
  { id: 'wonder', number: '09', title: 'For golden hour', message: 'May you catch one of those skies that makes everyone pause and look up.' },
  { id: 'possibility', number: '10', title: 'For the final minutes', message: 'May the day end with your favorite kind of tired: full, content, and already smiling at one moment from it.' },
];
