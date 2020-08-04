const content = document.getElementById('content');
import { leftDiv } from './view';
const init = (input) => {
  const { main, weather, name } = input;
  const temperature = toCelcius(main.temp) + '\xB0';
  leftDiv(temperature, name, dateUpdate(), weather[0].main, weather[0].icon);
};
const toCelcius = (deg) => Math.round(deg - 273.15);

const dateUpdate = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const d = new Date(new Date().toString());
  const dayName = days[d.getDay()];

  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(d);
  return `${dayName}, ${month} ${day} '${year.substring(2)}`;
};

export { init, dateUpdate };
