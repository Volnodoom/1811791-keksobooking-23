import NUMBER_OF_AVATARS from './library';

let start = 1;
const refreshEmptyArray = function (array,arrayLength) {
  while (start <= arrayLength) {
    array.push(start++);
  }
};

const arrayWithIncreasingNumbers = [];
refreshEmptyArray(arrayWithIncreasingNumbers,NUMBER_OF_AVATARS);

export {arrayWithIncreasingNumbers};
