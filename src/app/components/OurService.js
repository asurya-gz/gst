"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// SVG Icon components with animation variants
const EcommerceIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.path
      d="M3 3H5L5.4 5M5.4 5H21L17 13H7M5.4 5L7 13M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.2044 17 15.4413 17.3161 14.8787 17.8787C14.3161 18.4413 14 19.2044 14 20C14 20.7956 14.3161 21.5587 14.8787 22.1213C15.4413 22.6839 16.2044 23 17 23C17.7956 23 18.5587 22.6839 19.1213 22.1213C19.6839 21.5587 20 20.7956 20 20C20 19.2044 19.6839 18.4413 19.1213 17.8787C18.5587 17.3161 17.7956 17 17 17ZM8 20C8 20.7956 7.68393 21.5587 7.12132 22.1213C6.55871 22.6839 5.79565 23 5 23C4.20435 23 3.44129 22.6839 2.87868 22.1213C2.31607 21.5587 2 20.7956 2 20C2 19.2044 2.31607 18.4413 2.87868 17.8787C3.44129 17.3161 4.20435 17 5 17C5.79565 17 6.55871 17.3161 7.12132 17.8787C7.68393 18.4413 8 19.2044 8 20Z"
      stroke="#A9E1E2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  </motion.svg>
);

const WebDevIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.path
      d="M10 16L14 8M15 16L18 13L21 16M3 16L6 13L9 16M2 4H22M2 8H22M2 12H22M2 16H22M2 20H22"
      stroke="#A9E1E2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  </motion.svg>
);

const SoftwareIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.path
      d="M8 9L11 12L8 15M13 15H16M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
      stroke="#A9E1E2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  </motion.svg>
);

const PlatformIcon = () => (
  <motion.svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    whileHover={{ scale: 1.2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.path
      d="M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
      stroke="#A9E1E2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path
      d="M12 12L15 9M12 12L9 15M12 12L12 7M12 12L17 12"
      stroke="#A9E1E2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
    />
  </motion.svg>
);

// Background pattern component
const BackgroundPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="grid-pattern"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <circle cx="2" cy="2" r="1" fill="#A9E1E2" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>
);

const OurServices = ({ isLoaded }) => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "E-COMMERCE SOLUTION",
      description:
        "Solusi e-commerce lengkap yang menyediakan platform penjualan online yang aman, mudah digunakan, dan dapat disesuaikan. Kami membantu Anda membangun toko online yang meningkatkan penjualan dan memberikan pengalaman belanja yang optimal bagi pelanggan Anda.",
      bgColor: "rgba(169, 225, 226, 0.1)",
      icon: <EcommerceIcon />,
    },
    {
      id: 2,
      title: "WEB DEVELOPMENT",
      description:
        "Layanan pengembangan website profesional yang mencakup desain responsif, pengalaman pengguna yang intuitif, dan performa tinggi. Kami menciptakan website yang tidak hanya menarik secara visual tetapi juga fungsional untuk memenuhi tujuan bisnis Anda.",
      bgColor: "rgba(202, 231, 255, 0.1)",
      icon: <WebDevIcon />,
    },
    {
      id: 3,
      title: "CUSTOM SOFTWARE",
      description:
        "Solusi perangkat lunak khusus yang dirancang sesuai dengan kebutuhan spesifik bisnis Anda. Kami mengembangkan aplikasi yang mengotomatisasi proses bisnis, meningkatkan efisiensi operasional, dan memberikan keunggulan kompetitif di pasar Anda.",
      bgColor: "rgba(169, 225, 226, 0.1)",
      icon: <SoftwareIcon />,
    },
    {
      id: 4,
      title: "DIGITAL PLATFORM",
      description:
        "Platform digital terintegrasi yang menghubungkan bisnis Anda dengan pelanggan, supplier, dan stakeholder lainnya. Kami membangun ekosistem digital yang memfasilitasi pertukaran informasi, transaksi, dan kolaborasi dengan antarmuka yang sederhana dan aman.",
      bgColor: "rgba(202, 231, 255, 0.1)",
      icon: <PlatformIcon />,
    },
  ];

  const handleServiceClick = (id) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
    }
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * index,
        duration: 0.8,
        type: "spring",
        stiffness: 50,
      },
    }),
  };

  return (
    <div className="container mx-auto px-6 md:px-12 relative">
      <div className="pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Background pattern */}
          <div className="relative">
            <BackgroundPattern />
          </div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-12 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span style={{ color: "#F4F5FB" }}>Layanan </span>
            <motion.span
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #A9E1E2",
                textStroke: "2px #A9E1E2",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kami
            </motion.span>{" "}
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                custom={index}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={cardVariants}
                className="relative"
              >
                <motion.div
                  className={`rounded-xl h-full transition-all duration-300 cursor-pointer overflow-hidden relative ${
                    activeService === service.id
                      ? "scale-105"
                      : "hover:scale-105"
                  }`}
                  style={{ backgroundColor: service.bgColor }}
                  onClick={() => handleServiceClick(service.id)}
                  whileHover={{
                    boxShadow: `0 0 20px rgba(169, 225, 226, 0.3)`,
                  }}
                >
                  {/* Decorative corner line */}
                  <svg
                    className="absolute top-0 left-0 w-16 h-16 opacity-30 pointer-events-none"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M0 0 L64 0 L64 64"
                      fill="none"
                      stroke="#A9E1E2"
                      strokeWidth="1"
                    />
                  </svg>
                  <svg
                    className="absolute bottom-0 right-0 w-16 h-16 opacity-30 pointer-events-none"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M64 64 L0 64 L0 0"
                      fill="none"
                      stroke="#A9E1E2"
                      strokeWidth="1"
                    />
                  </svg>

                  <div className="p-6 h-full flex flex-col">
                    <motion.div
                      className="flex justify-center items-center mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                      }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
                        whileHover={{
                          backgroundColor: "rgba(169, 225, 226, 0.3)",
                        }}
                      >
                        {service.icon}
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      className="text-xl font-bold mb-4 text-white text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + 0.1 * index }}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: activeService === service.id ? 1 : 0,
                        height: activeService === service.id ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-200 text-sm mt-2">
                        {service.description}
                      </p>
                    </motion.div>

                    {activeService !== service.id && (
                      <motion.div
                        className="mt-auto pt-2 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + 0.1 * index }}
                      >
                        <motion.span
                          className="text-sm text-gray-200 opacity-70"
                          whileHover={{ opacity: 1 }}
                        >
                          Klik untuk detail
                        </motion.span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurServices;
