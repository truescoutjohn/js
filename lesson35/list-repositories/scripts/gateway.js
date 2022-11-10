const baseUrl = 'https://api.github.com/users';

export const fetchUserData = userName =>
  fetch(`${baseUrl}/${userName}`).then(response => response.json());

export const fetchRepositories = url => fetch(url).then(response => response.json());
