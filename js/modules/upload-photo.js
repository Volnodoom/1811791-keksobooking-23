const FORMAT_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const IMAGE_WIDTH = 70;
const IMAGE_HEIGHT = 70;
const DEFAULT_AVATAR = 'img/muffin-grey.svg';

const form = document.querySelector ('.ad-form');
const avatarFileChooser = form.querySelector ('.ad-form__field #avatar');
const avatarPreview = form.querySelector ('.ad-form-header__preview img');
const photoFileChooser = form.querySelector ('.ad-form__upload #images');
const photoPreview = form.querySelector ('.ad-form__photo');

const creatHandlerForUploadingImages = (fileChooser, preview, creatImageElem) => {
  fileChooser.addEventListener ('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();
    const match = FORMAT_TYPES.some((it) => fileName.endsWith(it));

    if (match) {
      const reader = new FileReader();
      reader.addEventListener ('load', () => {
        if (creatImageElem) {
          const photo = new Image (IMAGE_WIDTH, IMAGE_HEIGHT);
          photoPreview.appendChild(photo);
          photo.src = reader.result;
        } else {preview.src = reader.result;}
      });
      reader.readAsDataURL(file);
    }
  });
};

const uploadAvatar = creatHandlerForUploadingImages (avatarFileChooser, avatarPreview);
const uploadPhoto = creatHandlerForUploadingImages (photoFileChooser, photoPreview, true);

const resetImages = () => {
  avatarPreview.src = DEFAULT_AVATAR;
  photoPreview.innerHTML = '';
};

export {uploadAvatar, uploadPhoto, resetImages};
