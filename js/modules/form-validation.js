const form = document.querySelector ('.ad-form');
const titleInput = form.querySelector ('input[name="title"]');
const priceInput = form.querySelector ('input[name="price"]');
const roomsInput = form.querySelector ('select[name="rooms"]');
const roomsElements = roomsInput.querySelectorAll('option');
const capacityInput = form.querySelector ('select[name="capacity"]');
const capacityElements = capacityInput.querySelectorAll('option');

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

const connectCapacityWithRooms = function () {
  capacityInput.addEventListener ('change', () => {

    for (const capacityElement of capacityElements) {
      capacityElement.setAttribute ('disabled','');}

    switch (roomsElements) {
      case 'roomsElements[0]':
        capacityElements[2].removeAttribute ('disabled');
        break;
      case 'roomsElements[1]':
        capacityElements[2].removeAttribute ('disabled');
        capacityElements[1].removeAttribute ('disabled');
        break;
      case 'roomsElements[2]':
        capacityElements[2].removeAttribute ('disabled');
        capacityElements[1].removeAttribute ('disabled');
        capacityElements[0].removeAttribute ('disabled');
        break;
      case 'roomsElements[3]':
        capacityElements[3].removeAttribute ('disabled');
        break;
    }
  });
};
connectCapacityWithRooms();

let capacityTextContent;
for (const capacityElement of capacityElements) {
  capacityTextContent += `${capacityElement.textContent},`;
}
const arrayOfCapacity = capacityTextContent.split(',').pop();

console.log (arrayOfCapacity);



