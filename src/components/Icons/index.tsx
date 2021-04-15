import { Box, Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { Icon } from "./Icon";

export function Icons() {
  return (
    <Flex
      minH="80"
      flexDir="column"
      px={["7", "16", "16", "36"]}
      mt={["24", "0"]}
    >
      <SimpleGrid
        gap="4"
        my="auto"
        minChildWidth="160px"
      >
        <Icon icon="cocktail">
          vida noturna
        </Icon>

        <Icon icon="surf">
          praia
        </Icon>

        <Icon icon="building">
          moderno
        </Icon>

        <Icon icon="museum">
          clássico
        </Icon>
        
        <Icon icon="earth">
          e mais...
        </Icon>
      </SimpleGrid>

      <Box 
        h="1"
        alignSelf="center"
        w="90px" 
        bg="gray.500"
        mt={["16", "0"]}
      />
    </Flex>
  )
}