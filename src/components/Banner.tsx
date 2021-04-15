import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      backgroundImage="url('/background.png')"
      h={80}
      px={["7", "16", "16", "36"]}
      py={["7", "0"]}
      justify="space-between"
      align={["flex-start", "center"]}
      pos="relative"
    >
      <Box>
        <Text
          fontSize="4xl"
          color="gray.100"
          fontWeight="500"
        >
          5 Continentes, <br/> infinitas possibilidades.
        </Text>
        <Text
          color="gray.200"
          zIndex="2"
          position="absolute"
        >
          Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou. 
        </Text>
      </Box>

      <Image
        transform="rotate(3deg)"
        src="/icons/airplane.svg"
        alt="Logo"
        pos="absolute"
        right={["2", "36"]}
        top={["40", "20"]}
      />
    </Flex>
  )
}