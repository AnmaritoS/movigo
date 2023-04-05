import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState("translate-x-0	");
  const [flipped, setFlipped] = useState(false);

  const router = useRouter();

  function movieSearched() {
    setFlipped(true);
    setPosition("translate-x-full");
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full h-full">
        <div
          className={`absolute w-[50vw] h-[100vh] z-[1] ${position} transition-transform ease-in duration-[0.5s] overflow-hidden bg-[#E2CCB1] bg-cover h-[100vh]  font-['Vintage'] `}
        >
          <div className="index-page">
            <Header href="searchList" buttonText="Movies List" />
            <Hero flipAnimation={movieSearched} />
          </div>
        </div>
        <div
          className={`absolute w-[50vw] h-[100vh] z-[0] ${position} transition-transform ease-in duration-[0.5s] overflow-hidden bg-[#E2CCB1] bg-cover h-[100vh]  font-['Vintage']`}
        >
          <div className="index-page bg-[#E2CCB1] h-[100vh] translate-x-0 z-10"></div>
        </div>
      </div>
    </>
  );
}