import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";
import Body from "../../components/Body";




export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="by this item" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <Body />


      <Footer />
     </div>
  );
}