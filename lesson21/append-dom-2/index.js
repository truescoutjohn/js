//input: undefined
//output: undefined
const finishList = () => {
  const ul = document.createElement('ul');

  const li1 = document.createElement('li');
  li1.textContent = 1;
  ul.prepend(li1);

  const li4 = document.createElement('li');
  li4.textContent = 8;
  ul.append(li4);

  const li2 = document.createElement('li');
  li2.textContent = 4;
  li4.before(li2);

  const li3 = document.createElement('li');
  li3.textContent = 6;
  li2.after(li3);

  document.querySelector('body').append(ul);
};

finishList();
