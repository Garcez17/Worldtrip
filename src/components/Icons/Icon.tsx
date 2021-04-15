import { Flex, Text, Image } from "@chakra-ui/react";

interface IconProps {
  children: string;
  icon: string;
}

export function Icon({ children, icon }: IconProps) {
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
    >
      <Image
        src={`/icons/${icon}.svg`}
        h="20"
        alt={icon}
      />

      <Text
        mt="6"
        fontSize="2xl"
        fontWeight="600"
        lineHeight="8"
      >
        {children}
      </Text>
    </Flex>
  )
}