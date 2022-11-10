const baseUrl = 'https://api.github.com/users';

export const fetchUserData = async userName => {
  const response = await fetch(`${baseUrl}/${userName}`);
  const user = await response.json();
  return user;
};

export const fetchRepositories = async url => {
  const response = await fetch(url);
  const repositories = await response.json();
  return repositories;
};
