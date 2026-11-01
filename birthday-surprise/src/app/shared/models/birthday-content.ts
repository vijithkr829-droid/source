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
    'Today is a little reminder of how much your being here matters. The world is brighter with your kindness in it, and the people lucky enough to know you carry more happy moments because of you.',
    'I hope this new year gives you reasons to laugh until your cheeks hurt, quiet moments when you need them, and the courage to follow the things that make your heart feel awake. And on the days that feel ordinary, I hope you still find something small that makes you glad to be right where you are.',
    'You do not have to have everything figured out to be doing wonderfully. Keep growing at your own pace, keep making room for what feels like you, and remember to be proud of how far you have already come.',
    'Most of all, I hope you feel celebrated today—not just for another year, but for the person you are in every little, everyday way. You deserve so much good, Veda. Happy birthday, and here is to all the lovely things still waiting for you.',
  ],
};

export const heartfeltMessage = {
  paragraphs: [
    'I don’t know if you ever miss me the way I miss you, but honestly, I still do. I miss our conversations, your presence, the little things we used to share, and even the smallest moments. I know things aren’t the same anymore, but a part of me still wishes I could go back and relive those moments with you. I miss you, more than I can explain. ❤️',
    'No matter where life takes us, I’ll always be grateful for the moments we shared.',
  ],
};

export const memories: readonly PhotoItem[] = [
  { src: 'assets/images/memory-01.jpeg', alt: 'Veda with a yellow flower tucked behind her ear', caption: 'A little sunshine' },
  { src: 'assets/images/memory-02.jpeg', alt: 'Veda smiling among bright bougainvillea flowers', caption: 'In a garden of blooms' },
  { src: 'assets/images/memory-03.jpeg', alt: 'Veda exploring a historic temple courtyard', caption: 'A day among old stones' },
  { src: 'assets/images/memory-04.jpeg', alt: 'Veda sitting beneath a temple arch and looking toward the courtyard', caption: 'A quiet temple moment' },
  { src: 'assets/images/memory-05.jpeg', alt: 'Veda beneath a tree in a historic temple courtyard', caption: 'Under the temple trees' },
  { src: 'assets/images/memory-06.jpeg', alt: 'Veda among flowering bougainvillea in warm sunlight', caption: 'Wrapped in bougainvillea' },
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

export const birthdayAppreciations: readonly BirthdayAppreciation[] = [
  { number: '01', title: 'Your thoughtful heart', detail: 'The care you show in the little things means more than you know.' },
  { number: '02', title: 'Your unmistakable laugh', detail: 'A little more joy seems to find its way into the room when you laugh.' },
  { number: '03', title: 'The way you see things', detail: 'You bring your own lovely point of view to every ordinary day.' },
  { number: '04', title: 'Simply being you', detail: 'No big reason needed. You are wonderful just as you are.' },
];

export const yearAheadWishes: readonly YearAheadWish[] = [
  { title: 'More moments that feel like you', detail: 'Room for the people, places, and small joys that make you feel at home.' },
  { title: 'Brave new beginnings', detail: 'Fresh chances to try, grow, and follow what makes you curious.' },
  { title: 'Everyday reasons to smile', detail: 'Unexpected good news, familiar songs, and laughter that lasts a little longer.' },
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
