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
    'A birthday can feel like a line between chapters, but you do not have to have the next one mapped out. You can take your time, change your mind, and let the year unfold one choice at a time.',
    'I hope you find a detail here that makes you smile and reminds you how much care went into making this day yours.',
    'However you spend today, I hope it feels like a good fit for you. I am glad I get to celebrate you, Veda.',
  ],
};

export const heartfeltMessage = {
  paragraphs: [
    'I still miss you. Every now and then, something happens and my first instinct is to tell you; that is when I notice the distance most.',
    'I am not writing this to ask anything of you. I am simply grateful our paths crossed, and I hope today brings you a few moments of real joy.',
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
  { id: 'voice-note', label: 'Record a message for next-year you', note: 'open it someday' },
  { id: 'sketch', label: 'Draw a tiny birthday doodle', note: 'art is optional' },
  { id: 'wish', label: 'Write down one bold wish', note: 'keep it somewhere safe' },
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
  { id: 'adventure', number: '01', title: 'For the curious', message: 'May a detour take you somewhere you would never have found by following the usual route.' },
  { id: 'laughter', number: '02', title: 'For the ridiculous days', message: 'May you laugh at something so silly that explaining the joke only makes it funnier.' },
  { id: 'quiet', number: '03', title: 'For a proper pause', message: 'Here is permission to leave an evening completely unbooked and enjoy every minute of it.' },
  { id: 'confidence', number: '04', title: 'For the clear yes', message: 'Trust the answer that feels right to you before checking whether it is the popular one.' },
  { id: 'pride', number: '05', title: 'For the finish line', message: 'When you complete something demanding, take a moment to enjoy being done before choosing what comes next.' },
  { id: 'kindness', number: '06', title: 'For your own voice', message: 'Talk to yourself with the same generosity you would offer someone you love.' },
  { id: 'beginnings', number: '07', title: 'For the first attempt', message: 'You are allowed to be new at something. Nobody starts out knowing how it will turn out.' },
  { id: 'friendship', number: '08', title: 'For your people', message: 'May the people you love know exactly how much better your life is with them in it.' },
  { id: 'wonder', number: '09', title: 'For looking closer', message: 'Let yourself get interested in something for no reason beyond the fact that it caught your attention.' },
  { id: 'possibility', number: '10', title: 'For the unexpected', message: 'If a plan falls through, may the open space make room for something you would not have thought to ask for.' },
];
