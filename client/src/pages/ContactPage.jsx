import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import banner22 from "../img/background22.jpg";
import banner23 from "../img/background23.jpg";
import banner24 from "../img/background24.jpg";
import logo from "../img/logo.png";
import Hero from "../components/Hero"

const ContactPage = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `Hola, soy *${nombre}* (${email}) y quiero decir lo siguiente:\n\n${mensaje}`;
    const url = `https://wa.me/573502983203?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  }
  return (
    <div className="w-full">
      {/* Hero con fondo de imagen */}
      <Hero
        images={[banner22, banner23, banner24]}
        title="Ponte en contacto con nosotros"
        text="Escríbenos por formulario, WhatsApp, teléfono o correo. También puedes consultar nuestros horarios y ubicación."
        showLogo={true}
        logo={logo}
      />
      {/* Contenido centrado */}
      <div className="w-full max-w-4xl mx-auto">
        {/* Formulario */}
        <div className="p-5 m-5 bg-[#F0FAFC] rounded-lg shadow-md w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-xl w-full max-w-xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-bold text-center text-[#14b1c9]">Formulario de Contacto</h2>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="nombre" className="text-sm font-medium text-gray-700">Nombre</label>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#98E7F4] transition duration-200"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Correo electrónico</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tucorreo@ejemplo.com"
                className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#98E7F4] transition duration-200"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="mensaje" className="text-sm font-medium text-gray-700">Mensaje</label>
              <textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribe tu mensaje aquí..."
                className="border border-gray-300 rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#98E7F4] transition duration-200"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#14b1c9] text-white px-6 py-3 w-full rounded-md font-semibold hover:bg-[#0f9dae] transition duration-300"
            >
              Enviar por WhatsApp
            </button>
          </form>
        </div>

        {/* Separador */}
        <hr className="border-t border-[#98E7F4] my-10 mx-auto w-1/2" />

        {/* Información de contacto */}
        <div className="text-center text-[#14b1c9] shadow-md m-10 p-10 rounded-md bg-white space-y-3">
          <p className="flex items-center justify-center gap-2 text-lg">
            <FaPhoneAlt className="text-[#14b1c9]" /> <strong>Teléfono:</strong> 3502983203 -  3506080789
          </p>
          <p className="flex items-center justify-center gap-2 text-lg">
            <FaWhatsapp className="text-[#14b1c9]" />
            <strong>WhatsApp:</strong>{" "}
            <a href="https://wa.me/573502983203" className="text-[#00b7d3] underline">Escríbenos aquí</a>
          </p>
          <p className="flex items-center justify-center gap-2 text-lg">
            <FaEnvelope className="text-[#14b1c9]" /> <strong>Correo:</strong> maxiwifi2019@gmail.com
          </p>
        </div>

        {/* Horarios */}
        <div className="text-center text-[#14b1c9] shadow-md p-10 m-10 rounded-md bg-white space-y-2">
          <p className="flex items-center justify-center gap-2 text-lg font-semibold">
            <FaClock className="text-[#14b1c9]" /> Horarios de atención:
          </p>
          <p>Lunes a viernes: 8:00 AM - 6:00 PM</p>
          <p>Sabados: 8:00 AM - 2:00 PM</p>
          <p>Domingos y lunes festivos: Cerrado</p>
        </div>

        {/* Mapa */}
        <div className="mt-10 rounded-md overflow-hidden shadow-lg border border-[#98E7F4] p-10 m-10 bg-white">
          <h2 className="text-2xl font-semibold text-[#14b1c9] mb-4 text-center flex justify-center items-center gap-2">
            <FaMapMarkerAlt className="text-[#14b1c9]" />
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
    </div>
  )
}

export default ContactPage
