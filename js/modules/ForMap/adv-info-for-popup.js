const COMPARISON_ENGLISH_WITH_RUSSIAN = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const advertisementTemplate = document.querySelector ('#card').content.querySelector ('.popup');

const compareWithRightName = function (englishNameOfApart) {
  return COMPARISON_ENGLISH_WITH_RUSSIAN [englishNameOfApart];
};

const createCustomPopup = (advData) => {
  const advElement = advertisementTemplate.cloneNode(true);

  if (advData.author.avatar) {
    advElement.querySelector ('.popup__avatar').setAttribute ('src',advData.author.avatar);
  } else {
    advElement.querySelector ('.popup__avatar').classList.add ('visually-hidden');
  }

  if (advData.offer.title) {
    advElement.querySelector ('.popup__title').textContent = advData.offer.title;
  } else {
    advElement.querySelector ('.popup__title').classList.add ('visually-hidden');
  }

  advElement.querySelector ('.popup__text--address').classList.add ('visually-hidden');

  if (advData.offer.price) {
    advElement.querySelector ('.popup__text--price').textContent = `${advData.offer.price} ₽/ночь`;
  } else {
    advElement.querySelector ('.popup__text--price').classList.add ('visually-hidden');
  }

  if (advData.offer.type) {
    advElement.querySelector ('.popup__type').textContent = compareWithRightName (advData.offer.type);
  } else {
    advElement.querySelector('.popup__type').classList.add ('visually-hidden');
  }

  if (advData.offer.rooms && advData.offer.guests) {
    advElement.querySelector ('.popup__text--capacity').textContent =`${advData.offer.rooms} комнаты для ${advData.offer.guests} гостей`;
  } else {
    advElement.querySelector ('.popup__text--capacity').classList.add ('visually-hidden');
  }

  if (advData.offer.checkin) {
    advElement.querySelector ('.popup__text--time').textContent = `Заезд после ${advData.offer.checkin}, выезд до ${advData.offer.checkout}`;
  } else {
    advElement.querySelector ('.popup__text--time').classList.add ('visually-hidden');
  }

  if (advData.offer.features) {
    const advFeaturesClass = advData.offer.features.map ((feature) => `popup__feature--${feature}`);
    advElement.querySelectorAll ('.popup__feature').forEach ((feature) => {
      const item = feature.classList[1];
      if (!advFeaturesClass.includes (item)) {
        feature.remove ();
      }
    });
  } else {
    advElement.querySelector ('.popup__features').classList.add ('visually-hidden');
  }

  if (advData.offer.description) {
    advElement.querySelector ('.popup__description').textContent = advData.offer.description;
  } else {
    advElement.querySelector ('.popup__description').classList.add ('visually-hidden');
  }

  if (advData.offer.photos) {
    advData.offer.photos.forEach ((photo) => {
      const advPhoto = advElement.querySelector ('.popup__photo').cloneNode (true);
      advPhoto.setAttribute('src',photo);
      advElement.querySelector ('.popup__photos').appendChild (advPhoto);
    });
    advElement.querySelector ('.popup__photo').remove();
  } else {
    advElement.querySelector ('.popup__photos').classList.add ('visually-hidden');
  }
  return advElement;
};
export {createCustomPopup};
