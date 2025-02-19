"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProgressCircle = ({ percentage, color, children }) => {
  const circumference = 2 * Math.PI * 45;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="w-32 h-32" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#1E293B"
          strokeWidth="6"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset:
              circumference - (percentage / 100) * circumference,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

const TestimonialCard = ({ quote, author, company, delay }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 shadow-lg relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="absolute -top-2 -left-2 text-6xl text-slate-700 opacity-30">
        "
      </div>

      <p className="text-gray-300 italic mb-4 relative z-10">{quote}</p>

      <div className="border-t border-slate-700 pt-4 mt-4">
        <p className="text-white font-medium">{author}</p>
        <p className="text-gray-400 text-sm">{company}</p>
      </div>

      <div className="absolute bottom-0 right-0 w-16 h-16">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <circle cx="90" cy="90" r="40" fill="#A9E1E2" />
        </svg>
      </div>
    </motion.div>
  );
};

export default function WhyUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const reasons = [
    {
      title: "Kepuasan Klien",
      value: 98,
      description: "Dari klien kami merasa puas dengan hasil kerja tim kami",
      color: "#A9E1E2",
      icon: (
        <div className="text-4xl font-bold" style={{ color: "#A9E1E2" }}>
          98<span className="text-xl">%</span>
        </div>
      ),
    },
    {
      title: "Inovatif",
      value: 50,
      description: "Solusi inovatif yang telah kami implementasikan",
      color: "#A9E1E2",
      icon: (
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold" style={{ color: "#A9E1E2" }}>
            50+
          </span>
          <span className="text-xs text-gray-400 mt-1">SOLUSI</span>
        </div>
      ),
    },
    {
      title: "Kreatif",
      value: 100,
      description: "Tim kreatif yang berdedikasi untuk desain terbaik",
      color: "#A9E1E2",
      icon: (
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold" style={{ color: "#A9E1E2" }}>
            100%
          </span>
          <span className="text-xs text-gray-400 mt-1">ORIGINAL</span>
        </div>
      ),
    },
    {
      title: "Ketepatan Penyelesaian",
      value: 95,
      description: "Proyek diselesaikan tepat waktu sesuai jadwal",
      color: "#A9E1E2",
      icon: (
        <div className="flex flex-col items-center">
          <span className="text-4xl font-bold" style={{ color: "#A9E1E2" }}>
            95%
          </span>
          <span className="text-xs text-gray-400 mt-1">ON-TIME</span>
        </div>
      ),
    },
  ];

  const testimonials = [
    {
      quote:
        "Tim mereka sangat responsif dan profesional. Tidak hanya memberikan solusi yang inovatif, tetapi juga selalu tepat waktu.",
      author: "Indra Wijaya",
      company: "PT Maju Jaya Sentosa",
    },
    {
      quote:
        "Kami sangat terkesan dengan kreativitas dan pendekatan problem-solving yang ditawarkan. Hasil kerjanya melampaui ekspektasi kami.",
      author: "Siti Rahayu",
      company: "Harmony Group Indonesia",
    },
    {
      quote:
        "Ketepatan waktu pengerjaan dan hasil yang berkualitas membuat kami tidak ragu untuk bekerja sama kembali di proyek-proyek mendatang.",
      author: "Budi Santoso",
      company: "TechVenture Indonesia",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <motion.div
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            <span style={{ color: "#F4F5FB" }}>Mengapa </span>
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
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl text-center mt-4">
            Komitmen kami untuk memberikan layanan terbaik didukung oleh empat
            pilar utama yang membuat kami menjadi pilihan tepat untuk partner
            digital Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2 * index,
                    duration: 0.8,
                    type: "spring",
                    stiffness: 50,
                  },
                },
              }}
            >
              <ProgressCircle percentage={reason.value} color={reason.color}>
                {reason.icon}
              </ProgressCircle>

              <h3 className="text-xl font-bold text-white mt-6 mb-2">
                {reason.title}
              </h3>

              <p className="text-gray-400 text-center">{reason.description}</p>

              <motion.div
                className="w-16 h-1 rounded-full mt-4"
                style={{ backgroundColor: reason.color }}
                initial={{ width: 0 }}
                animate={controls}
                variants={{
                  visible: {
                    width: "4rem",
                    transition: {
                      delay: 0.5 + 0.2 * index,
                      duration: 0.4,
                    },
                  },
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: { delay: 1, duration: 0.8 },
            },
          }}
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-12">
            Apa Kata <span className="text-[#A9E1E2]">Klien Kami</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
                delay={1.2 + index * 0.2}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
