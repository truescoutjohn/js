export const getAdults = obj => {
  const ADULT_AGE = 18;
  if (!Object.keys(obj).length) {
    return {};
  }

  const resultObject = Object.assign({}, obj);
  for (const key in resultObject) {
    if (resultObject[key] < ADULT_AGE) {
      delete resultObject[key];
    }
  }

  return resultObject;
};
