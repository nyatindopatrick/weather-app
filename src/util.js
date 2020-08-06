const tags = (tag) => document.createElement(tag);
const content = document.getElementById('content');
const left = tags('div');
const right = tags('div');
const tcity = tags('div');
const tempData = tags('div');
const cityDateDiv = tags('div');
const dateTag = tags('small');
const weatherDiv = tags('div');
const iconTag = tags('img');
const weatherText = tags('small');
const buttonsWrapper = tags('div');
const kisumu = tags('button');
const nairobi = tags('button');
const mombasa = tags('button');
const kampala = tags('button');
const hr = tags('hr');
const weatherDetails = tags('div');
const detailsHead = tags('h2');
const humidity = tags('p');
const humidSpan = tags('span');
const wind = tags('p');
const windSpan = tags('span');
const cloud = tags('p');
const cloudSpan = tags('span');
const deg = tags('h1');

tempData.className = 'tempdata';
left.className = 'left';
right.className = 'right';
cityDateDiv.className = 'citydate';
weatherDiv.className = 'citydate';
right.id = 'right';

weatherDetails.className = 'w-details';
detailsHead.innerText = 'Weather Details';
humidity.innerText = 'Humidity';
wind.innerText = 'Wind';
cloud.innerText = 'Cloud';

export {
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
};
