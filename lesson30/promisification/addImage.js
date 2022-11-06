const _createImage = (url, callback) => {
  const img = document.createElement('img');
  img.setAttribute('alt', 'User avatar');
  img.src = url;
  const onImageLoaded = () => {
    const { width, height } = img;
    callback({ width, height });
  };

  const onImageLoadError = () => callback('Image load failed');

  img.addEventListener('load', onImageLoaded);

  img.addEventListener('error', onImageLoadError);
};
export const addImage = (url, callback) => {
  const img = _createImage(url, callback);
  const pageElem = document.querySelector('.page');
  pageElem.append(img);
};
