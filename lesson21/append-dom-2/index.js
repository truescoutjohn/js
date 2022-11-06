// input: number
// ouput: object
const createLi = number => {
  const li = document.createElement('li');
  li.textContent = number;
  return li;
};

// input: undefined
// output: undefined
export const finishList = () => {
  const ul = document.querySelector('.list');
  const special = document.querySelector('.special');

  const li1 = createLi(1);
  ul.prepend(li1);

  const li4 = createLi(8);
  ul.append(li4);

  const li2 = createLi(4);
  special.before(li2);

  const li3 = createLi(6);
  special.after(li3);
};

document.addEventListener('DOMContentLoaded', finishList);
