import { Flex, Heading } from "@chakra-ui/react";
import { Slides } from "./Slides";

export function Navigation() {
  return (
    <Flex
      mt="14"
      flexDir="column"
      px={["0", "7"]}
    >
      <Heading
        mx="auto"
        textAlign="center"
        fontSize="3xl"
        fontWeight="500"
        mb="14"
      >
        Vamos nessa? <br/> Então escolha seu continente
      </Heading>

      <Slides />
    </Flex>
  )
}