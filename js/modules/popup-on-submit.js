// eslint-disable-next-line arrow-body-style
const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc' || evt.keyCode === 27;
};

// eslint-disable-next-line no-use-before-define
const onClickForSuccess = () => {hideSuccess ();};
// eslint-disable-next-line no-use-before-define
const onEscKeydownForSuccess = (evt) => {if (isEscEvent(evt)) {hideSuccess ();}};

const hideSuccess = () => {
  document.querySelector ('.success').remove();
  document.removeEventListener ('keydown', onEscKeydownForSuccess);
  document.removeEventListener ('click', onClickForSuccess);
};

const showSuccess = () => {
  const body = document.querySelector ('body');
  const successTemplate = document.querySelector ('#success').content.querySelector('.success');
  body.insertAdjacentElement ('beforeend',successTemplate.cloneNode (true));
  document.addEventListener ('keydown', onEscKeydownForSuccess);
  document.addEventListener ('click', onClickForSuccess);
  document.querySelector ('.ad-form').reset();
};

// eslint-disable-next-line no-use-before-define
const onClickForError = () => {hideError ();};
// eslint-disable-next-line no-use-before-define
const onEscKeydownForError = (evt) => {if (isEscEvent(evt)) {hideError ();}};

const hideError = () => {
  document.querySelector ('.error').remove();
  document.removeEventListener ('keydown', onEscKeydownForError);
  document.removeEventListener ('click', onClickForError);
};

const showError = () => {
  const body = document.querySelector ('body');
  const errorTemplate = document.querySelector ('#error').content.querySelector('.error');
  body.insertAdjacentElement ('beforeend',errorTemplate.cloneNode (true));
  document.addEventListener ('keydown', onEscKeydownForError);
  document.addEventListener ('click', onClickForError);
  body.querySelector ('.error__button').addEventListener ('click', onClickForError);
  body.querySelector ('.error__button').focus ();
};

export {showSuccess, showError};
