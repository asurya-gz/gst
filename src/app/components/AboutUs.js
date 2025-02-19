import React from "react";
import { motion } from "framer-motion";

const AboutUs = ({ isLoaded }) => {
  return (
    <div className="container mx-auto px-6 md:px-12 min-h-screen">
      <div className="pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            <span style={{ color: "#F4F5FB" }}>Tentang </span>
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #A9E1E2",
                textStroke: "2px #A9E1E2",
              }}
            >
              Kami
            </span>{" "}
          </h1>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <p className="text-lg leading-relaxed mb-6 text-gray-200">
                Kami adalah perusahaan teknologi yang berkomitmen untuk
                menghadirkan solusi digital inovatif yang memberdayakan bisnis
                di era digital. Dengan pengalaman mendalam dan pemahaman
                komprehensif tentang lanskap teknologi yang terus berkembang,
                kami membantu mengubah visi Anda menjadi realitas digital yang
                berdampak.
              </p>
              <p className="text-lg leading-relaxed text-gray-200">
                Dari pengembangan platform e-commerce yang canggih hingga
                pembuatan perangkat lunak khusus, setiap solusi kami dirancang
                dengan mempertimbangkan kebutuhan unik bisnis Anda. Tim ahli
                kami menggabungkan kreativitas dengan keahlian teknis untuk
                menciptakan teknologi yang tidak hanya fungsional, tetapi juga
                mendorong pertumbuhan bisnis yang berkelanjutan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-xl opacity-20"
                  style={{ backgroundColor: "#CAE7FF", filter: "blur(40px)" }}
                ></div>
                <div className="relative w-full max-w-lg mx-auto">
                  <img
                    src="/hero2.png"
                    alt="About Georgy Solusi Digital"
                    className="w-full h-auto rounded-xl"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <div
              className="p-6 rounded-xl"
              style={{ backgroundColor: "rgba(169, 225, 226, 0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                Visi Kami
              </h3>
              <p className="text-gray-200">
                Menjadi mitra terpercaya dalam transformasi digital, mendorong
                inovasi dan pertumbuhan berkelanjutan bagi setiap bisnis yang
                kami layani.
              </p>
            </div>

            <div
              className="p-6 rounded-xl"
              style={{ backgroundColor: "rgba(202, 231, 255, 0.1)" }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">
                Misi Kami
              </h3>
              <p className="text-gray-200">
                Menghadirkan solusi teknologi yang inovatif, efisien, dan
                berdampak positif, sambil membangun hubungan jangka panjang
                dengan klien kami.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: "rgba(169, 225, 226, 0.1)" }}
            >
              <div className="text-3xl font-bold mb-2 text-white">100+</div>
              <p className="text-gray-200">Proyek Selesai</p>
            </div>

            <div
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: "rgba(202, 231, 255, 0.1)" }}
            >
              <div className="text-3xl font-bold mb-2 text-white">50+</div>
              <p className="text-gray-200">Klien Puas</p>
            </div>

            <div
              className="p-6 rounded-xl text-center"
              style={{ backgroundColor: "rgba(169, 225, 226, 0.1)" }}
            >
              <div className="text-3xl font-bold mb-2 text-white">5+</div>
              <p className="text-gray-200">Tahun Pengalaman</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
