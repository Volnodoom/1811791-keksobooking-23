const body = document.querySelector ('body');
const successTemplate = document.querySelector ('#success').content.querySelector('.success');
const errorTemplate = document.querySelector ('#error').content.querySelector('.error');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const showSuccessOnSubmitting = (status) => {

  const showAdvSuccess = body.insertAdjacentElement ('beforeend',successTemplate.cloneNode (true));

  const onPopupEscKeydownForSuccess = (evt) => {
    if (isEscEvent) {
      showAdvSuccess.classList.add ('visually-hidden');
      removeHandler ();
    }
  };

  const onClickForSuccess = () => {
    showAdvSuccess.classList.add ('visually-hidden');
  };

  const addHandler = () => {
    document.addEventListener ('keydown', onPopupEscKeydownForSuccess);
    document.addEventListener ('click', onClickForSuccess);
  };

  const removeHandler = () => {
    document.removeEventListener ('keydown', onPopupEscKeydownForSuccess);
    document.removeEventListener ('click', onClickForSuccess);
  };

  switch (status) {
    case 'add':
      addHandler ();
      break;
    case 'remove':
      removeHandler ();
      break;
  }
};

const showErrorOnSubmitting = () => {
  const advError = errorTemplate.cloneNode (true);
  body.insertAdjacentElement ('beforeend',advError);
};



export {showErrorOnSubmitting, showSuccessOnSubmitting};


//console.log ('click click CLICK CLICK')
