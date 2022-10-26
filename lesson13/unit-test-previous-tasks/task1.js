export const reverseArray = array => {
  if (!Array.isArray(array)) {
    return null;
  }

  return [...array].reverse();
};
