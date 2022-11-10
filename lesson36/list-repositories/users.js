const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

export const renderUserData = ({ avatar_url: avatarUrl, name, location }) => {
  userAvatarElem.src = avatarUrl;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};
