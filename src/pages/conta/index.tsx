import { Center, Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Header } from "../../components/header";
import CardInfo from "../../components/cardInfo";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";

interface IUserAccount {
  id: string;
  email: string;
  password: string;
  name: string;
  balance: number;
}

export const Conta = () => {
  const [userData, setUserData] = useState<null | IUserAccount>();
  const [actualDate, setActualDate] = useState<string>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const response: any | IUserAccount = await api;
      setUserData(response);
    };

    getData();
  }, []);

  if (userData && id !== userData.id) {
    navigate("/");
  }

  useEffect(() => {
    const date = new Date();

    const dateFormated = `
    ${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/${
      date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
    }/${date.getFullYear()} ${
      date.getHours() < 10 ? `0${date.getHours}` : date.getHours()
    }:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}:${
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
    }`;

    setActualDate(dateFormated);
  }, [userData]);

  return (
    <Flex minHeight="100vh" flexDirection="column">
      <Header />
      <Center>
        {userData == null || userData == undefined ? (
          <Center>
            <Spinner size="xl" color="#00ff1a" />
          </Center>
        ) : (
          <SimpleGrid columns={2} spacing={8} paddingTop={5}>
            <>
              <CardInfo
                mainTitle={`Bem vindo(a) ${userData?.name}`}
                mainContent={``}
                additionalContent={`Data: ${actualDate}`}
              />
              <CardInfo
                mainTitle={``}
                mainContent={`Saldo: R$ ${userData?.balance}`}
                additionalContent={`Atualizado: ${actualDate}`}
              />
            </>
          </SimpleGrid>
        )}
      </Center>
    </Flex>
  );
};

export default Conta;
