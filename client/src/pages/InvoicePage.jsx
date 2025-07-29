import React from "react";
import { FaWhatsapp, FaFileInvoice } from "react-icons/fa";
import banner13 from "../img/background13.jpg";
import banner14 from "../img/background14.jpg";
import banner15 from "../img/background15.jpg";
import logo from "../img/logo.png";
import Hero from "../components/Hero"

const InvoicePage = () => {
  return (
    <div className="w-full">
      {/* Hero con fondo de imagen */}
      <Hero
        images={[banner13, banner14, banner15]}
        title="Solicita tu factura en un solo paso"
        text="Haz clic en el botón y recibe tu factura por WhatsApp con la ayuda de un asesor."
        showLogo={true}
        logo={logo}
      />
      {/* Sección de acción */}
      <div className="max-w-xl mx-auto bg-white text-gray-800 rounded-xl shadow-xl p-10 -mt-20 z-10 relative">
        <h2 className="text-2xl font-bold text-center text-[#26B170] mb-4">
          ¿Necesitas tu factura?
        </h2>
        <p className="text-center mb-6 text-gray-700">
          Haz clic en el botón y uno de nuestros asesores te atenderá de inmediato por WhatsApp.
        </p>
        <div className="flex justify-center">
          <a
            href="https://wa.me/573001112233"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#26B170] hover:bg-[#1e8d5a] text-white px-8 py-4 rounded-md font-bold text-lg flex items-center gap-3 shadow-lg transition"
          >
            <FaWhatsapp className="text-2xl" />
            Consultar factura
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
