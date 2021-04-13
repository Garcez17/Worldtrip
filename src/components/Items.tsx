import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";

export function Items() {
  return (
    <Flex
      h="80"
      flexDir="column"
      align="center"
      justify="center"
    >
      <HStack
        spacing="40"
        my="auto"
      >
        <Flex
          flexDir="column"
          align="center"
          justify="center"
        >
          <Image
            src="/cocktail.svg"
            h="20"
            alt="Cocktail"
          />

          <Text
            mt="6"
            fontSize="2xl"
            fontWeight="600"
            lineHeight="8"
          >
            vida noturna
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          align="center"
          justify="center"
        >
          <Image
            src="/surf.svg"
            alt="Surf"
          />

          <Text
            mt="6"
            fontSize="2xl"
            fontWeight="600"
            lineHeight="8"
          >
            praia
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          align="center"
          justify="center"
        >
          <Image
            src="/building.svg"
            alt="Building"
          />

          <Text
            mt="6"
            fontSize="2xl"
            fontWeight="600"
            lineHeight="8"
          >
            moderno
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          align="center"
          justify="center"
        >
          <Image
            src="/museum.svg"
            alt="Museum"
          />

          <Text
            mt="6"
            fontSize="2xl"
            fontWeight="600"
            lineHeight="8"
          >
            clássico
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          align="center"
          justify="center"
        >
          <Image
            src="/earth.svg"
            alt="Earth"
          />

          <Text
            mt="6"
            fontSize="2xl"
            fontWeight="600"
            lineHeight="8"
          >
            e mais...
          </Text>
        </Flex>
      </HStack>

      <Box 
        h="1" 
        w="90px" 
        bg="gray.500" 
      />
    </Flex>
  )
}