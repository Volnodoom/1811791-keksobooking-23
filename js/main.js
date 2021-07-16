import {filtrateOfAdvs, onChangeFiltrate} from './modules/ForMap/adv-map-filtration.js';
import { getData } from './modules/api.js';

getData((advData) => {
  filtrateOfAdvs (advData);
  onChangeFiltrate(() => filtrateOfAdvs (advData));
});


