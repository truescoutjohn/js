const _createImage = (imgSrc, resolve, reject) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;
  const onImageLoaded = () => {
    const { width, height } = imgElem;
    resolve({ width, height });
  };

  imgElem.addEventListener('load', onImageLoaded);

  imgElem.addEventListener('error', () => reject(new Error('Image load failed')));
  return imgElem;
};
export const addImage = imgSrc => {
  return new Promise((resolve, reject) => {
    const imgElem = _createImage(imgSrc, resolve, reject);
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);
  });
};

document.addEventListener('DOMContentLoaded', event => {
  addImage(
    'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  )
    .then(data => console.log(data))
    .catch(error => console.log(error));
});
