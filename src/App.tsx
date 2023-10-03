import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Conta from "./pages/conta";
import { Box, ChakraProvider } from "@chakra-ui/react";

export const App = () => {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#222222">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/conta/:id" element={<Conta />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
};

export default App;
