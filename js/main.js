import {filtrateOfAdvs, onChangeFiltrate} from './modules/ForMap/adv-map-filtration.js';
import { getData } from './modules/api.js';
import { setUserFormReset, setUserFormSubmit } from './modules/form-validation.js';
import { debounce } from './modules/debounce.js';
import './modules/upload-photo.js';

const RERENDER_DELAY = 500;

getData((advData) => {
  filtrateOfAdvs (advData);
  onChangeFiltrate(debounce(
    () => filtrateOfAdvs (advData),
    RERENDER_DELAY,
  ));
});

setUserFormSubmit ();
setUserFormReset ();
