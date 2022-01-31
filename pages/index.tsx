import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sticky from "react-sticky-el";
import Input from "./components/Input";
import Carousel from "./components/Carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import EarlyAccess from "./components/EarlyAccess";
import Choose from "./components/Choose";
import HowToBuy from "./components/HowToBuy";
import APR from "./components/APR";
import Featured from "./components/Featured";
import Clear from "./components/Clear";
import Trending from "./components/Trending";
import Pay from "./components/Pay";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";

const Home: NextPage = () => {
  const [navbar, setNavbar] = useState(
    <div className="z-10 fixed top-0 w-full bg-transparent">
      <Header />
    </div>
  );

  const changeNavbar = () => {
    if (window.scrollY > 100) {
      setNavbar(
        <div className="z-10 fixed top-0 w-full bg-white shadow-2xl">
          <Header />
        </div>
      );
    } else {
      setNavbar(
        <div className="z-10 fixed top-0 w-full bg-transparent">
          <Header />
        </div>
      );
    }
  };

  useEffect(changeNavbar, [navbar]);

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Affirm 2022 Replica</title>
        <meta name="AFFIRM 2022 REPLICA" content="This is my showcase #12" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">{navbar}</div>

      <Hero />

      <Input />

      <Carousel />

      <EarlyAccess />

      <Choose />

      <HowToBuy />

      <APR />

      <Featured />

      <Clear />

      <Trending />

      <Pay />

      <Footer />
    </div>
  );
};

export default Home;
