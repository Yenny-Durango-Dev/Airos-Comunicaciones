import React from "react";
import { FaWhatsapp, FaFileInvoice } from "react-icons/fa";
import banner from "../img/factura.png";

const InvoicePage = () => {
  return (
    <div className="w-full">
      {/* Hero con fondo de imagen */}
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-black/60 backdrop-blur-sm p-10 rounded-md text-white shadow-lg max-w-2xl mx-4">
          <FaFileInvoice className="text-6xl mb-4 mx-auto text-[#26B170]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CONSULTA TU FACTURA
          </h1>
          <p className="text-lg md:text-xl mb-2">
            Verifica el estado de tu factura de forma rápida y segura.
          </p>
          <p className="text-sm text-gray-200">
            Solo necesitas dar clic en el botón y uno de nuestros asesores te enviará la factura directamente por WhatsApp.
          </p>
        </div>
      </div>

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
