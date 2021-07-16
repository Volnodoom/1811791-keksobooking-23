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
const housingFeatures = container.querySelector ('#housing-features').querySelectorAll ('[name="features:checked"]');

/// ----> filtration conditions
const filtrateHousingType = (card) => {
  if (housingType.value === DEFAULT_SELECTION) {
    return true;
  } housingType.value === card.offer.type;
};

const filtrateHousingRooms = (card) => {
  if (housingRooms.value === DEFAULT_SELECTION) {
    return true;
  } parseInt(housingRooms.value,NUMERAL_SYSTEM) === card.offer.rooms;
};

const filtrateHousingGuests = (card) => {
  if (housingGuests.value === DEFAULT_SELECTION) {
    return true;
  } parseInt (housingGuests.value,NUMERAL_SYSTEM) === card.offer.guests;
};

const filtrateHousingPrice = (card) => {
  switch (housingPrice.value) {
    case 'low':
      card.offer.price < priceRestrictions.low;
      break;
    case 'middle':
      (card.offer.price >= priceRestrictions.low) && (card.offer.price <= priceRestrictions.high);
      break;
    case 'high':
      card.offer.price > priceRestrictions.high;
      break;
    default:
      true;
      break;
  }
};

const filtrateHousingFeatures = (card) => {
  Array.from(housingFeatures).every((checkedFeature) => {
    if (card.offer.features) {
      card.offer.features.includes(checkedFeature.value);
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
  container.addEventListener ('changes', () => {
    cb ();
  });
};

export {filtrateOfAdvs, onChangeFiltrate};


// const getAdvRank = () => {
//   let rank = 0;

//   if (!(housingType.value === 'any')) {rank += 1;}
//   if (!(housingPrice.value === 'any')) {rank += 1;}
//   if (!(housingRooms.value === 'any')) {rank += 1;}
//   if (!(housingGuests.value === 'any')) {rank += 1;}
//   if (housingFeatures[0].checked) {rank += 1;}
//   if (housingFeatures[1].checked) {rank += 1;}
//   if (housingFeatures[2].checked) {rank += 1;}
//   if (housingFeatures[3].checked) {rank += 1;}
//   if (housingFeatures[4].checked) {rank += 1;}
//   if (housingFeatures[5].checked) {rank += 1;}

//   return rank;
// };

// const compareAdvs = (adv1, adv2) => {
//   const rankA = getAdvRank(adv1);
//   const rankB = getAdvRank (adv2);
//   return rankB - rankA;
// };
