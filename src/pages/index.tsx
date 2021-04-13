import { Box } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Items } from "../components/Items";
import { Navigation } from "../components/Navigation";

export default function Home() {
  return (
    <Box>
      <Header />
      <Banner />
      <Items />
      <Navigation />
    </Box>
  )
}
