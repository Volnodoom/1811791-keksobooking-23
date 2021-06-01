//The function bellow for random integer number have been taken from the MDN website: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const pickUpRandomNumber = function (leftLimit,rightLimit) {
  leftLimit = Math.ceil (leftLimit);
  rightLimit = Math.floor (rightLimit);
  const randomNumber = Math.floor(Math.random() * (rightLimit - leftLimit + 1)) + leftLimit;
  if (leftLimit >= 0 && rightLimit >= 0 && rightLimit >= leftLimit) {
    return randomNumber;
  } else if (leftLimit >=0 && rightLimit >= 0 && rightLimit < leftLimit) {
    return ('First value (limit) should be greater then second value (limit).');
  }
  return 'The numbers should be greater or equal to zero! Please, reinter the interval';
};
pickUpRandomNumber (16,54);


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

