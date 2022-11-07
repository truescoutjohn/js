// algo
// 1. Create handle of event
//   1.1. Load user by github (Create promise by using fetch)
//      1.1.1 Parse response(If you wish you can check status of the response)
//   1.2. Get appropriate field from response object
//   1.3. Receive dom elements with certain class and place fields to these elements
// 2. Add event to button

const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const fetchUserData = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(response => response.json());

const renderUserData = ({ avatar_url: avatarUrl, name, location }) => {
  userAvatarElem.src = avatarUrl;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then(userData => renderUserData(userData));
};

showUserBtnElem.addEventListener('click', onSearchUser);
