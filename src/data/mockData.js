import { ASSETS } from './assets';

export const tournaments = [
  {
    id: 1,
    title: 'Crown Conquest',
    image: ASSETS.tournamentBg,
    logo: ASSETS.tournamentLogo,
    prizePool: 1000,
    slots: { filled: 670, total: 800 },
    status: 'Registration Open',
    tags: ['BGMI', 'Solo', { label: 'Entry-Free', coin: true }],
  },
  {
    id: 2,
    title: 'Crown Conquest',
    image: ASSETS.tournamentBg,
    logo: ASSETS.tournamentLogo,
    prizePool: 1000,
    slots: { filled: 670, total: 800 },
    status: 'Registration Open',
    tags: ['BGMI', 'Solo', { label: 'Entry-10', coin: true }],
  },
  {
    id: 3,
    title: 'Warrior Cup',
    image: ASSETS.tournamentBg,
    logo: ASSETS.tournamentLogo,
    prizePool: 2000,
    slots: { filled: 450, total: 1000 },
    status: 'Registration Open',
    tags: ['Free Fire', 'Squad', { label: 'Entry-Free', coin: true }],
  },
];

export const games = [
  { id: 1, name: 'BGMI',       image: ASSETS.bgmiImg },
  { id: 2, name: 'FREE FIRE',  image: ASSETS.freeFireImg },
  { id: 3, name: 'COD MOBILE', image: ASSETS.codMobileImg },
  { id: 4, name: 'BGMI',       image: ASSETS.bgmiImg },
  { id: 5, name: 'FREE FIRE',  image: ASSETS.freeFireImg },
  { id: 6, name: 'COD MOBILE', image: ASSETS.codMobileImg },
];

export const scrims = [
  {
    id: 1,
    title: 'GS Daily Scrims',
    organizer: 'By GS Esports',
    description: 'Play GS daily scrims and sharpen your skills for the bigger events',
    logo: ASSETS.gsEsportsLogo,
    deskLogo: ASSETS.deskGsLogo,
  },
  {
    id: 2,
    title: 'TMR Daily Scrims',
    organizer: 'By TMR Esports',
    description: 'Play TMR daily scrims and sharpen your skills for the bigger events',
    logo: ASSETS.tmrEsportsLogo,
    deskLogo: ASSETS.deskTmrLogo,
  },
];

export const highlights = [
  { id: 1, title: 'Call of Duty',     image: ASSETS.codHighlight },
  { id: 2, title: 'BGMI Tournaments', image: ASSETS.bgmiHighlight },
  { id: 3, title: 'Call of Duty',     image: ASSETS.codHighlight },
  { id: 4, title: 'BGMI Tournaments', image: ASSETS.bgmiHighlight },
];
