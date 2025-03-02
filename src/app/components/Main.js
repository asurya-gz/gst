"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Main = ({ isLoaded }) => {
  const phoneNumber = "6281315468631"; // Updated WhatsApp number
  const message =
    "Halo, saya ingin mengetahui lebih lanjut tentang layanan Anda.";

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <main className="flex-grow flex items-center">
      <div className="container mx-auto px-6 md:px-12 pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#F4F5FB" }}
            >
              Transformasi{" "}
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #F4F5FB",
                  textStroke: "2px #F4F5FB",
                }}
              >
                Digital
              </span>{" "}
              untuk <span style={{ color: "#A9E1E2" }}>Bisnis Modern</span>
            </h2>
            <p className="text-lg mb-8" style={{ color: "#F4F5FB" }}>
              Kami menyediakan solusi teknologi digital terdepan yang membantu
              bisnis Anda tumbuh dan berkembang di era digital.
            </p>
            <div className="flex space-x-4">
              <Link href="/components/OurService">
                <button
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  style={{ backgroundColor: "#A9E1E2", color: "#04092F" }}
                >
                  Lihat Layanan
                </button>
              </Link>
              <Link href="/contact">
                <button
                  onClick={handleWhatsAppClick}
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  style={{
                    backgroundColor: "transparent",
                    color: "#F4F5FB",
                    border: "2px solid #CAE7FF",
                  }}
                >
                  Hubungi Kami
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-xl opacity-20"
                style={{ backgroundColor: "#CAE7FF", filter: "blur(40px)" }}
              ></div>
              <div className="relative w-full max-w-lg mx-auto">
                <img
                  src="/hero.png"
                  alt="Georgy Solusi Digital"
                  className="w-full h-auto rounded-xl"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div
            className="p-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: "rgba(169, 225, 226, 0.1)" }}
          >
            <div
              className="w-12 h-12 mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(169, 225, 226, 0.3)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#A9E1E2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#F4F5FB" }}
            >
              Inovasi Teknologi
            </h3>
            <p style={{ color: "#F4F5FB" }}>
              Solusi inovatif menggunakan teknologi terkini untuk kebutuhan
              bisnis Anda.
            </p>
          </div>

          <div
            className="p-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: "rgba(202, 231, 255, 0.1)" }}
          >
            <div
              className="w-12 h-12 mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(202, 231, 255, 0.3)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#CAE7FF"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#F4F5FB" }}
            >
              Keamanan Terpercaya
            </h3>
            <p style={{ color: "#F4F5FB" }}>
              Prioritas keamanan data dan sistem dengan standar tertinggi
              industri.
            </p>
          </div>

          <div
            className="p-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: "rgba(169, 225, 226, 0.1)" }}
          >
            <div
              className="w-12 h-12 mb-4 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(169, 225, 226, 0.3)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#A9E1E2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: "#F4F5FB" }}
            >
              Tim Profesional
            </h3>
            <p style={{ color: "#F4F5FB" }}>
              Didukung oleh tim berpengalaman yang siap memberikan layanan
              terbaik.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Main;
