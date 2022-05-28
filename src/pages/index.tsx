import type { NextPage } from "next";
import Head from "next/head";
import { LoginScene } from "../components/scenes/Login";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Front-End Dashboards</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginScene />
    </div>
  );
};

export default Home;
