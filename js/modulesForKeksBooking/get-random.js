import {NUMBER_WITHOUT_ZERO} from './library.js';
import {NUMBER_OF_AVATARS} from './library.js';

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

const getRandomPositiveFloat = function (valueA, valueB, digits = 1) {
  const lower = Math.min (Math.abs(valueA), Math.abs(valueB));
  const upper = Math.max (Math.abs(valueA), Math.abs(valueB));
  const result = Math.random () * (upper - lower) + lower;
  return result.toFixed (digits);
};

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

const getRandomPositiveInteger = function (valueA, valueB) {
  const lower = Math.ceil (Math.min (Math.abs (valueA), Math.abs (valueB)));
  const upper = Math.floor (Math.max (Math.abs (valueA), Math.abs (valueB)));
  const result = Math.random () * (upper - lower + 1) + lower;
  return Math.floor (result);
};

const getRandomItemRepeat = function (arrayData) {
  const randomIndex = getRandomPositiveInteger (0, arrayData.length - 1);
  return arrayData[randomIndex];
};

const getRandomItemNoRepeat = function (arrayData) {
  const randomIndex = getRandomPositiveInteger (0, arrayData.length - 1);
  const randomDataFromArray = arrayData [randomIndex];
  arrayData.splice (randomIndex, 1);
  return randomDataFromArray;
};

//picking up random photo from dataBase

let start = 1;
const refreshEmptyArray = function (array,arrayLength) {
  while (start <= arrayLength) {
    array.push(start++);
  }
};
const arrayWithIncreasingNumbers = [];
refreshEmptyArray(arrayWithIncreasingNumbers,NUMBER_OF_AVATARS);

const getRandomAvatar = function (){
  const randomNumber = getRandomItemNoRepeat (arrayWithIncreasingNumbers)
  if (randomNumber > NUMBER_WITHOUT_ZERO) {
    return `img/avatars/user${randomNumber}.png`;
  } return `img/avatars/user0${randomNumber}.png`;
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

export {getRandomLength, getRandomAvatar, getRandomItemRepeat, getRandomPositiveInteger};

