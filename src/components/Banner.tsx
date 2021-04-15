import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      backgroundImage="url('/background.png')"
      h={80}
      px={36}
      justify="space-between"
      align="center"
      pos="relative"
    >
      <Box>
        <Text
          noOfLines={2}
          fontSize="4xl"
          color="gray.100"
          fontWeight="500"
        >
          5 Continentes, <br/> infinitas possibilidades.
        </Text>
        <Text
          color="gray.200"
        >
          Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou. 
        </Text>
      </Box>

      <Image
        transform="rotate(3deg)"
        src="/icons/airplane.svg"
        alt="Logo"
        pos="absolute"
        right="36"
        top="20"
      />
    </Flex>
  )
}