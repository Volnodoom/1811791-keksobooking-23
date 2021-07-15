import {createAdvMarker, clearMap} from './map-settings.js';

const FIXED_NUMBER_OF_ADV = 10;


const container = document.querySelector ('.map__filters-container');
const housingType = container.querySelector ('#housing-type');
const housingPrice = container.querySelector ('#housing-price');
const housingRooms = container.querySelector ('#housing-rooms');
const housingGuests = container.querySelector ('#housing-guests');
const housingFeatures = container.querySelector ('#housing-features').querySelectorAll ('[name="features"]');

const showStartUpLayer = (advData) => {
  advData
    .slice(0, FIXED_NUMBER_OF_ADV)
    .forEach((element) => {createAdvMarker (element);});
};

const getAdvRank = () => {
  let rank = 0;

  if (!(housingType.value === 'any')) {rank += 1;}
  if (!(housingPrice.value === 'any')) {rank += 1;}
  if (!(housingRooms.value === 'any')) {rank += 1;}
  if (!(housingGuests.value === 'any')) {rank += 1;}
  if (housingFeatures[0].checked) {rank += 1;}
  if (housingFeatures[1].checked) {rank += 1;}
  if (housingFeatures[2].checked) {rank += 1;}
  if (housingFeatures[3].checked) {rank += 1;}
  if (housingFeatures[4].checked) {rank += 1;}
  if (housingFeatures[5].checked) {rank += 1;}

  return rank;
};

const compareAdvs = (adv1, adv2) => {
  const rankA = getAdvRank(adv1);
  const rankB = getAdvRank (adv2);
  return rankB - rankA;
};

const showFiltratedAdv = (advData) => {
  clearMap ();
  advData
    .slice()
    .sort (compareAdvs)
    .slice(0, FIXED_NUMBER_OF_ADV)
    .forEach((element) => {createAdvMarker (element);});
};

const conditions = housingType.children[0].selected === true &&
  housingPrice.children[0].selected === true &&
  housingRooms.children[0].selected === true &&
  housingGuests.children[0].selected === true &&
  housingFeatures[0].checked === false &&
  housingFeatures[1].checked === false &&
  housingFeatures[2].checked === false &&
  housingFeatures[3].checked === false &&
  housingFeatures[4].checked === false &&
  housingFeatures[5].checked === false;

const pickUpFilter = (advData) => {
  if (conditions) {return showStartUpLayer (advData);}
  return showFiltratedAdv (advData);
};

container.addEventListener ('change', ()=> {
  pickUpFilter();
});

const setMapUpdateOnclick = (cb) => {
  housingType.addEventListener('change', () => {
    showFiltratedAdv ();
  });
  cb();
};

export {pickUpFilter, setMapUpdateOnclick};
