import { Flex, Heading } from "@chakra-ui/react";
import { Slides } from "./Slides";

export function Navigation() {
  return (
    <Flex
      mt="14"
      flexDir="column"
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