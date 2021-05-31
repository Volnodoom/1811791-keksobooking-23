//The function bellow for random integer number have been taken from the MDN webside: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const PICK_UP_RANDOM_NUMBER = function (leftLimit,rightLimit) {
  leftLimit = Math.ceil (leftLimit);
  rightLimit = Math.floor (rightLimit);
  const RANDOM_NUMBE = Math.floor (Math.random()*(rightLimit-leftLimit+1))+leftLimit;
  if (leftLimit >=0 && rightLimit>=0 && rightLimit>=leftLimit) {
    return RANDOM_NUMBE;
  } else if (leftLimit >=0 && rightLimit>=0 && rightLimit<leftLimit) {
    const NUMBER_SWITCH = leftLimit;
    leftLimit = rightLimit;
    rightLimit = NUMBER_SWITCH;
    return RANDOM_NUMBE;
  }
  return 'The numbers shoud be greater or equalt to ziro! Please, reinter the interval';
};
PICK_UP_RANDOM_NUMBER (16,54);


const GIVE_KEKSOBOOKING_RANDOM_NUMBER = function (leftLimit,rightLimit, numberOfSymbols) {
  leftLimit = (Math.round(leftLimit * Math.pow(10,numberOfSymbols))); //rounding according to the number of simbols after comma
  rightLimit = (Math.round(rightLimit * Math.pow(10,numberOfSymbols)));
  const RANDOMNESS = Math.random()*(rightLimit-leftLimit+1);
  const RANDOM_NUMBE = (Math.floor (RANDOMNESS)+leftLimit)/Math.pow(10,numberOfSymbols); // The function  for random non-integer number have been taken from the MDN webside with some small adjustments: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const RESTRICTIONS = leftLimit >=0 && rightLimit>=0 && (typeof leftLimit === typeof rightLimit) && (typeof leftLimit=== 'number');
  if ( RESTRICTIONS && rightLimit>=leftLimit ) {
    return RANDOM_NUMBE;
  } else if (RESTRICTIONS && rightLimit<leftLimit) {
    const NUMBER_SWITCH = leftLimit;
    leftLimit = rightLimit;
    rightLimit = NUMBER_SWITCH;
    return RANDOM_NUMBE;
  }
  return 'You need to write numbers that shoud be greater or equalt to ziro! Please, reinter the interval';
};
GIVE_KEKSOBOOKING_RANDOM_NUMBER (10.2654165,875.147923,2);

