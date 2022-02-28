import type { NextPage } from "next";
import Head from "next/head";
import { Carousel } from "../components/Carousel";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <Carousel />
    </div>
  );
};

export default Home;
