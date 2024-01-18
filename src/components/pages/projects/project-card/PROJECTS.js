import camping from '../../../../media/camping.jpg';
import code from '../../../../media/code.jpg';
import lair from '../../../../media/lair.jpg';
import pokemon from '../../../../media/pokemon.jpg';
import bio365 from '../../../../media/bio365.png';

export const PROJECTS = [
    {
        id: 1,
        name: 'Bio365',
        stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT Auth', 'Redux', 'RTK API', 'Heroku', 'Recharts', 'React Scrollama'],
        description: 'A biodiversity learning platform with original educational material, stories, and interactive data visualization.',
        url: 'https://biodiversity365.com/',
        img: bio365
    },
    {
        id: 2,
        name: 'Pokébuild',
        stack: ['React', 'Redux', 'Bootstrap', 'Fetch'],
        description: 'A web app utilizing PokéAPI to build and save teams of Pokémon.',
        url: 'https://github.com/DMKCodes/pokebuild',
        img: pokemon
    },
    {
        id: 3,
        name: 'MERN Boiler',
        stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT Auth', 'Redux', 'RTK API'],
        description: 'A robust MERN boilerplate with RESTful API for rapid development of secure, full stack applications.',
        url: 'https://github.com/DMKCodes/mern-boilerplate',
        img: code
    },
    {
        id: 4,
        name: 'Campsite',
        stack: ['React', 'React Native', 'Redux', 'Bootstrap'],
        description: 'A demo web and mobile app to research, reserve, and review campsites.',
        url: 'https://github.com/DMKCodes/nucampsite-react',
        img: camping
    },
    {
        id: 5,
        name: 'The Lair',
        stack: ['Python', 'OOP', 'Procedural Gen', 'RPG'],
        description: 'A nostalgic, 1980s-style text RPG with roguelike elements and procedural generation.',
        url: 'https://github.com/DMKCodes/the-lair',
        img: lair
    },
];