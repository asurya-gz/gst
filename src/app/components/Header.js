"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = ({ isLoaded }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "628179350817";
  const message = "Hello, I would like to know more about your services";

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "/", text: "Home", delay: 0.1 },
    { href: "/components/About", text: "About Us", delay: 0.2 },
    { href: "/components/OurService", text: "Our Services", delay: 0.3 },
    { href: "/components/Why", text: "Why Choose Us", delay: 0.4 },
    { href: "/components/Founder", text: "Our Founder", delay: 0.5 },
    {
      href: "#",
      text: "Contact Us",
      delay: 0.6,
      onClick: handleWhatsAppClick,
    },
  ];

  return (
    <header
      className="py-4 px-4 sm:px-6 md:px-12 fixed w-full z-10"
      style={{
        backgroundColor: "rgba(4, 9, 47, 0.9)",
        boxShadow: "0 4px 6px rgba(169, 225, 226, 0.3)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1
                className="text-lg sm:text-xl md:text-2xl font-bold"
                style={{ color: "#F4F5FB" }}
              >
                <span style={{ color: "#A9E1E2" }}>PT.</span>{" "}
                <span className="hidden sm:inline">Georgy Solusi Digital</span>
                <span className="sm:hidden">GSD</span>
              </h1>
            </motion.div>
          </div>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 lg:space-x-8">
            {menuItems.map((item) => (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -10 }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                {item.onClick ? (
                  <a
                    href="#"
                    onClick={item.onClick}
                    className="hover:text-opacity-80 transition-colors duration-300 text-sm lg:text-base"
                    style={{ color: "#F4F5FB" }}
                  >
                    {item.text}
                  </a>
                ) : (
                  <Link href={item.href}>
                    <span
                      className="hover:text-opacity-80 transition-colors duration-300 text-sm lg:text-base"
                      style={{ color: "#F4F5FB" }}
                    >
                      {item.text}
                    </span>
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4"
        >
          <ul className="flex flex-col space-y-4 py-4">
            {menuItems.map((item) => (
              <motion.li
                key={item.text}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: item.delay }}
                className="px-4"
              >
                {item.onClick ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      item.onClick(e);
                      setIsMenuOpen(false);
                    }}
                    className="block hover:text-opacity-80 transition-colors duration-300"
                    style={{ color: "#F4F5FB" }}
                  >
                    {item.text}
                  </a>
                ) : (
                  <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                    <span
                      className="block hover:text-opacity-80 transition-colors duration-300"
                      style={{ color: "#F4F5FB" }}
                    >
                      {item.text}
                    </span>
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
