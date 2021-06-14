const NUMBER_OF_AVATARS = 10;
const NUMBER_WITHOUT_ZERO = 9;
const TITLE = 'Available offers';
const DESCRIPTION = 'You are checking one of the greatest apartment on our market \n you could enjoy pleasure of your life here \n with appropriate budget and level of comfort';
const TYPE_OF_APARTMENT = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES_OF_APARTMENT =[
  'WiFi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS_DATA = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

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

let start = 1;
const refreshEmptyArray = function (array,arrayLength) {
  while (start <= arrayLength) {
    array.push(start++);
  }
};

const arrayWithIncreasingNumbers = [];
refreshEmptyArray(arrayWithIncreasingNumbers,NUMBER_OF_AVATARS);

const getRandomItemNoRepeat = function (arrayData) {
  const randomIndex = getRandomPositiveInteger (0, arrayData.length - 1);
  const randomDataFromArray = arrayData [randomIndex];
  arrayData.splice (randomIndex, 1);
  return randomDataFromArray;
};

const getRandomItemRepeat = function (arrayData) {
  const randomIndex = getRandomPositiveInteger (0, arrayData.length - 1);
  return arrayData[randomIndex];
};

const getRandomLength = function (array) {
  let randomNumber1 = getRandomPositiveInteger (0,(array.length - 1));
  let randomNumber2 = getRandomPositiveInteger (1,(array.length));
  while (randomNumber1 === randomNumber2) {
    randomNumber1 = getRandomPositiveInteger (0,(array.length - 1));
    randomNumber2 = getRandomPositiveInteger (1,(array.length));
  }
  const min = Math.min (randomNumber1,randomNumber2);
  const max = Math.max (randomNumber1, randomNumber2);
  return array.slice(min,max);
};

const getRandomNumberUnderCondition = function (randomNumber){
  if (randomNumber > NUMBER_WITHOUT_ZERO) {
    return `img/avatars/user${randomNumber}.png`;
  } return `img/avatars/user0${randomNumber}.png`;
};

const creatAvailableApartment = function () {
  const LAT = getRandomPositiveFloat (35.65000, 35.70000,5);
  const LNG = getRandomPositiveFloat (139.70000,139.80000,5);

  return {
    author : {
      avatar:getRandomNumberUnderCondition(getRandomItemNoRepeat(arrayWithIncreasingNumbers)),
    },

    offer : {
      title: TITLE,
      address: `${LAT} , ${LNG}`,
      price: getRandomPositiveInteger (500, 20000),
      type: getRandomItemRepeat (TYPE_OF_APARTMENT),
      rooms: getRandomPositiveInteger (1, 5),
      guests: getRandomPositiveInteger (1, 10),
      checkin: getRandomItemRepeat (TIMES),
      checkout: getRandomItemRepeat (TIMES),
      features: getRandomLength (FEATURES_OF_APARTMENT),
      description: DESCRIPTION,
      photos: getRandomLength (PHOTOS_DATA),
    },

    location : {
      lat: LAT,
      lng: LNG,
    },
  };
};
const temptArray = new Array (10).fill('').map(() => creatAvailableApartment());

temptArray;

