const form = document.querySelector ('.ad-form');
const titleInput = form.querySelector ('input[name="title"]');
const priceInput = form.querySelector ('input[name="price"]');
const roomsInput = form.querySelector ('select[name="rooms"]');
const capacityInput = form.querySelector ('select[name="capacity"]');
const capacityElements = capacityInput.querySelectorAll ('option');

titleInput.addEventListener ('input', () => {
  if (titleInput.validity.tooShort) {
    titleInput.setCustomValidity (`Заголовок объявления должен состоять не менее чем из 30 символов. Число символов равно ${titleInput.value.length}.`);
  } else {
    titleInput.setCustomValidity ('');
  }
  titleInput.reportValidity();
});

priceInput.addEventListener ('input', () => {
  if (priceInput.validity.rangeOverflow) {
    priceInput.setCustomValidity (`Максимальная цена за ночь не может превышать данного значения ${priceInput.max}`);
  } else {
    priceInput.setCustomValidity ('');
  }
  priceInput.reportValidity();
});

const setDisabledValue = (elements, values) => {
  for (let item = 0; item < elements.length; item++) {
    elements[item].disabled = values.indexOf(elements[item].value) > -1;
  }
};

const roomsInputAndCapacity = () => {
  switch (roomsInput.value) {
    case '1':
      setDisabledValue (capacityElements, ['3', '2', '0']);
      capacityElements[2].selected = true;
      break;
    case '2':
      setDisabledValue (capacityElements, ['3', '0']);
      capacityElements[1].selected = true;
      break;
    case '3':
      setDisabledValue(capacityElements, ['0']);
      capacityElements[0].selected = true;
      break;
    case '100':
      setDisabledValue(capacityElements, ['3', '2', '1']);
      capacityElements[3].selected = true;
      break;
  }
};

const onChoiceNumberOfRooms = () => {
  roomsInputAndCapacity();
};

roomsInput.addEventListener('click', onChoiceNumberOfRooms);
