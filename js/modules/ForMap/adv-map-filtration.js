import {createAdvMarker, clearMap} from './map-settings.js';

const FIXED_NUMBER_OF_ADV = 10;
const NUMERAL_SYSTEM = 10;
const DEFAULT_SELECTION = 'any';
const priceRestrictions = {
  low : '10000',
  high: '50000',
};

const container = document.querySelector ('.map__filters');
const housingType = container.querySelector ('#housing-type');
const housingPrice = container.querySelector ('#housing-price');
const housingRooms = container.querySelector ('#housing-rooms');
const housingGuests = container.querySelector ('#housing-guests');

/// ----> filtration conditions
const filtrateHousingType = (card) => {
  if (housingType.value === DEFAULT_SELECTION) {
    return true;
  } return housingType.value === card.offer.type;
};

const filtrateHousingRooms = (card) => {
  if (housingRooms.value === DEFAULT_SELECTION) {
    return true;
  } return parseInt(housingRooms.value,NUMERAL_SYSTEM) === card.offer.rooms;
};

const filtrateHousingGuests = (card) => {
  if (housingGuests.value === DEFAULT_SELECTION) {
    return true;
  } return parseInt (housingGuests.value,NUMERAL_SYSTEM) === card.offer.guests;
};

const filtrateHousingPrice = (card) => {
  switch (housingPrice.value) {
    case 'low':
      return card.offer.price < priceRestrictions.low;
    case 'middle':
      return (card.offer.price >= priceRestrictions.low) && (card.offer.price <= priceRestrictions.high);
    case 'high':
      return card.offer.price > priceRestrictions.high;
    default:
      return true;
  }
};

const filtrateHousingFeatures = (card) => {
  const housingFeatures = container.querySelector ('#housing-features').querySelectorAll ('[name="features:checked"]');

  return Array.from(housingFeatures).every((checkedFeature) => {
    if (card.offer.features) {
      return card.offer.features.includes(checkedFeature.value);
    }
  });
};
/// <---- filtration conditions

const filtrateOfAdvs = (advData) => {
  clearMap ();
  advData
    .filter((element) => filtrateHousingType (element) && filtrateHousingRooms (element) && filtrateHousingGuests (element) && filtrateHousingPrice (element) && filtrateHousingFeatures (element))
    .slice(0, FIXED_NUMBER_OF_ADV)
    .forEach((element) => {createAdvMarker (element);});
};

const onChangeFiltrate = (cb) => {
  container.addEventListener ('change', () => {
    cb ();
  });
};

export {filtrateOfAdvs, onChangeFiltrate};
