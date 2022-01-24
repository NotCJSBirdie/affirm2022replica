import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sticky from "react-sticky-el";
import Input from "./components/Input";
import Carousel from "./components/Carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Affirm 2022 Replica</title>
        <meta name="AFFIRM 2022 REPLICA" content="This is my showcase #12" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="z-10 absolute top-0 w-full">
        <Header />
      </div>

      <Hero />

      <Input />

      <Carousel />
    </div>
  );
};

export default Home;
