import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { ContinentBanner } from "../components/ContinentBanner";
import { CityBox } from "../components/CityBox";
import { Header } from "../components/Header";
import { getContient } from "../utils/continents";
import Head from "next/head";
import { InfoCountry } from "../components/InfoCountry";

interface ContinentProps {
  continent: {
    name: string;
    description: string;
    countries: number;
    languages: number;
    top100cities: number;
    bannerImg: string;
    cities: Array<{
      city: string;
      country: string;
      flag: string;
      img: string;
    }>;
  }
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | Worldtrip</title>
      </Head>
      <Header />
      <ContinentBanner name={continent.name} img={continent.bannerImg} />
      <Flex
        as="article"
        pl={["7", "16", "16", "36"]}
        pr={["7", "16", "16", "20"]}
        py={["10", "10", "10", "20"]}
        flexDir={['column-reverse', 'column-reverse', 'row']}
      >
        <Text
          flex="1"
          color="gray.500"
          fontSize="xl"
          textAlign="justify"
        >
        {continent.description}
        </Text>

        <SimpleGrid 
          gap="2"
          minChildWidth="200px"
          flex="1"
          ml={["0", "0", "12", "16"]}
          mb={["12", "12", "0"]}
        >
          <InfoCountry value={continent.countries}>
            países
          </InfoCountry>

          <InfoCountry value={continent.languages}>
            línguas
          </InfoCountry>

          <InfoCountry value={continent.top100cities}>
            cidades +100
          </InfoCountry>
        </SimpleGrid>
      </Flex>
      <Box
        as="section"
        px={["7", "16", "16", "36"]}
      >
        <Heading
          fontSize="4xl"
          fontWeight="medium"
          color="gray.500"
        >
          Cidades +100
        </Heading>

        <SimpleGrid
          gap="4"
          flex="1"
          minChildWidth="250px"
          my={10}
        >
          {continent.cities.map(city => (
            <CityBox
              key={city.city}
              city={city.city}
              country={city.country}
              flag={city.flag}
              img={city.img}
            />
          ))}
        </SimpleGrid>
      </Box>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { continent: 'europe' } },
      { params: { continent: 'northamerica' } },
      { params: { continent: 'southamerica' } },
      { params: { continent: 'africa' } },
      { params: { continent: 'asia' } },
      { params: { continent: 'oceania' } },
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { continent } = context.params;

  const data = await getContient(String(continent));

  return {
    props: {
      continent: data,
    },
  }
}