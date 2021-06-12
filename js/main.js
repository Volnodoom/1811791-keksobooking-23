// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (valueA, valueB) {
  const lower = Math.ceil(Math.min(Math.abs(valueA), Math.abs(valueB)));
  const upper = Math.floor(Math.max(Math.abs(valueA), Math.abs(valueB)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveFloat (valueA, valueB, digits = 1) {
  const lower = Math.min(Math.abs(valueA), Math.abs(valueB));
  const upper = Math.max(Math.abs(valueA), Math.abs(valueB));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}
getRandomPositiveFloat (0.4456443,874.78526234,5);

/*
goal is create massive with 10 generated JS-OBJECTS

author, объект — описывает автора. Содержит одно поле:
avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 8 с ведущим нулём.
Например, 01, 02 и т. д. Адреса изображений не повторяются.

offer, объект — содержит информацию об объявлении. Состоит из полей:
title, строка — заголовок предложения. Придумайте самостоятельно.

address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по
маске {{location.x}}, {{location.y}}.

price, число — стоимость. Случайное целое положительное число.
type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
rooms, число — количество комнат. Случайное целое положительное число.
guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
description, строка — описание помещения. Придумайте самостоятельно.
photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.


location, объект — местоположение в виде географических координат. Состоит из двух полей:
lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
*/


const makeMassiveForAvatarka = function(numberA = 1, numberB = 8) {
  numberA = Math.abs(numberA);
  numberB = Math.abs(numberB);
  if ((numberB === 0) || (numberA === 0)) {
    return 'Please, place the Integer number greater than 0';}
  const uslessMassive = new Array (numberB-numberA + 1).fill('');
  for (let i = 0; i<uslessMassive.length; i++) {
    uslessMassive[i] = numberA + i;
  }
  return uslessMassive;
};
const getRandomItemNoRepeat = function (arrayData = makeMassiveForAvatarka()) {
  const randomIndexForAvatarka = getRandomPositiveInteger (0,arrayData.length-1);
  const randomNumberFromMassive = arrayData [randomIndexForAvatarka];
  arrayData.splice (randomIndexForAvatarka,1);
  return randomNumberFromMassive;
};

const MoscowX = 55.7558;
const MoscowY = 37.6173;

const typeOfAppartments = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const getRandomItemRepeat = function (arrayData) {
  const randomIndex = getRandomPositiveInteger (0, arrayData.length - 1);
  return arrayData[randomIndex];
};


console.log (getRandomItemNoRepeat(2,5));



/*
rooms, число — количество комнат. Случайное целое положительное число.
guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
*/



const author = {
  avatar:`/img/avatars/user0${getRandomItemNoRepeat()}.png`,
};
const offer = {
  title: 'Доступные предложения',
  address: MoscowX, MoscowY,
  price: getRandomPositiveInteger(500,20000),
  type: getRandomItemRepeat(typeOfAppartments),
  rooms: getRandomPositiveInteger(1,5),
};


const temptData = [
  author,
  offer,
];
