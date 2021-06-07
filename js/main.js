// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (valuA, valueB) {
  const lower = Math.ceil(Math.min(Math.abs(valuA), Math.abs(valueB)));
  const upper = Math.floor(Math.max(Math.abs(valuA), Math.abs(valueB)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger (2,57);

const getKeksobookingRandomNumber = function (leftLimit,rightLimit,numberOfSymbols) {
  leftLimit = (Math.round(leftLimit * Math.pow(10,numberOfSymbols)));
  rightLimit = (Math.round(rightLimit * Math.pow(10,numberOfSymbols)));
  const randomness = Math.random() * (rightLimit - leftLimit + 1);
  const randomNumber = (Math.floor (randomness) + leftLimit)/Math.pow(10,numberOfSymbols); // The function  for random non-integer number have been taken from the MDN website with some small adjustments: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const restriction = (leftLimit >= 0 && rightLimit >= 0 && (typeof leftLimit === typeof rightLimit) && (typeof leftLimit === 'number'));
  if ( restriction && rightLimit >= leftLimit ) {
    return randomNumber;
  } else if (restriction && rightLimit < leftLimit) {
    return ('First value (limit) should be greater then second value (limit).');
  }
  return (` You need to write numbers that should be greater or equal to zero! Please, reinter the interval. \n Remind you to put number of symbols you want to see after comma, current number is ${  numberOfSymbols}`);
};
getKeksobookingRandomNumber (1000.2654165,875.147923,2);

