import { Login } from "./login";
describe("Login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  const mockEmail = "akyladouglas@hotmail.com";

  it("deve exibir um alert com boas vindas caso o email seja valido", async () => {
    await Login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Bem Vindo ${mockEmail}!`);
  });

  it("não deve exibir a mensagem de boas vindas sem o email", async () => {
    await Login(mockEmail);
    expect(mockAlert).not.toHaveBeenCalledWith("Bem Vindo !");
  });

  it("deve exibir um erro caso o email seja inválido", async () => {
    await Login("email@invalido.com");
    expect(mockAlert).toHaveBeenCalledWith("Email inválido");
  });
});
