// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (valueA, valueB) {
  const lower = Math.ceil(Math.min(Math.abs(valueA), Math.abs(valueB)));
  const upper = Math.floor(Math.max(Math.abs(valueA), Math.abs(valueB)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger (2,57);

// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveFloat (valueA, valueB, digits = 1) {
  const lower = Math.min(Math.abs(valueA), Math.abs(valueB));
  const upper = Math.max(Math.abs(valueA), Math.abs(valueB));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}
getRandomPositiveFloat (0.4456443,874.78526234,5);
