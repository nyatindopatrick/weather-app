// import dotenv from 'dotenv';
// dotenv.config();
import { init } from './data';

class Weather {
  constructor(location="Kisumu") {
    this.location = location;
  }

  getWeather() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=b8bb1a362f05a8f7c8e8175617da6b69`
    )
      .then((res) => res.json())
      .then((res) => init(res))
      .catch((err) => err.message);
  }
}

export default Weather;
