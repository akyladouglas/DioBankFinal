import { Box, Flex, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainTitle: string;
  mainContent: number | string;
  additionalContent: number | string;
}

const CardInfo = ({ mainTitle, mainContent, additionalContent }: ICardInfo) => {
  return (
    <Box
      minHeight="120px"
      backgroundColor="#00c200"
      padding={8}
      borderRadius={25}
    >
      <Flex flexDirection="column" gap="2px">
        <Text fontSize="xs" fontWeight="bold" color="#f3f3f3">
          {additionalContent}
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="#f3f3f3">
          {mainTitle}
        </Text>
        <Text fontSize="lg" color="#f3f3f3">
          {mainContent}
        </Text>
      </Flex>
    </Box>
  );
};

export default CardInfo;
