export const withdraw = (clients, balances, client, amount) => {
  const indexClient = clients.indexOf(client);

  if (balances[indexClient] < amount) {
    return -1;
  }

  return balances[indexClient] - amount;
};
