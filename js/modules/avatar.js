const FORMAT_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const formAdv = document.querySelector ('.ad-form');
const fileChooser = formAdv.querySelector ('.ad-form__field input');
const preview = formAdv.querySelector ('.ad-form-header__preview img');

fileChooser.addEventListener ('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const match = FORMAT_TYPES.some((it) => fileName.endsWith(it));

  if (match) {
    const reader = new FileReader();
    reader.addEventListener ('load', () => {
      preview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }

});
