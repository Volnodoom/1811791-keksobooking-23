import {getRandomPositiveInteger} from './get-random-positive-integerget';

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

export {getRandomLength};
