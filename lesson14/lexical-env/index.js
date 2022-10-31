let message = 'Just learn it';
export const sendMessage = name => `${name}, ${message}! Your Gromcode`;

export const setMessage = newMessage => {
  message = newMessage;
};
