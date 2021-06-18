import getRandomPositiveInteger from './get-random-positive-integer';
const getRandomItemRepeat = function (arrayData) {
  const randomIndex = getRandomPositiveInteger (0, arrayData.length - 1);
  return arrayData[randomIndex];
};

export{getRandomItemRepeat};
