const conta = {
  id: "1",
  email: "akyladouglas@hotmail.com",
  password: "123456",
  name: "Akyla Douglas",
  balance: 2000.0,
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 2000);
});
