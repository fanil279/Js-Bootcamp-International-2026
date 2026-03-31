import './styles/main.scss';
import { getMessage } from './message';
import demoImage from './assets/img.webp';

const app = document.getElementById('app');

const title = document.createElement('h1');
title.textContent = getMessage('Fanil');

const paragraph = document.createElement('p');
paragraph.textContent = 'JS, TS, SCSS, HTML, source maps, minification, and image assets are configured.';

const image = document.createElement('img');
image.src = demoImage;
image.alt = 'Demo image';

app.append(title, paragraph, image);
