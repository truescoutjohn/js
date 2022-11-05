import { addImage } from './addImage.js';

const addImageV2 = url => {
  return new Promise((resolve, reject) => {
    try {
      addImage(url, resolve);
    } catch (error) {
      addImage(url, reject);
    }
  });
};

// examples

addImageV2('https://i.postimg.cc/vTmGnYBf/2022-08-29-143153.jpg')
  .then(data => console.log(data)) // ==> { width: 200, height: 100 }
  .catch(error => console.log(error)); // ==> 'Image load failed'
