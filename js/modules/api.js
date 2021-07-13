import {showAlert} from './serverMessages.js';

const getData = (onSuccess) => {
  fetch ('https://23.javascript.pages.academy/keksobooking/data')
    .then ((response) => {
      if (response.ok) { return response.json();}
      else {throw new Error (`${response.status} -- ${response.statusText}`);}
    })
    .then ((advData) => {onSuccess(advData);})
    .catch ((error) => {
      showAlert (`Произошла ошибка ${error} при подключении к сервису.
      Просьба обратится в службу поддержки или перезаргузить страницу через несколько минут.`);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch ('https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then ((response) => {
      if (response.ok) {
        return onSuccess ();}
      else {onFail ();}
    })
    .catch (() => {onFail ();});
};

export {getData, sendData};
