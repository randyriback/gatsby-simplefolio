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
  img: 'IMG_7963.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mooder.png',
    title: 'MoodMix',
    info: "My final project for the Coding Temple, MoodMix is an app that helps users discover new music via 'weekly, curated DJ mixes' and the users' mood based on facial, emotion-based technology. The app highlights two APIs from Face++ and Mixcloud's API. Deployed with Heroku.",
    info2: '',
    url: 'https://moodmix.herokuapp.com/',
    repo: 'https://github.com/randyriback/capstone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather.png',
    title: 'Weather Zone',
    info: 'A minimal interface for the weather API from openweathermap.org, Weather Zone also utilizes the Giphy API with a beta key. Deployed with Firebase',
    info2: '',
    url: 'https://randyriback.github.io/weather-zone/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'super.png',
    title: 'The Superhero Database',
    info: 'A React-built app that allows users interface  with a restful API that was built in Flask. The front-end shown here was deployed with Firebase',
    info2: '',
    url: 'https://marvel-41f36.web.app/',
    repo: 'https://github.com/randyriback/react_marvel_api', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'racer.png',
    title: 'Ergast Formula 1 API',
    info: '',
    info2: '',
    url: 'https://racer-59019.web.app/',
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
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
