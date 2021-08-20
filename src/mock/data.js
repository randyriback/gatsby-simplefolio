import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Randy Riback | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  paragraphFour: "",
  resume: 'https://docs.google.com/document/d/e/2PACX-1vQbCgjq1kjTrPPQfjq3oeJplp-8d3AZAi3xictJH6vQnWUB0pI6VStMSKQwq8DCSwQslGAPs1iZiYUR/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'screenshot.png',
    title: 'Reaction Remover',
    info: "A Chrome extension that removes all reactions on Facebook. Currently 'pending' on Chrome Web Store.",
    info2: '',
    url: 'https://github.com/randyriback/reaction_remover/tree/main#readme',
    repo: 'https://github.com/randyriback/reaction_remover', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mooder.png',
    title: 'MoodMix',
    info: "MoodMix is a Flask app that helps users discover new music via 'weekly, curated DJ mixes' by the user's mood with facial recognition. The app highlights two APIs from Face++ and a Mixcloud API. Deployed with Heroku.",
    info2: '',
    url: 'https://moodmix.herokuapp.com/',
    repo: 'https://github.com/randyriback/moodmix', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'car.png',
    title: 'Ergast API Display',
    info: 'A simple UI to display table data from the Ergast Racer API, deployed on Firebase.',
    info2: '',
    url: 'https://simple-ergast-api-viewer.web.app/',
    repo: 'https://github.com/randyriback/racer-api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.png',
    title: 'Weather Zone',
    info: 'A minimal interface for the weather API from openweathermap.org, Weather Zone also utilizes the Giphy API with a beta key. Deployed with GitHub Pages.',
    info2: '',
    url: 'https://randyriback.github.io/weather-zone/',
    repo: 'https://github.com/randyriback/weather-zone', // if no repo, the button will not show up
  },
];

export const musicData = [
  {
    id: nanoid(),
    img: 'loci.jpeg',
    title: 'jung dj - loci flux',
    info: "A collection of work inspired by time in lockdown, with use of granular synthesis, audio time-stretching, and generative rhythm algorithms. Each piece is named after a friend in the NYC DJ community in effort to provide an homage to club events and public gatherings during their absence.",
    info2: 'Cassette, edition of 75 (Lillerne Tapes, 2021)',
    url: 'https://lillernetapes.bandcamp.com/album/loci-flux',
    repo: 'https://github.com/randyriback/capstone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'js.png',
    title: 'Jung Deejay - Java Scripts',
    info: 'A nod to the rise of internet cafe culture in the 90s, Java Scripts is meant to convey “world music” through the lens of the dawn of the internet age. Features collected samples of dated synthesizers and computing of hyper-repetitive Euclidean polyrhythms and melodies with a hardware sequencer. The B-side features a re-work of each piece by a unique artist, respectively.',
    info2: 'Cassette, edition of 100 (Artetera, 2020)',
    url: 'https://artetetra.bandcamp.com/album/java-scripts-2',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '7.jpeg',
    title: 'Jung Deejay - 7 Sketches for Akai Sampler',
    info: 'Conceived as a love-letter to the universally adored (and extremely outdated) Akai s950 Sampler. All music composed on Ableton Live and its audio was run through the famed sampler for a ‘degraded’ audio quality. Korg synthesizers like the M1, Wavestation, and MS-20 were used and the album was also released in an all 8-bit format, as well.',
    info2: 'CD, edition of 100 (Beer on the Rug, 2020)',
    url: 'https://beerontherug.bandcamp.com/album/7-sketches-for-akai-sampler',
    repo: 'https://github.com/randyriback/react_marvel_api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'a.jpeg',
    title: 'Jung Deejay - Wave Idea',
    info: '"Made with Muzak and Guitar Center on the brain", Wave Idea explores themes of Balearic club music tinged with an ironic look at how the commodification of music and musical instruments can sneakily infiltrate the creative process. The music utilizes hardware sequencers, analog synthesis, digital synthesis, and Euclidean rhythm programming.',
    info2: 'Cassette, edition of 50 (Lillerne Tapes, 2019)',
    url: 'https://lillernetapes.bandcamp.com/album/wave-idea',
    repo: 'https://github.com/randyriback/racer-api', // if no repo, the button will not show up
  },
];


// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [

    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
