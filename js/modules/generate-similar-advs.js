/*<template id="card">
    <article class="popup">
      <img src="img/avatars/user01.png" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
      <h3 class="popup__title">Уютное гнездышко для молодоженов</h3>
      <p class="popup__text popup__text--address">102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3</p>
      <p class="popup__text popup__text--price">5200 <span>₽/ночь</span></p>
      <h4 class="popup__type">Квартира</h4>
      <p class="popup__text popup__text--capacity">2 комнаты для 3 гостей</p>
      <p class="popup__text popup__text--time">Заезд после 14:00, выезд до 10:00</p>
      <ul class="popup__features">
        <li class="popup__feature popup__feature--wifi"></li>
        <li class="popup__feature popup__feature--dishwasher"></li>
        <li class="popup__feature popup__feature--parking"></li>
        <li class="popup__feature popup__feature--washer"></li>
        <li class="popup__feature popup__feature--elevator"></li>
        <li class="popup__feature popup__feature--conditioner"></li>
      </ul>
      <p class="popup__description">Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.</p>
      <div class="popup__photos">
        <img src="" class="popup__photo" width="45" height="40" alt="Фотография жилья">
      </div>
    </article>
  </template>*/

import {temptArray} from './generate-card.js';

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

const boardForAdvz = document.querySelector ('#map-canvas');
const similarListFragment = document.createDocumentFragment ();
const addToFragment = function (partOfAdv){
  similarListFragment.appendChild (partOfAdv);
};

randomData.forEach((advData) => {

  const advTitle = titleTemplate.cloneNode (true);
  advTitle.textContent = advData.offer.title;
  addToFragment (advTitle);

  const advAddress = addressTemplate.cloneNode (true);
  advAddress.textContent = advData.offer.address;
  addToFragment (advAddress);

  const advPrice = priseTemplate.cloneNode (true);
  advPrice.textContent = `${advData.offer.price} ₽/ночь`;
  addToFragment (advPrice);

  const advApartment = apartmentTypeTemplate.cloneNode (true);
  //constanta =>
  const comparisonEnglishWithRussian = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель',
  };
  const compareWithRightName = function (englishNameOfApart) {
    return comparisonEnglishWithRussian[englishNameOfApart];
  };
  advApartment.textContent = compareWithRightName (advData.offer.type);
  addToFragment(advApartment);

  const advCapacity = capacityTemplate.cloneNode (true);
  advCapacity.textContent = `${advData.offer.rooms} комнаты для ${advData.offer.guests} гостей`;
  addToFragment(advCapacity);

  const advTime = timeTemplate.cloneNode (true);
  advTime.textContent = `Заезд после ${advData.offer.checkin}, выезд до ${advData.offer.checkout} гостей`;
  addToFragment(advTime);

  const advFeatures = featuresTemplate.cloneNode (true);
  const advFeaturesClass = advData.offer.features.map((feature)=>
    `popup__feature--${feature}`);
  advFeatures.querySelectorAll ('.popup__feature')
    .forEach ((feature) => {
      const item = feature.classList[1];
      if (!advFeaturesClass.includes(item)) {
        feature.remove ();
      }
    });
  addToFragment(advFeatures);

  const advDescription = descriptionTemplate.cloneNode (true);
  advDescription.textContent = advData.offer.description;
  addToFragment (advDescription);

  const advPhotos = photosTemplate.cloneNode (false);
  const onePhotoTemplate = photosTemplate.querySelector('.popup__photo');
  advData.offer.photos
    .forEach ((photo)=> {
      const advPhoto = onePhotoTemplate.cloneNode (true);
      advPhoto.src = photo;
      advPhotos.appendChild (advPhoto);
    });
  addToFragment (advPhotos);

  const advAvatar = avatarTemplate.cloneNode (true);
  advAvatar.src = advData.author.avatar;
  addToFragment (advAvatar);
  //console.log (advData.offer.photos);

});


boardForAdvz.appendChild (similarListFragment);

//boardForAdvz.appendChild (advzTitle);

console.log (boardForAdvz);


