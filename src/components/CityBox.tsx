import { Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CountryBoxProps {
  city: string;
  country: string;
  flag: string;
  img: string;
}

export function CityBox({ city, country, flag, img }: CountryBoxProps) {
  return (
    <Flex
      bg="gray.50"
      w="2xs"
      h="2xs"
      borderRadius="base"
      borderWidth="1px"
      borderColor="yellow.500"
      flexDir="column"
      mx="auto"
    >
      <Image 
        src={`/cities/${img}`}
        alt={city}
        h={44}
      />

      <Flex
        flex="1"
        justify="space-between"
        px={6}
      >
        <Flex
          flexDir="column"
          justify="center"
        >
          <Heading
            fontFamily="Barlow"
            fontWeight="semibold"
            fontSize="xl"
            mb={3}
          >
            {city}
          </Heading>
          <Text
            fontFamily="Barlow"
            fontWeight="medium"
            fontSize="md"
            color="gray.300"
          >
            {country}
          </Text>
        </Flex>

        <Image
          alignSelf="center"
          src={`/cities/flags/${flag}`} 
          alt={flag}
          h={8}
          w={8}
        />
      </Flex>
    </Flex>
  )
}