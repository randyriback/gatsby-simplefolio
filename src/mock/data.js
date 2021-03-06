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
  img: 'IMG_7819.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  paragraphFour: '',
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vQbCgjq1kjTrPPQfjq3oeJplp-8d3AZAi3xictJH6vQnWUB0pI6VStMSKQwq8DCSwQslGAPs1iZiYUR/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'seq.png',
    title: 'React MIDI Sequencer',
    info: 'A browser-based version of a traditional 16 step sequencer (with 4 independant tracks) built with React Hooks and the WebMidi.js API that allows users to send MIDI notes to any device connected to their local machine, including Ableton Live. Deployed with Firebase.',
    info2: 'https://www.youtube.com/watch?v=XniKvlTvUpo',
    url: 'https://react-midi-sequencer.web.app',
    repo: 'https://github.com/randyriback/sequencer-test', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'genpy.png',
    title: 'Generative Music Composition Libarary / Data Sonification',
    info: "A Python library of tools to streamline generative music composition through the manipulation of MIDI data. Used in an upcoming album and alongside data sonification explorations at the Recurse Center, where I'd formed and led the Data Sonification Group. A release of sonification pieces of mine was recently released on the Lisbon-based net label, ~surf.",
    info2: 'https://www.youtube.com/watch?v=bW3mPZ2extw',
    url: 'https://gist.github.com/randyriback/e7c21dfc0a305ffe9bfe6451a6a7a947',
    repo: 'https://github.com/randyriback/python-generative-music', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'drums.png',
    title: 'Server-Drumsolo',
    info: 'A node module that allows for you to hear your server in real-time (in the form a drum solo!) with piped data from your server logs via stdin.',
    info2: '',
    url: 'https://www.npmjs.com/package/server-drumsolo',
    repo: 'https://github.com/randyriback/server-drumsolo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'faders.png',
    title: '16 Faders',
    info: 'A handy web-based MIDI controller and bank of 16 faders that can be assigned to parameters in your DAW (ex. Ableton Live) via the WebMidi.JS API. Deployed with Firebase.',
    info2: '',
    url: 'https://faders16.web.app',
    repo: 'https://github.com/randyriback/16-midi-faders', // if no repo, the button will not show up
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
    img: 'rename.png',
    title: 'Zodiac Music Player',
    info: 'React/node.js-built app that allows users to randomly access music with the Spotify API and its Web Player SDK. Back-end deployed with Heroku, front-end deployed with firebase. Mobile-friendly.',
    info2: '',
    url: 'https://zodiacmusicplayer.web.app',
    repo: 'https://github.com/randyriback/zodiac-music-player-frontend', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'screenshot.png',
    title: 'Reaction Remover',
    info: "A Chrome extension that removes all reactions on Facebook. The idea came from noticing misinformation aided by users 'laughing' at articles about Covid-19 and other serious matters. Available on the Chrome Web Store.",
    info2: '',
    url: 'https://chrome.google.com/webstore/detail/reaction-remover/dfiapeofdbbemafjadbomikmdlgkihjn?fbclid=IwAR1em2dGGyerYNVaBWOVqeRGRIh8WcmtOH1RxDMnrW7Ck5LyTHlfpNPvayg',
    repo: 'https://github.com/randyriback/reaction_remover', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.png',
    title: 'Weather Zone',
    info: 'A minimal interface for the weather API from openweathermap.org, Weather Zone also calls the Giphy API with a beta key. Deployed with GitHub Pages.',
    info2: '',
    url: 'https://randyriback.github.io/weather-zone/',
    repo: 'https://github.com/randyriback/weather-zone', // if no repo, the button will not show up
  },
];

export const musicData = [
  {
    id: nanoid(),
    img: 'jdart.png',
    title: 'Jung DJ - Sonifications of Price',
    info: 'A release of two data sonification experiments where parameters are mapped to the price of Bitcoin and gold, respectivly. A natural outcome of time-spent with the Data Sonification Group at the Recurse Center.',
    info2: 'Digital release (~surf, 2022)',
    url: 'https://surf.bandcamp.com/album/sonifications-of-price',
    repo: 'https://github.com/randyriback/capstone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'loci.jpeg',
    title: 'jung dj - loci flux',
    info: 'A collection of work inspired by time in lockdown featuring granular synthesis, audio time-stretching, and generative rhythm algorithms. Each piece is named after a friend in the NYC DJ community in effort to provide an homage to club events and public gatherings during their absence.',
    info2: 'Cassette, edition of 75 (Lillerne Tapes, 2021)',
    url: 'https://lillernetapes.bandcamp.com/album/loci-flux',
    repo: 'https://github.com/randyriback/capstone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'coffee.png',
    title: 'Jung Deejay - Java Scripts',
    info: 'A nod to the rise of internet cafe culture in the 90s, Java Scripts is meant to convey ???world music??? through the lens of the dawn of the internet age. Features collected samples of dated synthesizers and computing of hyper-repetitive Euclidean polyrhythms and melodies with a hardware sequencer. The B-side features a re-work of each piece by a unique artist, respectively.',
    info2: 'Cassette, edition of 100 (Artetera, 2020)',
    url: 'https://artetetra.bandcamp.com/album/java-scripts-2',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '7.jpeg',
    title: 'Jung Deejay - 7 Sketches for Akai Sampler',
    info: 'Conceived as a love-letter to the universally adored (and extremely outdated) Akai s950 Sampler. All music composed on Ableton Live and its audio was run through the famed sampler for a ???degraded??? audio quality. Korg synthesizers like the M1, Wavestation, and MS-20 were used and the album was also released in an all 8-bit format, as well.',
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
