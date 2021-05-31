//The function bellow for random integer number have been taken from the MDN webside: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const pickUpRandomNumber = function (leftLimit,rightLimit) {
  leftLimit = Math.ceil (leftLimit);
  rightLimit = Math.floor (rightLimit);
  const RandomNumber = Math.floor (Math.random()*(rightLimit-leftLimit+1))+leftLimit;
  if (leftLimit >=0 && rightLimit>=0 && rightLimit>=leftLimit) {
    return RandomNumber;
  } else if (leftLimit >=0 && rightLimit>=0 && rightLimit<leftLimit) {
    const switchedNumber = leftLimit;
    leftLimit = rightLimit;
    rightLimit = switchedNumber;
    return RandomNumber;
  }
  return 'The numbers shoud be greater or equalt to ziro! Please, reinter the interval';
};
pickUpRandomNumber (16,54);


const givKeksobookingRandomNumber = function (leftLimit,rightLimit, numberOfSymbols) {
  leftLimit = (Math.round(leftLimit * Math.pow(10,numberOfSymbols))); //rounding according to the number of simbols after comma
  rightLimit = (Math.round(rightLimit * Math.pow(10,numberOfSymbols)));
  const RandomNumber = (Math.floor (Math.random()*(rightLimit-leftLimit+1))+leftLimit)/Math.pow(10,numberOfSymbols); // The function bellow for random non-integer number have been taken from the MDN webside with some small adjustments: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const restrictions = leftLimit >=0 && rightLimit>=0 && (typeof leftLimit === typeof rightLimit) && (typeof leftLimit=== 'number');
  if ( restrictions && rightLimit>=leftLimit ) {
    return RandomNumber;
  } else if (restrictions && rightLimit<leftLimit) {
    const numberSwitch = leftLimit;
    leftLimit = rightLimit;
    rightLimit = numberSwitch;
    return RandomNumber;
  }
  return 'You need to write numbers that shoud be greater or equalt to ziro! Please, reinter the interval';
};
givKeksobookingRandomNumber (10.2654165,875.147923,2);

