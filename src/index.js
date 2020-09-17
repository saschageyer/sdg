import Typed from '../node_modules/typed.js/lib/typed';
import '../node_modules/particles.js/particles'
import './index.scss';

if (process.env.NODE_ENV === 'development') {
  require('./index.html');
}

window.particlesJS.load('particles', 'public/particles-config.json');

const now = new Date();
const hour = now.getHours();
const day = now.getDay();

let greeting = 'Good morning! &#9749;';
let sendoff = 'Let\'s get in touch! &#128640;<br><a href="mailto:mail@saschageyer.com">mail@saschageyer.com</a>';

if (hour > 11 && hour < 19)
  greeting = 'Hi there! &#10024;';
else if (hour < 4 || hour >= 18)
  greeting = 'Good evening! &#127769;';

if (day === 5 || day === 6) {
  sendoff = sendoff.concat('^1000<br><br> ..oh, and have a nice weekend!');
}

const options = {
  strings: [
    greeting,
    'My name is Sascha.',
    'I\'m a Web Developer from Berlin.',
    'I study Business Informatics at the Humboldt University.',
    'I\'m passionate about Web Development and Data Science.',
    sendoff
  ],
  typeSpeed: 40
};
const typed = new Typed('.typed', options);