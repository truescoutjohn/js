const _createImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Photo');
  imgElem.src = imgSrc;
  imgElem.addEventListener('load', event => {
    callback(null, imgElem);
  });
  imgElem.addEventListener('error', event => {
    callback('Image load is failed');
  });
};
export const addImage = (imgSrc, callback) => {
  const imgElem = _createImage(imgSrc, callback);
  const container = document.querySelector('.page');
  container.append(imgElem);
};

// callack function
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');

  sizeElem.textContent = `${width} x ${height}`;
};

// examples
document.addEventListener('DOMContentLoaded', () => {
  addImage(
    'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
    onImageLoaded,
  );
});
