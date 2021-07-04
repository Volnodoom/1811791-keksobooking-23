const MIN_PRICE_FOR_APARTMENT_TYPE = {
  'palace':'10000',
  'flat':'1000',
  'house':'5000',
  'bungalow':'0',
  'hotel':'3000',
};

const form = document.querySelector ('.ad-form');
const titleInput = form.querySelector ('input[name="title"]');
const priceInput = form.querySelector ('input[name="price"]');
const apartmentTypeInput = form.querySelector ('select[name="type"]');
const roomsInput = form.querySelector ('select[name="rooms"]');
const capacityInput = form.querySelector ('select[name="capacity"]');
const capacityElements = capacityInput.querySelectorAll ('option');
const checkIn = form.querySelector ('select[name="timein"]');
const checkInElenemts = checkIn.querySelectorAll ('option');
const checkOut = form.querySelector ('select[name="timeout"]');
const checkOutElenemts = checkOut.querySelectorAll ('option');

titleInput.addEventListener ('input', () => {
  titleInput.reportValidity();
});

const setUpMinPrice = () => {
  const minPrice = +MIN_PRICE_FOR_APARTMENT_TYPE[apartmentTypeInput.value];
  priceInput.min = minPrice;
  priceInput.placeholder = minPrice;
};

setUpMinPrice ();
apartmentTypeInput.addEventListener ('change', () => {
  setUpMinPrice ();
});

priceInput.addEventListener ('input', () => {
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

const connectTime = (values, elementsTime) => {
  switch (values){
    case '12:00':
      elementsTime[0].selected = true;
      break;
    case '13:00':
      elementsTime[1].selected = true;
      break;
    case '14:00':
      elementsTime[2].selected = true;
      break;
  }
};
const onChangeCheckinToCheckout = () => {
  connectTime(checkIn.value, checkOutElenemts);
};
const onChangeCheckoutToCheckin = () => {
  connectTime(checkOut.value, checkInElenemts);
};

checkIn.addEventListener('change', onChangeCheckinToCheckout);
checkOut.addEventListener('change', onChangeCheckoutToCheckin);
