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
    'I hope your birthday has the things you enjoy most: a favorite meal, easy conversation, and time to yourself if you want it.',
    'May the year ahead bring new experiences, good surprises, and reasons to feel proud of what you make of it.',
    'I remember this day with warmth and wish you well. Happy birthday, Veda.',
  ],
};

export const heartfeltMessage = {
  paragraphs: [
    'I still miss talking with you sometimes, especially the ordinary conversations that had no particular reason behind them. I know our relationship has ended, and I respect that. Missing what we had does not mean I expect it to return.',
    'I do not expect a reply. I just wanted to be honest about how I feel, while still leaving your birthday yours.',
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
  { number: '01', title: 'Your honesty', detail: 'You were willing to say what you really thought, even when it was not the easiest thing to say.' },
  { number: '02', title: 'Your determination', detail: 'When something mattered to you, you kept at it in your own way and on your own terms.' },
  { number: '03', title: 'Your sense of humor', detail: 'I still remember how a well-timed joke could take the weight out of an ordinary day.' },
  { number: '04', title: 'Your independence', detail: 'I admired that you made your choices for yourself and kept becoming more fully you.' },
];

export const yearAheadWishes: readonly YearAheadWish[] = [
  { title: 'Something new to get curious about', detail: 'A subject, class, or small project that is interesting just because it is interesting.' },
  { title: 'A night that feels like a treat', detail: 'A concert, a film, or a favorite meal enjoyed at your own pace.' },
  { title: 'A place you have not seen yet', detail: 'A day trip or a longer journey, with room to take the route that looks good.' },
];

export const littleHighlights: readonly LittleHighlight[] = [
  { title: 'The ordinary days', detail: 'Some of the memories I keep most warmly are not big occasions, just time spent together without needing a plan.' },
  { title: 'What I learned', detail: 'Knowing you gave me new ways to think about patience, communication, and seeing things from another point of view.' },
  { title: 'A chapter that mattered', detail: 'Our relationship changed, but it was still a real part of my life—and I can remember it with gratitude.' },
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
