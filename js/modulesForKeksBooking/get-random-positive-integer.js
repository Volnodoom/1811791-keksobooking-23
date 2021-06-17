// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

const getRandomPositiveInteger = function (valueA, valueB) {
  const lower = Math.ceil (Math.min (Math.abs (valueA), Math.abs (valueB)));
  const upper = Math.floor (Math.max (Math.abs (valueA), Math.abs (valueB)));
  const result = Math.random () * (upper - lower + 1) + lower;
  return Math.floor (result);
};
export {getRandomPositiveInteger};
