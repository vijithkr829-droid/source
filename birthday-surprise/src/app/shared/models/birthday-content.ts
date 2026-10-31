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
    'Today is a little reminder of how much your being here matters. The world is brighter with your kindness in it, and the people lucky enough to know you carry more happy moments because of you.',
    'I hope this new year gives you reasons to laugh until your cheeks hurt, quiet moments when you need them, and the courage to follow the things that make your heart feel awake. And on the days that feel ordinary, I hope you still find something small that makes you glad to be right where you are.',
    'You do not have to have everything figured out to be doing wonderfully. Keep growing at your own pace, keep making room for what feels like you, and remember to be proud of how far you have already come.',
    'Most of all, I hope you feel celebrated today—not just for another year, but for the person you are in every little, everyday way. You deserve so much good, Veda. Happy birthday, and here is to all the lovely things still waiting for you.',
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
  { id: 'confidence', number: '04', title: 'For a little courage', message: 'You do not need to have it all figured out. Take the next small step, and let that be enough for today.' },
  { id: 'pride', number: '05', title: 'For the wins you almost missed', message: 'Think of one thing you did this year that made you proud. It counts, even if nobody else saw it.' },
  { id: 'kindness', number: '06', title: 'For a kinder year', message: 'May you give yourself the same patience, encouragement, and second chances you so freely give to others.' },
  { id: 'beginnings', number: '07', title: 'For a fresh start', message: 'You can begin again whenever you need to. A new page does not ask you to explain the old one.' },
  { id: 'friendship', number: '08', title: 'For your favorite people', message: 'May your year be full of the people who make you feel at home, even when you are somewhere new.' },
  { id: 'wonder', number: '09', title: 'For everyday magic', message: 'Keep an eye out for tiny lovely things: warm light, a familiar song, and a message that arrives right on time.' },
  { id: 'possibility', number: '10', title: 'For all that is still ahead', message: 'There are good surprises you cannot see yet. Leave a little room in your plans for them.' },
];
