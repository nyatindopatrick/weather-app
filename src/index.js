import Weather from './weather';
import init from './data';
import './styles/main.scss';
import { left, right } from './view';

const content = document.getElementById('content');
[left, right].forEach((item) => content.appendChild(item));

const gradient = 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.35))';

content.style = `background-image: ${gradient},url(https://images.unsplash.com/photo-1516038858785-1cf85ef58b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)`;

const checkWeather = new Weather();
let g = checkWeather.getWeather();
