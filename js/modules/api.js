import {showAlert} from './alert.js';

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

export {getData};
