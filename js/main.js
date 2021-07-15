//import './modules/form-validation.js';
//import {setTypicalAdvMarkerOnMap} from './modules/ForMap/map-settings.js';
import {pickUpFilter, setMapUpdateOnclick} from './modules/ForMap/adv-map-filtration.js';
import { getData } from './modules/api.js';

getData((advData) => {
  pickUpFilter (advData);
  setMapUpdateOnclick (() => pickUpFilter (advData));
});


