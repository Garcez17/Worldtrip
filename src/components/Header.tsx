import { Flex, Image } from "@chakra-ui/react";

export function Header () {
  return (
    <Flex
      as="header"
      h="20"
      w="100%"
      maxWidth={1480}
      align="center"
      justify="center"
    >
      <Image src="/logo.svg" alt="Logo" />
    </Flex>
  )
}