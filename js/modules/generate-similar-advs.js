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
const advertisementTemplate = document.querySelector ('#card').content;

const titleTemplate = advertisementTemplate.querySelector ('.popup__title');
const addressTemplate = advertisementTemplate.querySelector ('.popup__text--address');
const priseTemplate = advertisementTemplate.querySelector ('.popup__text--price');
const apartmentTypeTemplate = advertisementTemplate.querySelector ('.popup__type');
const capacityTemplate = advertisementTemplate.querySelector ('.popup__text--capacity');
const timeTemplate = advertisementTemplate.querySelector ('.popup__text--time');
const featuresTemplate = advertisementTemplate.querySelector ('.popup__features');
const descriptionTemplate = advertisementTemplate.querySelector ('.popup__description');
const photosTemplate = advertisementTemplate.querySelector ('.popup__photos');
const onePhotoTemplate = photosTemplate.querySelector('.popup__photo');
const avatarTemplate = advertisementTemplate.querySelector ('.popup__avatar');
const finalElementTemplate = advertisementTemplate.querySelector ('.popup');

const boardForAdv = document.querySelector ('#map-canvas');
const similarListFragment = document.createDocumentFragment ();
const addToFragment = function (partOfAdv){
  similarListFragment.appendChild (partOfAdv);
};

const hideEmptyContent = function (EmptyContent, fieldToHide) {
  if (conditionsEmpty (EmptyContent)) {
    fieldToHide.classList.add ('hidden');}
};

const advTitle = titleTemplate.cloneNode (true);
const advAddress = addressTemplate.cloneNode (true);
const advPrice = priseTemplate.cloneNode (true);
const advApartment = apartmentTypeTemplate.cloneNode (true);
const advCapacity = capacityTemplate.cloneNode (true);
const advTime = timeTemplate.cloneNode (true);
const advFeatures = featuresTemplate.cloneNode (true);
const advDescription = descriptionTemplate.cloneNode (true);
const advPhotos = photosTemplate.cloneNode (false);
const advAvatar = avatarTemplate.cloneNode (true);
const advFinalElement = finalElementTemplate.cloneNode (false);

randomData.forEach((advData) => {
  advAvatar.src = advData.author.avatar;
  hideEmptyContent (advData.author.avatar, advAvatar);
  addToFragment (advAvatar);

  advTitle.textContent = advData.offer.title;
  hideEmptyContent (advTitle.textContent,advTitle);
  addToFragment (advTitle);

  advAddress.textContent = advData.offer.address;
  hideEmptyContent (advData.offer.address,advAddress);
  addToFragment (advAddress);

  advPrice.textContent = `${advData.offer.price} ₽/ночь`;
  hideEmptyContent (advData.offer.price, advPrice);
  addToFragment (advPrice);

  const compareWithRightName = function (englishNameOfApart) {
    return COMPARISON_ENGLISH_WITH_RUSSIAN [englishNameOfApart];
  };
  advApartment.textContent = compareWithRightName (advData.offer.type);
  hideEmptyContent (advData.offer.type, advApartment);
  addToFragment(advApartment);

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

  advDescription.textContent = advData.offer.description;
  hideEmptyContent (advData.offer.description, advDescription);
  addToFragment (advDescription);


  advData.offer.photos.forEach((photo) => {

    const advPhoto = onePhotoTemplate.cloneNode (true);
    advPhoto.src = photo;
    advPhotos.appendChild (advPhoto);
  });
  addToFragment (advPhotos);
});
advFinalElement.appendChild (similarListFragment);
boardForAdv.appendChild (advFinalElement);

/*advData.offer.photos.forEach((photo) => {
    {let ind = 0;
      while ( ind <advData.offer.photo.length) {
        if (ind === advData.offer.photo.length) {
          break;
        }
        ind++;
        const advPhoto = onePhotoTemplate.cloneNode (true);
        advPhoto.src = photo;
        advPhotos.appendChild (advPhoto);
      }
    }
  });*/
