import { Box, Flex, Text } from "@chakra-ui/react";

interface ContinentBannerProps {
  name: string;
  img: string;
}

export function ContinentBanner({ name, img }: ContinentBannerProps) {
  return (
    <Flex
      backgroundImage={`url('/continents/banners/${img}')`}
      h="lg"
      px={36}
      py={12}
      pos="relative"
      align="flex-end"
    >
      <Box>
        <Text
          noOfLines={2}
          fontSize="5xl"
          color="gray.100"
          fontWeight="600"
        >
          {name}
        </Text>
      </Box>
    </Flex>
  )
}