"use client";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "6281393507765 ";
  const message =
    "Halo, saya ingin mengetahui lebih lanjut tentang layanan Anda.";

  const handleClick = () => {
    // Menggunakan window.open untuk membuka di tab baru
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center relative transition-transform hover:scale-110 active:scale-90"
        onClick={handleClick}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute w-full h-full rounded-full bg-green-500 opacity-40 animate-ping" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
