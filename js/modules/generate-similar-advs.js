import {temptArray} from './generate-card.js';

const COMPARISON_ENGLISH_WITH_RUSSIAN = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const conditionsEmpty = function (EmptyContent) {
  return (EmptyContent === ' ') || (EmptyContent === undefined) || (EmptyContent === null);
};

const randomData = temptArray;
const advertizementTemplate = document.querySelector ('#card').content;

const titleTemplate = advertizementTemplate.querySelector ('.popup__title');
const addressTemplate = advertizementTemplate.querySelector ('.popup__text--address');
const priseTemplate = advertizementTemplate.querySelector ('.popup__text--price');
const apartmentTypeTemplate = advertizementTemplate.querySelector ('.popup__type');
const capacityTemplate = advertizementTemplate.querySelector ('.popup__text--capacity');
const timeTemplate = advertizementTemplate.querySelector ('.popup__text--time');
const featuresTemplate = advertizementTemplate.querySelector ('.popup__features');
const descriptionTemplate = advertizementTemplate.querySelector ('.popup__description');
const photosTemplate = advertizementTemplate.querySelector ('.popup__photos');
const avatarTemplate = advertizementTemplate.querySelector ('.popup__avatar');


const boardForAdv = document.querySelector ('#map-canvas');
const similarListFragment = document.createDocumentFragment ();
const addToFragment = function (partOfAdv){
  similarListFragment.appendChild (partOfAdv);
};

const hideEmptyContent = function (EmptyContent, fieldToHide) {
  if (conditionsEmpty (EmptyContent)) {
    fieldToHide.classList.add ('hidden');}
};

randomData.forEach((advData) => {

  const advTitle = titleTemplate.cloneNode (true);
  advTitle.textContent = advData.offer.title;
  hideEmptyContent (advTitle.textContent,advTitle);
  addToFragment (advTitle);

  const advAddress = addressTemplate.cloneNode (true);
  advAddress.textContent = advData.offer.address;
  hideEmptyContent (advData.offer.address,advAddress);
  addToFragment (advAddress);

  const advPrice = priseTemplate.cloneNode (true);
  advPrice.textContent = `${advData.offer.price} ₽/ночь`;
  hideEmptyContent (advData.offer.price, advPrice);
  addToFragment (advPrice);

  const advApartment = apartmentTypeTemplate.cloneNode (true);
  const compareWithRightName = function (englishNameOfApart) {
    return COMPARISON_ENGLISH_WITH_RUSSIAN [englishNameOfApart];
  };
  advApartment.textContent = compareWithRightName (advData.offer.type);
  hideEmptyContent (advData.offer.type, advApartment);
  addToFragment(advApartment);

  const advCapacity = capacityTemplate.cloneNode (true);
  if (conditionsEmpty (advData.offer.rooms)) {
    advCapacity.textContent = `Для ${advData.offer.guests} гостей`;
  } else if (conditionsEmpty (advData.offer.guests)) {
    advCapacity.textContent =`${advData.offer.rooms} комнат`;
  } else if ((conditionsEmpty (advData.offer.guests)) === (conditionsEmpty (advData.offer.rooms))) {
    advCapacity.classList.add ('hidden');
  }
  else {
    advCapacity.textContent =`${advData.offer.rooms} комнаты для ${advData.offer.guests} гостей`;
  }
  addToFragment(advCapacity);

  const advTime = timeTemplate.cloneNode (true);
  if (conditionsEmpty(advData.offer.checkin)) {
    advTime.textContent = `Выезд до ${advData.offer.checkout}`;
  } else if (conditionsEmpty(advData.offer.checkout)) {
    advTime.textContent = `Заезд после ${advData.offer.checkin}`;
  } else if ((conditionsEmpty (advData.offer.checkout)) === (conditionsEmpty (advData.offer.checkin))){
    advTime.classList.add ('hidden');
  } else{
    advTime.textContent = `Заезд после ${advData.offer.checkin}, выезд до ${advData.offer.checkout}`;
  }
  addToFragment(advTime);

  const advFeatures = featuresTemplate.cloneNode (true);
  if(conditionsEmpty(advData.offer.features)){
    advFeatures.classList.add ('hidden');
  } else {
    const advFeaturesClass = advData.offer.features.map((feature) =>
      `popup__feature--${feature}`);
    advFeatures.querySelectorAll ('.popup__feature')
      .forEach ((feature) => {
        const item = feature.classList[1];
        if (!advFeaturesClass.includes(item)) {
          feature.remove ();
        }
      });}
  addToFragment(advFeatures);

  const advDescription = descriptionTemplate.cloneNode (true);
  advDescription.textContent = advData.offer.description;
  hideEmptyContent (advData.offer.description, advDescription);
  addToFragment (advDescription);

  const advPhotos = photosTemplate.cloneNode (false);
  const onePhotoTemplate = photosTemplate.querySelector('.popup__photo');
  advData.offer.photos
    .forEach ((photo) => {
      const advPhoto = onePhotoTemplate.cloneNode (true);
      advPhoto.src = photo;
      advPhotos.appendChild (advPhoto);
    });
  addToFragment (advPhotos);

  const advAvatar = avatarTemplate.cloneNode (true);
  advAvatar.src = advData.author.avatar;
  hideEmptyContent (advData.author.avatar, advAvatar);
  addToFragment (advAvatar);

});

boardForAdv.appendChild (similarListFragment);
