import { Flex, Heading, Text } from "@chakra-ui/react";

interface InfoCountryProps {
  value: number;
  children: string;
}

export function InfoCountry({ value, children }: InfoCountryProps) {
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
    >
      <Heading
        color="yellow.500"
      >
        {value}
      </Heading>
      <Text
        fontSize="2xl"
        fontWeight="semibold"
      >
        {children}
      </Text>
    </Flex>
  )
}