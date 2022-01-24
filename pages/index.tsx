import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Affirm 2022 Replica</title>
        <meta name="AFFIRM 2022 REPLICA" content="This is my showcase #12" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed w-full">
        <Header />
      </div>

      <Hero />
    </div>
  );
};

export default Home;
