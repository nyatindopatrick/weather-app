const tags = (tag) => document.createElement(tag);

const left = tags('div');
const right = tags('div');
const tcity = tags('div');
const tempData = tags('div');
const cityDateDiv = tags('div');
const dateTag = tags('small');
const weatherDiv = tags('div');
const iconTag = tags('img');
const weatherText = tags('small');
const kisumu = tags('button');
const nairobi = tags('button');
const mombasa = tags('button');
const kampala = tags('button');

tempData.className = 'tempdata';
left.className = 'left';
right.className = 'right';
cityDateDiv.className = 'citydate';
weatherDiv.className = 'citydate';

[kisumu, nairobi, mombasa, kampala].forEach((item, i) => {
  const datas = ['Kisumu', 'Nairobi', 'Mombasa', 'Kampala'];
  item.dataset.city = datas[i];
  item.innerText = datas[i];
  right.appendChild(item);
});

const deg = tags('h1');
deg.className = 'deg';

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
};

const rightDiv = () => {};

export { leftDiv, left, right };
