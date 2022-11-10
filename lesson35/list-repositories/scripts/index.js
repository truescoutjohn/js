// algo
// 1. Create handle of event
//   1.1. Load user by github (Create promise by using fetch)
//      1.1.1 Parse response(If you wish you can check status of the response)
//   1.2. Get appropriate field from response object
//   1.3. Receive dom elements with certain class and place fields to these elements
// 2. Add event to button
import { fetchRepositories, fetchUserData } from './gateway.js';
import { renderUserData } from './users.js';
import { cleanReposList, renderRepos } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  showSpinner();
  cleanReposList();
  fetchUserData(userNameInputElem.value)
    .then(userData => {
      renderUserData(userData);
      return userData.repos_url;
    })
    .then(url => fetchRepositories(url))
    .then(reposList => renderRepos(reposList))
    .catch(error => alert(error.message))
    .finally(() => {
      hideSpinner();
    });
};

showUserBtnElem.addEventListener('click', onSearchUser);
