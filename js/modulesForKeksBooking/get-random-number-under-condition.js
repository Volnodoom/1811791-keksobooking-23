import { NUMBER_WITHOUT_ZERO } from './library';

const getRandomNumberUnderCondition = function (randomNumber){
  if (randomNumber > NUMBER_WITHOUT_ZERO) {
    return `img/avatars/user${randomNumber}.png`;
  } return `img/avatars/user0${randomNumber}.png`;
};

export {getRandomNumberUnderCondition};
