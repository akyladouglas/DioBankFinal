import { Box, Center, Flex, Input, Text } from "@chakra-ui/react";
import { Button } from "../button";
import { useState } from "react";
import { Login } from "../../services/login";

export const LoginCard = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = () => {
    Login(email);
  };

  return (
    <Center minHeight="50%" minWidth="50%">
      <Box
        backgroundColor="#FFFFFF"
        borderRadius="25px"
        padding="15px"
        width={["100%", "75%", "50%", "25%"]}
      >
        {/* {userData === null || userData === undefined ? (
          <h1>Loading...</h1>
        ) : (
          <h1>Informações carregadas</h1>
        )} */}
        <Flex flexDirection="column" gap="15px">
          <Box>
            <Text fontSize="xl" textAlign="center">
              Bem vindo ao DioBank
            </Text>
            <Text fontSize="sm" textAlign="center">
              Faça o login para prosseguir
            </Text>
          </Box>

          <Box>
            <Flex flexDirection="column" gap="10px">
              <Input
                type="email"
                placeholder="Digite o email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Digite a senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Center>
                <Button
                  onClick={handleLogin}
                  color="#00c200"
                  size="sm"
                  width="100%"
                >
                  Entrar
                </Button>
              </Center>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};
