const TYPE_OF_APARTMENT_KEKS = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const TIMES_KEKS = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES_OF_APARTMENT_KEKS =[
  'WiFi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS_DATA_KEKS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

const getRandomPositiveIntegerKeks = function (valueA, valueB) {
  const lower = Math.ceil (Math.min (Math.abs (valueA), Math.abs (valueB)));
  const upper = Math.floor (Math.max (Math.abs (valueA), Math.abs (valueB)));
  const result = Math.random () * (upper - lower + 1) + lower;
  return Math.floor (result);
};

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

const getRandomPositiveFloatKeks = function (valueA, valueB, digits = 1) {
  const lower = Math.min (Math.abs(valueA), Math.abs(valueB));
  const upper = Math.max (Math.abs(valueA), Math.abs(valueB));
  const result = Math.random () * (upper - lower) + lower;
  return result.toFixed (digits);
};

const getRandomItemNoRepeatKeks = function (arrayData) {
  const randomIndex = getRandomPositiveIntegerKeks (0, arrayData.length - 1);
  const randomDataFromMassive = arrayData [randomIndex];
  arrayData.splice (randomIndex, 1);
  return randomDataFromMassive;
};

const getRandomItemRepeatKeks = function (arrayData) {
  const randomIndex = getRandomPositiveIntegerKeks (0, arrayData.length - 1);
  return arrayData[randomIndex];
};

const makeArrayWithIncreasingNumbers = function(numberA = 1, numberB = 8) {
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

const authorKeks = {
  avatar:`/img/avatars/user0${getRandomItemNoRepeatKeks(makeArrayWithIncreasingNumbers())}.png`,
};

const locationKeks = {
  lat: getRandomPositiveFloatKeks(35.65000, 35.70000,5),
  lng: getRandomPositiveFloatKeks (139.70000,139.80000,5),
};

const offer = {
  title: 'Доступные предложения',
  address: `${locationKeks.lat} , ${locationKeks.lng}`,
  price: getRandomPositiveIntegerKeks(500, 20000),
  type: getRandomItemRepeatKeks(TYPE_OF_APARTMENT_KEKS),
  rooms: getRandomPositiveIntegerKeks(1, 5),
  guests: getRandomPositiveIntegerKeks(1, 10),
  checkin: getRandomItemRepeatKeks(TIMES_KEKS),
  checkout: getRandomItemRepeatKeks(TIMES_KEKS),
  features: getRandomItemNoRepeatKeks(FEATURES_OF_APARTMENT_KEKS),
  description: 'You are checking one of the greatest apartment on our market \n you could enjoy pleasure of your life here \n with appropriate budget and level of comfort',
  photos: getRandomItemRepeatKeks(PHOTOS_DATA_KEKS),
};

const temptDataVer1 = [
  authorKeks,
  offer,
];

const temptDataVer2 = [
  {avatar:`/img/avatars/user0${getRandomItemNoRepeatKeks(makeArrayWithIncreasingNumbers())}.png`},
  {address: `${locationKeks.lat} , ${locationKeks.lng}`},
  {price: getRandomPositiveIntegerKeks(500, 20000)},
  {type: getRandomItemRepeatKeks(TYPE_OF_APARTMENT_KEKS)},
  {rooms: getRandomPositiveIntegerKeks(1, 5)},
  {guests: getRandomPositiveIntegerKeks(1, 10)},
  {checkin: getRandomItemRepeatKeks(TIMES_KEKS)},
  {checkout: getRandomItemRepeatKeks(TIMES_KEKS)},
  {features: getRandomItemNoRepeatKeks(FEATURES_OF_APARTMENT_KEKS)},
  {photos: getRandomItemRepeatKeks(PHOTOS_DATA_KEKS)},
];

