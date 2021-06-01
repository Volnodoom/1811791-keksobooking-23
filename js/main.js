//The function bellow for random integer number have been taken from the MDN website: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const pickUpRandomNumber = function (leftLimit,rightLimit) {
  leftLimit = Math.ceil (leftLimit);
  rightLimit = Math.floor (rightLimit);
  const randomNumber = Math.floor (Math.random()*(rightLimit-leftLimit+1))+leftLimit;
  if (leftLimit >=0 && rightLimit>=0 && rightLimit>=leftLimit) {
    return randomNumber;
  } else if (leftLimit >=0 && rightLimit>=0 && rightLimit<leftLimit) {
    const numberSwitch = leftLimit;
    leftLimit = rightLimit;
    rightLimit = numberSwitch;
    return randomNumber;
  }
  return 'The numbers shoud be greater or equalt to ziro! Please, reinter the interval';
};
pickUpRandomNumber (16,54);


const giveKeksobookingRandomNumber = function (leftLimit,rightLimit, numberOfSymbols) {
  leftLimit = (Math.round(leftLimit * Math.pow(10,numberOfSymbols)));
  rightLimit = (Math.round(rightLimit * Math.pow(10,numberOfSymbols)));
  const randomness = Math.random()*(rightLimit-leftLimit+1);
  const randomNumber = (Math.floor (randomness)+leftLimit)/Math.pow(10,numberOfSymbols); // The function  for random non-integer number have been taken from the MDN website with some small adjustments: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  const restrictions = leftLimit >=0 && rightLimit>=0 && (typeof leftLimit === typeof rightLimit) && (typeof leftLimit=== 'number');
  if ( restrictions && rightLimit>=leftLimit ) {
    return randomNumber;
  } else if (restrictions && rightLimit<leftLimit) {
    return ('First value (limit) should be greater then second value (limit).');
  }
  return (` You need to write numbers that should be greater or equal to zero! Please, reinter the interval. \n Remind you to text how many symbols after comma you want to see, current number is ${  numberOfSymbols}`);
};
giveKeksobookingRandomNumber (1000.2654165,875.147923,2);
console.log(giveKeksobookingRandomNumber (-1000.2654165,875.147923,2));
