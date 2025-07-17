import React from 'react'
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import banner from "../img/quienes-somos.png";

const ContactPage = () => {
  return (
    <div className="w-full">
      {/* Hero con fondo de imagen */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center shadow-lg overflow-hidden"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-[#01377dbd] p-8 rounded-md text-white max-w-2xl backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CONTACTO</h1>
          <p className="text-lg md:text-xl">
            Para cualquier consulta o inquietud, no dudes en contactar con nosotros.
          </p>
        </div>
      </div>

      {/* Formulario */}
      <div className="p-5 m-5 bg-[#F0FAFC] rounded-lg shadow-md">
        <form className="grid gap-4 p-6">
          <h2 className="text-2xl text-center font-bold text-[#01377D]">Formulario de contacto</h2>
          <input
            type="text"
            placeholder="Nombre"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#009DD0] transition duration-200"
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#009DD0] transition duration-200"
            required
          />
          <textarea
            placeholder="Escribe tu mensaje aquí..."
            className="border border-gray-300 rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#009DD0] transition duration-200"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#26B170] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#7FD349] transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>

      {/* Separador */}
      <hr className="border-t border-[#98E7F4] my-10 mx-auto w-1/2" />

      {/* Información de contacto */}
      <div className="text-center text-[#01377D] shadow-md m-10 p-10 rounded-md bg-white space-y-3">
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaPhoneAlt className="text-[#009DD0]" /> <strong>Teléfono:</strong> +57 300 111 2233
        </p>
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaWhatsapp className="text-[#26B170]" />
          <strong>WhatsApp:</strong>{" "}
          <a href="https://wa.me/573001112233" className="text-[#009DD0] underline">Escríbenos aquí</a>
        </p>
        <p className="flex items-center justify-center gap-2 text-lg">
          <FaEnvelope className="text-[#009DD0]" /> <strong>Correo:</strong> contacto@airoscomunicaciones.com
        </p>
      </div>

      {/* Horarios */}
      <div className="text-center text-[#01377D] shadow-md p-10 m-10 rounded-md bg-white space-y-2">
        <p className="flex items-center justify-center gap-2 text-lg font-semibold">
          <FaClock className="text-[#009DD0]" /> Horarios de atención:
        </p>
        <p>Lunes a sábado: 8:00 AM - 6:00 PM</p>
        <p>Domingos y festivos: Cerrado</p>
      </div>

      {/* Mapa de ubicación */}
      <div className="mt-10 rounded-md overflow-hidden shadow-lg border border-[#98E7F4] p-10 m-10 bg-white">
        <h2 className="text-2xl font-semibold text-[#01377D] mb-4 text-center flex justify-center items-center gap-2">
          <FaMapMarkerAlt className="text-[#009DD0]" />
          Nuestra ubicación
        </h2>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1lkH4KAJEAKDB33LaJVZeUXgZ7ZvJ-ZQ&ehbc=2E312F&noprof=1"
          className="w-full h-[400px] sm:h-[450px] md:h-[500px]"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default ContactPage
