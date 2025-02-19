"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "../Header";
import OurFounder from "../Founder";
import Footer from "../Footer";
import WhatsAppButton from "../WatsappButton";

export default function Founder() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{ backgroundColor: "#04092F" }}
    >
      <Head>
        <title>PT. Georgy Solusi Digital - Solusi Digital Terpercaya</title>
        <meta
          name="description"
          content="PT. Georgy Solusi Digital menyediakan solusi teknologi digital terbaik untuk bisnis Anda"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header isLoaded={isLoaded} />
      <OurFounder isLoaded={isLoaded} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
