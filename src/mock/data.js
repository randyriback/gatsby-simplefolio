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
  paragraphFour: "",
  resume: 'https://docs.google.com/document/d/e/2PACX-1vQbCgjq1kjTrPPQfjq3oeJplp-8d3AZAi3xictJH6vQnWUB0pI6VStMSKQwq8DCSwQslGAPs1iZiYUR/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'this.gif',
    title: 'Reaction Remover',
    info: "A Chrome extension that removes all reactions on Facebook. Currently 'pending' on Chrome Web Store",
    info2: '',
    url: 'https://marvel-41f36.web.app/',
    repo: 'https://github.com/randyriback/react_marvel_api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mooder.png',
    title: 'MoodMix',
    info: "MoodMix is an app that helps users discover new music via 'weekly, curated DJ mixes' and the user's mood based on facial, emotion-based technology. The app highlights two APIs from Face++ and a Mixcloud API. Deployed with Heroku.",
    info2: '',
    url: 'https://moodmix.herokuapp.com/',
    repo: 'https://github.com/randyriback/moodmix', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'racer.png',
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

// export const musicData = [
  // {
  //   id: nanoid(),
  //   img: 'kapha.png',
  //   title: 'Kapha Selections',
  //   info: "My final project for the Coding Temple, MoodMix is an app that helps users discover new music via 'weekly, curated DJ mixes' and the users' mood based on facial, emotion-based technology. The app highlights two APIs from Face++ and Mixcloud's API. Deployed with Heroku.",
  //   info2: '',
  //   url: 'https://moodmix.herokuapp.com/',
  //   repo: 'https://github.com/randyriback/capstone', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'loci.jpeg',
  //   title: 'jung dj - loci flux',
  //   info: 'A minimal interface for the weather API from openweathermap.org, Weather Zone also utilizes the Giphy API with a beta key. Deployed with Firebase',
  //   info2: '',
  //   url: 'https://randyriback.github.io/weather-zone/',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'js.jpeg',
  //   title: 'Jung Deejay - Java Scripts',
  //   info: 'A React-built app that allows users interface with a restful API that was built in Flask. Front-end deployed with Firebase',
  //   info2: '',
  //   url: 'https://marvel-41f36.web.app/',
  //   repo: 'https://github.com/randyriback/react_marvel_api', // if no repo, the button will not show up
  // },
  // {
  //   id: nanoid(),
  //   img: 'beer.jpeg',
  //   title: 'Jung Deejay - 7 Sketches for Akai Sampler',
  //   info: 'A simple interface to display data from the Ergast Racer API, deployed on Firebase.',
  //   info2: '',
  //   url: 'https://racer-59019.web.app/',
  //   repo: 'https://github.com/randyriback/racer-api', // if no repo, the button will not show up
  // },
// ];


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
