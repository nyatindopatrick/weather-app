import {
  content,
  left,
  right,
  tcity,
  tempData,
  cityDateDiv,
  dateTag,
  weatherDiv,
  iconTag,
  weatherText,
  buttonsWrapper,
  kisumu,
  nairobi,
  mombasa,
  kampala,
  hr,
  weatherDetails,
  detailsHead,
  humidity,
  humidSpan,
  wind,
  windSpan,
  cloud,
  cloudSpan,
  deg,
} from './util';


[kisumu, nairobi, mombasa, kampala].forEach((item, i) => {
  const datas = ['Kisumu', 'Nairobi', 'Mombasa', 'Kampala'];
  item.dataset.city = datas[i];
  item.innerText = datas[i];
  buttonsWrapper.appendChild(item);
  right.appendChild(buttonsWrapper);
  right.appendChild(hr);
});

const wDetails = (clouds, winds, humids) => {
  humidSpan.innerText = `${humids}%`;
  cloudSpan.innerText = `${clouds}%`;
  windSpan.innerText = `${winds}km/h`;
};
humidity.appendChild(humidSpan);
wind.appendChild(windSpan);
cloud.appendChild(cloudSpan);
[detailsHead, cloud, humidity, wind].forEach((item) =>
  weatherDetails.appendChild(item)
);
right.appendChild(weatherDetails);

const leftDiv = (temperature, city, date, climate, icon) => {
  deg.innerText = temperature;
  tcity.innerText = city;
  dateTag.innerText = date;
  iconTag.src = `http://openweathermap.org/img/w/${icon}.png`;
  weatherText.innerText = climate;
  [tcity, dateTag].forEach((item) => cityDateDiv.appendChild(item));
  [iconTag, weatherText].forEach((item) => weatherDiv.appendChild(item));
  [deg, cityDateDiv, weatherDiv].forEach((item) => tempData.appendChild(item));
  left.appendChild(tempData);
  changeBackground(climate);
};

const changeBackground = (climate) => {
  const gradient = 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.35))';
  const images = [
    'https://images.unsplash.com/photo-1516038858785-1cf85ef58b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1595884589048-639ac0efef99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
  ];

  if (climate.toLowerCase() === 'rain' || climate.toLowerCase() === 'clouds') {
    content.style = `background-image: ${gradient},url(${images[0]})`;
  } else {
    content.style = `background-image: ${gradient},url(${images[1]})`;
  }
};

export { leftDiv, left, right, wDetails, content };
