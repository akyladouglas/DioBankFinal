import { Flex } from "@chakra-ui/react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }: any) => {
  return (
    <Flex minHeight="100vh" flexDirection="column" justifyContent="center">
      <Header />
      {children}
      {/* <Footer /> */}
    </Flex>
  );
};
