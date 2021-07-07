import {TITLE, TYPE_OF_APARTMENT, TIMES, FEATURES_OF_APARTMENT, DESCRIPTION, PHOTOS_DATA} from './data.js';
import {getRandomAvatar, getRandomPositiveInteger, getRandomItemRepeat, getRandomLength, getRandomPositiveFloat} from './get-random.js';

const creatAvailableApartment = function () {
  const LAT = getRandomPositiveFloat (35.65000, 35.70000,5);
  const LNG = getRandomPositiveFloat (139.70000,139.80000,5);

  return {
    author : {
      avatar:getRandomAvatar(),
    },

    offer : {
      title: TITLE,
      address: `${LAT} , ${LNG}`,
      price: getRandomPositiveInteger (500, 20000),
      type: getRandomItemRepeat (TYPE_OF_APARTMENT),
      rooms: getRandomPositiveInteger (1, 5),
      guests: getRandomPositiveInteger (1, 10),
      checkin: getRandomItemRepeat (TIMES),
      checkout: getRandomItemRepeat (TIMES),
      features: getRandomLength (FEATURES_OF_APARTMENT),
      description: DESCRIPTION,
      photos: getRandomLength (PHOTOS_DATA),
    },

    location : {
      lat: LAT,
      lng: LNG,
    },
  };
};
const temptArray = new Array (10).fill('').map(() => creatAvailableApartment());

export {temptArray};
