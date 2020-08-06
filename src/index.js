import Weather from './weather';
import './styles/main.scss';
import { left, right, content } from './view';

const checkWeather = (item = 'Kisumu') => new Weather(item);
checkWeather().getWeather();

[left, right].forEach((item) => content.appendChild(item));

const buttons = document.getElementById('right');

buttons.addEventListener('click', (e) => {
  let town = e.target.dataset.city;
  checkWeather(town).getWeather();
});
