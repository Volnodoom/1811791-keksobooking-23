import {TITLE, TYPE_OF_APARTMENT, TIMES, FEATURES_OF_APARTMENT, DESCRIPTION, PHOTOS_DATA} from './modulesForKeksBooking/library.js';
import {getRandomAvatar, getRandomPositiveInteger, getRandomItemRepeat, getRandomLength} from './modulesForKeksBooking/get-random.js';
import {LAT, LNG} from './modulesForKeksBooking/location-lat-lng.js';

const creatAvailableApartment = function () {
  LAT;
  LNG;

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

temptArray;
