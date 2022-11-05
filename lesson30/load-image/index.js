const addImage = imgSrc => {
  return new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => reject(new Error('Image load failed')));
  });
};

document.addEventListener('DOMContentLoaded', event => {
  addImage('https://i.postimg.cc/vTmGnYBf/2022-08-29-143153.jp')
    .then(data => console.log(data))
    .catch(error => console.log(error));
});
