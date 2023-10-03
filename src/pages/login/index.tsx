import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/header";
import { LoginCard } from "../../components/login";

export const Login = () => {
  return (
    <Flex minHeight="100vh" flexDirection="column" justifyContent="center">
      <Header />
      <LoginCard />
    </Flex>
  );
};

export default Login;
