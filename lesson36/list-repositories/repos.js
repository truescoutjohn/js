const list = document.querySelector('.repo-list');

export const cleanReposList = () => {
  list.innerHTML = '';
};

export const renderRepos = reposList => {
  const reposListElems = reposList.map(({ name }) => {
    const li = document.createElement('li');
    li.classList.add('repo-list__item');
    li.textContent = name;

    return li;
  });
  cleanReposList();
  list.append(...reposListElems);
};
