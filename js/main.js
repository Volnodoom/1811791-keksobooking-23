const pickUpRandomNumber = function (leftLimit,rightLimit) {
//This function have been taken from the MDN webside: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
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

