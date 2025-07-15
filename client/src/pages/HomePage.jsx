import { FaWifi, FaRocket, FaHeadset, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from "../img/banner.png";

const HomePage = () => {
  return (
    <div className="w-full mx-auto">
      {/* Hero con fondo de imagen */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-[#26b17028] bg-opacity-60 p-8 rounded-md text-black">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AIROS COMUNICACIONES
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Internet rápido, estable y sin complicaciones en tu hogar.
          </p>
          <Link to="/plans">
            <button className="bg-[#26B170] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#7FD349] transition cursor-pointer">
              Solicita tu plan
            </button>
          </Link>
        </div>
      </div>

      {/* Beneficios */}
      <div className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#01377d] mb-8">
          ¿Por qué elegir Airos Comunicaciones?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-gray-800">
            <FaWifi className="text-4xl text-[#009DD0] mb-2" />
            <h3 className="font-semibold text-lg mb-1">Cobertura amplia</h3>
            <p className="text-sm text-gray-600 text-center">
              Llegamos a zonas rurales y urbanas donde otros no pueden.
            </p>
          </div>
          <div className="flex flex-col items-center text-gray-800">
            <FaRocket className="text-4xl text-[#98E7F4] mb-2" />
            <h3 className="font-semibold text-lg mb-1">Instalación rápida</h3>
            <p className="text-sm text-gray-600 text-center">
              Sin complicaciones, nos adaptamos a tu tiempo.
            </p>
          </div>
          <div className="flex flex-col items-center text-gray-800">
            <FaHeadset className="text-4xl text-[#7FD349] mb-2" />
            <h3 className="font-semibold text-lg mb-1">Soporte cercano</h3>
            <p className="text-sm text-gray-600 text-center">
              Te acompañamos antes, durante y después de la instalación.
            </p>
          </div>
          <div className="flex flex-col items-center text-gray-800">
            <FaWifi className="text-4xl text-[#26B170] mb-2" />
            <h3 className="font-semibold text-lg mb-1">Planes accesibles</h3>
            <p className="text-sm text-gray-600 text-center">
              Diseñados para ajustarse a tus necesidades y presupuesto.
            </p>
          </div>
        </div>
      </div>

      {/* CTA de contacto */}
      <div className="px-6 pb-20">
        <div className="bg-lightBlue p-8 rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-2 text-[#01377d]">
            ¿Tienes dudas o quieres saber si hay cobertura en tu zona?
          </h3>
          <p className="text-gray-700 mb-4">
            Escríbenos por WhatsApp y te ayudamos en minutos.
          </p>
          <a
            href="https://wa.me/573234404048"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#7FD349] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#b9ff8d] transition"
          >

            <FaWhatsapp className="text-xl" />
            Habla con un asesor
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
