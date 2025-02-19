"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WatsappButton";

export default function Home() {
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
      <Main isLoaded={isLoaded} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
