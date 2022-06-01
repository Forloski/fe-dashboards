import type { GetServerSidePropsContext, NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { http } from "services/http";

const Home: NextPage = () => {
  const makerequest = async () => {
    const teste = await http.get("/authentication/teste");

    console.log(teste);
  };

  makerequest();

  return (
    <div>
      <Head>
        <title>Front-End Dashboards</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>welcome home son!</p>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
