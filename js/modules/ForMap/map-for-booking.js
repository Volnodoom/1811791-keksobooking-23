import {deactivateFormAdv, deactivateMapFilters, activateFormAdv, activateMapFilters} from '../page-status.js';
import {getData} from '../api.js';
import {createCustomPopup} from './adv-info-for-popup.js';

const START_OF_COORDINATES = {
  lat: 35.68950,
  lng: 139.69171,
};

const form = document.querySelector ('.ad-form');
const resetButton = form.querySelector ('.ad-form__reset');
const addressAdv = form.querySelector ('#address');
const contentsAdvInput = form.querySelectorAll ('input');

addressAdv.addEventListener ('click', () => {addressAdv.disabled = true;});
addressAdv.addEventListener ('focus', () => {addressAdv.disabled = true;});
addressAdv.defaultValue = `${START_OF_COORDINATES.lat.toFixed(5)}, ${START_OF_COORDINATES.lng}`;

deactivateFormAdv ();
deactivateMapFilters ();

const map = L.map ('map-canvas')
  .setView(START_OF_COORDINATES, 12);

//Main Pin Marker
const mainPinIcon = L.icon ({
  iconUrl: 'img/ForMap/marker-icon.png',
  iconSize: [52,52],
  iconAnchor: [26,52],
  shadowAnchor: 'img/ForMap/marker-shadow.png',
});

const mainPinMarker = L.marker (START_OF_COORDINATES, {draggable: true, icon: mainPinIcon});
mainPinMarker.addTo(map);

document.addEventListener('click', () => {
  if (addressAdv.value === '') {
    addressAdv.value = `${START_OF_COORDINATES.lat.toFixed(5)}, ${START_OF_COORDINATES.lng}`;
  }
});

const setStartViewOnClick = (domElement) => {
  domElement.addEventListener('click', ()=> {
    mainPinMarker.setLatLng (START_OF_COORDINATES);
    map.setView(START_OF_COORDINATES, 16);
  });
};

setStartViewOnClick (resetButton);

mainPinMarker.on ('moveend', (evt) => {
  addressAdv.value = `${evt.target.getLatLng ().lat.toFixed(5)}, ${evt.target.getLatLng ().lng.toFixed(5)}`;
});

//design Adv markers
const typicalAdvIcon = L.icon ({
  iconUrl: 'img/pin.svg',
  iconSize: [40,40],
  iconAnchor: [20,40],
  shadowAnchor: 'img/ForMap/marker-shadow.png',
});

const setTypicalAdvMarkerOnMap = (cb) => {
  getData((advData) => {
    advData.forEach((element) => {
      const typicalAdvMarker = L.marker (
        {
          lat: element.location.lat,
          lng: element.location.lng,
        },
        {icon: typicalAdvIcon},
      );
      typicalAdvMarker
        .addTo(map)
        .bindPopup(
          createCustomPopup (element),
          {keepInView: true},
        );
    });
  });
  cb ();
};

const mapLoading = L.tileLayer(
  'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
);
mapLoading.addTo(map);

map.on ('load', () => {
  activateFormAdv ();
  if (!contentsAdvInput.disabled) {
    setTypicalAdvMarkerOnMap (() => activateMapFilters ());
  }
});

export {setStartViewOnClick};

