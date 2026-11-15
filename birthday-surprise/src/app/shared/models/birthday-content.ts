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
    'I hope today frees you from being the one who remembers everything. Let somebody else choose the time, the place, and the small details for a change.',
    'When someone says something kind about you, try not to talk them out of it. Let the words stay for a moment.',
    'I hope this birthday feels like yours from the first moment to the last. Happy birthday, Veda.',
  ],
};

export const heartfeltMessage = {
  paragraphs: [
    'I miss you most in ordinary moments: when something happens and you are still the person I want to tell, or when an old joke comes back to me. I know life has changed, and I do not expect anything from you today. I only wanted to be honest that what we shared still matters to me.',
    'I do not want that feeling to take over your birthday. I am wishing you a happy day, with no expectation that you reply—this is simply something I wanted you to know.',
  ],
};

export const memories: readonly PhotoItem[] = [
  { src: 'assets/images/memory-01.jpeg', alt: 'Veda with a yellow flower tucked behind her ear', caption: 'A flower, tucked in just so' },
  { src: 'assets/images/memory-02.jpeg', alt: 'Veda smiling among bright bougainvillea flowers', caption: 'Bougainvillea in full bloom' },
  { src: 'assets/images/memory-03.jpeg', alt: 'Veda exploring a historic temple courtyard', caption: 'A walk through the old courtyard' },
  { src: 'assets/images/memory-04.jpeg', alt: 'Veda sitting beneath a temple arch and looking toward the courtyard', caption: 'A pause beneath the stone arch' },
  { src: 'assets/images/memory-05.jpeg', alt: 'Veda beneath a tree in a historic temple courtyard', caption: 'A little shade beneath the trees' },
  { src: 'assets/images/memory-06.jpeg', alt: 'Veda among flowering bougainvillea in warm sunlight', caption: 'The afternoon the flowers were everywhere' },
];

export const birthdayMoments: readonly BirthdayMoment[] = [
  { time: 'WHEN THE DAY BEGINS', icon: '☼', title: 'Open the curtains', detail: 'Let the morning in before the messages and plans begin.' },
  { time: 'AROUND LUNCHTIME', icon: '♡', title: 'Order the thing you cannot pronounce', detail: 'Let the person at the counter help. It is a fine way to start a story.' },
  { time: 'LATER IN THE DAY', icon: '✳', title: 'Set up a quick card game', detail: 'Play one round, then decide if the rematch has to happen.' },
  { time: 'WHEN EVENING COMES', icon: '✦', title: 'Choose a delightfully bad film', detail: 'The more questionable the reviews, the better the birthday tradition.' },
];

export const birthdayChallenges: readonly BirthdayChallenge[] = [
  { id: 'song', label: 'Take a 30-second dance break', note: 'no choreography needed' },
  { id: 'treat', label: 'Draw a tiny doodle with your eyes closed', note: 'keep the masterpiece' },
  { id: 'photo', label: 'Balance on one foot for ten seconds', note: 'bonus points for laughing' },
  { id: 'people', label: 'Give an ordinary object a birthday name', note: 'yes, even a spoon' },
  { id: 'wish', label: 'Make up a new holiday and name it', note: 'decide what it celebrates' },
];

export const birthdayAppreciations: readonly BirthdayAppreciation[] = [
  { number: '01', title: 'Your honesty', detail: 'With you, there is no guessing where you stand. I value that more than I say.' },
  { number: '02', title: 'Your follow-through', detail: 'You remember your promises long after the conversation ends.' },
  { number: '03', title: 'Your playful side', detail: 'You can turn an ordinary moment into a joke that lasts for years.' },
  { number: '04', title: 'Your independence', detail: 'You make your own choices and have the courage to make them yours.' },
];

export const yearAheadWishes: readonly YearAheadWish[] = [
  { title: 'A project with your name on it', detail: 'Something you take from the first sketch all the way to finished.' },
  { title: 'An evening worth dressing up for', detail: 'A concert, a play, or anywhere that gives you a reason to make a night of it.' },
  { title: 'A trip with no checklist', detail: 'A new place, a loose plan, and enough time to take the scenic route.' },
];

export const littleHighlights: readonly LittleHighlight[] = [
  { title: 'You notice who is on the edge of the conversation', detail: 'Then you make room for them without making a fuss about it.' },
  { title: 'You ask the question after the easy answer', detail: 'A quick catch-up with you has a way of becoming the conversation people needed.' },
  { title: 'You find an angle no one else saw', detail: 'A familiar story sounds different when you tell it.' },
];

export const birthdayNotes: readonly BirthdayNote[] = [
  { id: 'adventure', number: '01', title: 'For the nice thing you have been saving', message: 'Take out the special notebook, favorite mug, or good perfume. An ordinary day is a perfectly good reason to use it.' },
  { id: 'laughter', number: '02', title: 'For the story with the unexpected ending', message: 'Tell it from the beginning this time. The best part is usually the detail you thought was irrelevant.' },
  { id: 'quiet', number: '03', title: 'For something left unfinished', message: 'Leave one low-priority task for tomorrow. The world can wait while you finish your day.' },
  { id: 'confidence', number: '04', title: 'For ending the overthinking', message: 'Set a five-minute timer and choose. Not every small decision needs a full investigation.' },
  { id: 'pride', number: '05', title: 'For the hard choice', message: 'Remember a decision you made even though it was difficult. That took more strength than you may have noticed.' },
  { id: 'kindness', number: '06', title: 'For being on your own side', message: 'If a friend came to you with the same worry, what would you tell them? You deserve to hear that too.' },
  { id: 'beginnings', number: '07', title: 'For clearing a little space', message: 'Choose one small corner—a drawer, a desk, a windowsill—and make it feel like yours again.' },
  { id: 'friendship', number: '08', title: 'For the person who knows the old you', message: 'Send them a simple hello. You do not need a big reason to pick up a conversation.' },
  { id: 'wonder', number: '09', title: 'For a small, unexpected kindness', message: 'Leave a kind note for someone who will not know it was you. Let the good moment be its own reward.' },
  { id: 'possibility', number: '10', title: 'For next year’s you', message: 'Write one question you hope you will have answered by your next birthday. Keep it somewhere safe.' },
];
