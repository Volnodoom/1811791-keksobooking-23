const formAdv = document.querySelector ('.ad-form');
const contentsAdvInput = formAdv.querySelectorAll ('input');
const contentsAdvSelect = formAdv.querySelectorAll ('select');
const contentsAdvButton = formAdv.querySelectorAll ('button');

const formMapFilter = document.querySelector ('.map__filters');
const contentMapInput = formMapFilter.querySelectorAll ('input');
const contentMapSelect = formMapFilter.querySelectorAll ('select');

const setDisabled = (contents) => {
  for (const content of contents) {
    content.disabled = true;
  }
};

const setOperational = (contents) => {
  for (const content of contents) {
    content.disabled = false;
  }
};

const deactivateFormAdv = () => {
  formAdv.classList.add ('ad-form--disabled');
  setDisabled (contentsAdvInput);
  setDisabled (contentsAdvSelect);
  setDisabled (contentsAdvButton);
};

const deactivateMapFilters = () => {
  formMapFilter.classList.add ('ad-form--disabled');
  setDisabled (contentMapInput);
  setDisabled (contentMapSelect);
};

const activateFormAdv = () => {
  formAdv.classList.remove ('ad-form--disabled');
  setOperational (contentsAdvInput);
  setOperational (contentsAdvSelect);
  setOperational (contentsAdvButton);
};

const activateMapFilters = () => {
  formMapFilter.classList.remove ('ad-form--disabled');
  setOperational (contentMapInput);
  setOperational (contentMapSelect);
};

export {deactivateFormAdv, deactivateMapFilters, activateFormAdv, activateMapFilters};
