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

export const recipientName = 'Veda';

export const birthdayLetter = {
  salutation: `Happy Birthday, ${recipientName}.`,
  paragraphs: [
    'I hope this next trip around the sun brings you new places to explore, people who make you laugh until your cheeks hurt, and plenty of ordinary days that turn out to be your favorites. You deserve all of it.',
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

export const birthdayMoments: readonly BirthdayMoment[] = [
  { time: 'WHEN YOU WAKE', icon: '☼', title: 'Ease into the day', detail: 'A favorite drink, a good song, and absolutely no rushing.' },
  { time: 'WHEN YOU’RE HUNGRY', icon: '♡', title: 'Eat something delicious', detail: 'Birthday rules say the treat does not need to be shared.' },
  { time: 'WHEN THE LIGHT IS LOVELY', icon: '✳', title: 'Save a little memory', detail: 'Take a photo, make a voice note, or just be right there.' },
  { time: 'WHENEVER YOU LIKE', icon: '✦', title: 'Make your birthday wish', detail: 'Close your eyes for a second. The good stuff is still ahead.' },
];

export const birthdayChallenges: readonly BirthdayChallenge[] = [
  { id: 'song', label: 'Play your feel-good song', note: 'instant mood lift' },
  { id: 'treat', label: 'Have a treat you really love', note: 'birthday permission' },
  { id: 'photo', label: 'Take one just-for-you photo', note: 'future you says thanks' },
  { id: 'people', label: 'Tell your favorite person you love them', note: 'send the text' },
  { id: 'wish', label: 'Make one slightly ridiculous wish', note: 'dream big' },
];

export const birthdayNotes: readonly BirthdayNote[] = [
  { id: 'adventure', number: '01', title: 'For the dreamers', message: 'May you find a new place that makes you stop, look around, and think: I’m glad I came.' },
  { id: 'laughter', number: '02', title: 'For the laugh-out-loud days', message: 'Wishing you belly laughs, terrible inside jokes, and friends who always make room for one more story.' },
  { id: 'quiet', number: '03', title: 'For a softer moment', message: 'Here’s your reminder that a slow day, a deep breath, and doing absolutely nothing can be a pretty perfect gift.' },
];
