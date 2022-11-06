export const getAdults = obj => {
  const ADULT_AGE = 18;
  if (!Object.keys(obj).length) {
    return {};
  }

  const resultObject = { ...obj };
  Object.keys(resultObject).forEach(key => {
    if (resultObject[key] < ADULT_AGE) {
      delete resultObject[key];
    }
  });

  return resultObject;
};
