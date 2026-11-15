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

export interface LittleHighlight {
  readonly title: string;
  readonly detail: string;
}

export const recipientName = 'Veda';

export const birthdayLetter = {
  salutation: `Happy Birthday, ${recipientName}.`,
  paragraphs: [
    'Some people make life feel less hurried just by being in it. I hope today gives back a little of the care and patience you bring to the people around you.',
    'May this birthday bring you one new story worth retelling: an unplanned meal, a photo you did not pose for, or a small detour that turns out just right.',
    'I hope you keep making room for the things that spark your curiosity—the questions, ideas, and little discoveries you cannot wait to share.',
    'When you look back on today, I hope there is one moment you want to keep exactly as it was. I am glad I get to celebrate you. Happy birthday, Veda.',
  ],
};

export const heartfeltMessage = {
  paragraphs: [
    'I don’t know if you ever miss me the way I miss you, but honestly, I still do. I miss our conversations, your presence, the little things we used to share, and even the smallest moments. I know things aren’t the same anymore, but a part of me still wishes I could go back and relive those moments with you. I miss you, more than I can explain. ❤️',
    'No matter where life takes us, I’ll always be grateful for the moments we shared.',
  ],
};

export const memories: readonly PhotoItem[] = [
  { src: 'assets/images/memory-01.jpeg', alt: 'Veda with a yellow flower tucked behind her ear', caption: 'A little sunshine, a little you' },
  { src: 'assets/images/memory-02.jpeg', alt: 'Veda smiling among bright bougainvillea flowers', caption: 'The smile that makes everything brighter' },
  { src: 'assets/images/memory-03.jpeg', alt: 'Veda exploring a historic temple courtyard', caption: 'A quiet memory, a beautiful chapter' },
  { src: 'assets/images/memory-04.jpeg', alt: 'Veda sitting beneath a temple arch and looking toward the courtyard', caption: 'One of those favorite little moments' },
  { src: 'assets/images/memory-05.jpeg', alt: 'Veda beneath a tree in a historic temple courtyard', caption: 'Soft light and your lovely glow' },
  { src: 'assets/images/memory-06.jpeg', alt: 'Veda among flowering bougainvillea in warm sunlight', caption: 'Wrapped in warmth, love, and laughter' },
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
  { number: '02', title: 'The way you show up', detail: 'You make time, remember what matters, and help people feel they are not facing things alone.' },
  { number: '03', title: 'The way you see things', detail: 'You bring your own lovely point of view to every ordinary day.' },
  { number: '04', title: 'Simply being you', detail: 'No big reason needed. You are wonderful just as you are.' },
];

export const yearAheadWishes: readonly YearAheadWish[] = [
  { title: 'More moments that feel like you', detail: 'Room for the people, places, and small joys that make you feel at home.' },
  { title: 'Brave new beginnings', detail: 'Fresh chances to try, grow, and follow what makes you curious.' },
  { title: 'Everyday reasons to smile', detail: 'Unexpected good news, familiar songs, and laughter that lasts a little longer.' },
];

export const littleHighlights: readonly LittleHighlight[] = [
  { title: 'You remember the little things', detail: 'A favorite, a passing comment, a question you promised to ask later—you have a way of making people feel seen.' },
  { title: 'You make space for others', detail: 'You listen without rushing to fill the silence, and people can feel the difference.' },
  { title: 'You bring your own point of view', detail: 'Your curiosity and honesty make even an ordinary conversation feel a little more interesting.' },
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
