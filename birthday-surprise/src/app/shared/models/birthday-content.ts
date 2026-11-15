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

export interface PersonalMeaning {
  readonly title: string;
  readonly detail: string;
}

export const recipientName = 'Veda';

export const birthdayLetter = {
  salutation: `Happy Birthday, ${recipientName}.`,
  paragraphs: [
    'Happy birthday, Veda. I have been thinking about what to write, and the truth is that I miss you more than I usually know how to say. I miss talking with you about nothing in particular, hearing what you thought about the little things, and having you as part of my everyday life.',
    'Some days, I catch myself wishing we could go back—not to pretend nothing happened, but to have another chance to find our way toward each other. I miss your presence, your voice, and the familiar comfort of being able to share a moment with you. If I could have one birthday wish for myself, it would be the chance to have you close again.',
    'I know that is only my wish, and I respect that your feelings and choices are your own. You do not owe me a response or a promise. I wanted to be honest with you, especially today, rather than hide how much you still mean to me.',
    'I made this page because an ordinary birthday message felt too small for everything I wanted to say. The photos, music, and words are here as a little piece of care from me to you. Whatever this day looks like, I hope it brings you warmth, and I hope you know I am wishing you well with all my heart.',
  ],
};

export const heartfeltMessage = {
  paragraphs: [
    'I am grateful for what we shared: the conversations that ran late, the jokes that only made sense to us, and the ordinary days that became memories without either of us noticing.',
    'Those moments are part of my story now. I can value them for what they were and still hope life is kind to you, wherever it takes you.',
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

export const personalMeaning: readonly PersonalMeaning[] = [
  {
    title: 'You made the ordinary matter',
    detail: 'Knowing you made me notice how much connection lives in small things: an honest conversation, a shared laugh, or being understood without having to explain everything.',
  },
  {
    title: 'You helped me grow',
    detail: 'You have been part of how I learned to care more openly, listen more closely, and appreciate the people who make a difference in my life.',
  },
  {
    title: 'You are part of my story',
    detail: 'Life may change the shape of a relationship, but it cannot make the time we shared meaningless. I will always be glad our paths crossed.',
  },
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
