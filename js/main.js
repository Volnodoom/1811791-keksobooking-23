// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

const getRandomPositiveInteger = function (valueA, valueB) {
  const lower = Math.ceil (Math.min (Math.abs (valueA), Math.abs (valueB)));
  const upper = Math.floor (Math.max (Math.abs (valueA), Math.abs (valueB)));
  const result = Math.random () * (upper - lower + 1) + lower;
  return Math.floor (result);
};

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

const getRandomPositiveFloat = function (valueA, valueB, digits = 1) {
  const lower = Math.min (Math.abs(valueA), Math.abs(valueB));
  const upper = Math.max (Math.abs(valueA), Math.abs(valueB));
  const result = Math.random () * (upper - lower) + lower;
  return result.toFixed (digits);
};

const getRandomItemNoRepeat = function (arrayData) {
  const randomIndex = getRandomPositiveInteger (0, arrayData.length - 1);
  const randomDataFromMassive = arrayData [randomIndex];
  arrayData.splice (randomIndex, 1);
  return randomDataFromMassive;
};

const getRandomItemRepeat =  (arrayData) =>  arrayData[getRandomPositiveInteger (0, arrayData.length - 1)];

const makeMassiveForAvatarka = function(numberA = 1, numberB = 8) {
  numberA = Math.abs(numberA);
  numberB = Math.abs(numberB);
  if ((numberB === 0) || (numberA === 0)) {
    return 'Please, place the Integer number greater than 0';}
  const massive = new Array (numberB-numberA + 1).fill('');
  for (let ind = 0; ind<massive.length; ind++) {
    massive[ind] = numberA + ind;
  }
  return massive;
};

const MoscowX = 55.7558;
const MoscowY = 37.6173;

const typeOfApartment = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const checkInTime = [
  '12:00',
  '13:00',
  '14:00',
];

const checkOutTime = checkInTime;

const FeaturesOfApartment =[
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const photosData = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const author = {
  avatar:`/img/avatars/user0${getRandomItemNoRepeat(makeMassiveForAvatarka())}.png`,
};
const offer = {
  title: 'Доступные предложения',
  address: [MoscowX, MoscowY],
  price: getRandomPositiveInteger(500,20000),
  type: getRandomItemRepeat(typeOfApartment),
  rooms: getRandomPositiveInteger(1,5),
  guests: getRandomPositiveInteger(1,10),
  checkin: getRandomItemRepeat(checkInTime),
  checkout: getRandomItemRepeat(checkOutTime),
  features: getRandomItemNoRepeat(FeaturesOfApartment),
  description: 'You are checking one of the greatest apartment on our market \n you could enjoy pleasure of your life here \n with appropriate budget and level of comfort',
  photos: getRandomItemRepeat(photosData),
};

const location = {
  lat: getRandomPositiveFloat(35.65000, 35.70000,5),
  lng: getRandomPositiveFloat (139.70000,139.80000,5),
};

const temptData = [
  author,
  offer,
  location,
];
