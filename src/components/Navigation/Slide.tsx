import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface SlideProps {
  img: string;
  title: string;
  description: string;
}

export function Slide({ img, title, description }: SlideProps) {
  return (
    <Box 
      position="relative"
    >
      <img src={img} alt={title} />
    
      <Flex 
        w={1240}
        position="absolute"
        top="180"
        left="0"
        flexDir="column"
        justify="center"
        align="center"
      >
        <Heading color="gray.50" fontSize="6xl">
          {title}
        </Heading>
        <Text color="gray.50" fontSize="4xl">
          {description}
        </Text>
      </Flex>
    </Box>
  )
}