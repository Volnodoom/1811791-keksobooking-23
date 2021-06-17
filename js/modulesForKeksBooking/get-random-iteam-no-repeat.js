const getRandomItemNoRepeat = function (arrayData) {
  const randomIndex = getRandomPositiveInteger (0, arrayData.length - 1);
  const randomDataFromArray = arrayData [randomIndex];
  arrayData.splice (randomIndex, 1);
  return randomDataFromArray;
};
export {getRandomItemNoRepeat};
