import Head from "next/head";
import React from "react";
import Layout from "../layout/_layout";
import Homecontainer from "../containers/home";
const Home = () => {
  return (
    <div>
      <Homecontainer />
    </div>
  );
};

Home.getLayout = function getLayout(
  page:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
) {
  return <Layout>{page}</Layout>;
};

export default Home;
