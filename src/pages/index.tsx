import Head from "next/head";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Icons } from "../components/Icons";
import { Navigation } from "../components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <Header />
      <Banner />
      <Icons />
      <Navigation />
    </>
  )
}
