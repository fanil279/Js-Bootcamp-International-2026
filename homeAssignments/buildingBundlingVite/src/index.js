import './styles/main.scss';
import { getMessage } from './message.ts';
import demoImage from './assets/hero.png';

const app = document.getElementById('app');

const title = document.createElement('h1');
title.textContent = getMessage('Fanil');

const paragraph = document.createElement('p');
paragraph.textContent = 'Vite processes JS, TS, SCSS, HTML, source maps, minification, and assets.';

const image = document.createElement('img');
image.src = demoImage;
image.alt = 'Demo image';

app.append(title, paragraph, image);
