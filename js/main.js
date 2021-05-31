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
  return console.log ('The numbers shoud be greater or equalt to ziro! Please, reinter the interval');
};
console.log(pickUpRandomNumber(1000,100));


//The function bellow for random number have been taken from the MDN webside: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const givKeksobookingRandomNumber = function (leftLimit,rightLimit, numberOfSymbols) {
  leftLimit = (Math.round(leftLimit + '1e+' +numberOfSymbols)/('1e+' + numberOfSymbols)); //Current formula rounding number with certain number of symbols after comma and prevente issue whith wrong rounding of number "1.005" (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
  rightLimit = (Math.round(rightLimit + '1e+' +numberOfSymbols)/('1e+' + numberOfSymbols));
  const RandomNumber = Math.floor (Math.random()*(rightLimit-leftLimit+1))+leftLimit;
  const restrictions = leftLimit >=0 && rightLimit>=0 && (typeof leftLimit === typeof rightLimit) && (typeof leftLimit=== 'number');
  if ( restrictions && rightLimit>=leftLimit ) {
    return RandomNumber;
  } else if (restrictions && rightLimit<leftLimit) {
    const numberSwitch = leftLimit;
    leftLimit = rightLimit;
    rightLimit = numberSwitch;
    return RandomNumber;
  }
  return console.log ('You need to write numbers that shoud be greater or equalt to ziro! Please, reinter the interval');
};
console.log(givKeksobookingRandomNumber(4.5845864,100.24896172841,3));
