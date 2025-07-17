import { FaWifi, FaRocket, FaHeadset, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from "../img/home.png";

const HomePage = () => {
  return (
    <div className="w-full mx-auto text-gray-800">
      {/* Hero con fondo de imagen */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-[#01377d67] backdrop-blur-md p-8 rounded-md text-black shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AIROS COMUNICACIONES
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Internet rápido, estable y sin complicaciones en tu hogar.
          </p>
          <Link to="/plans">
            <button className="bg-[#01377d] text-white px-6 py-3 rounded-md font-bold hover:bg-[#63a7ff] hover:text-black cursor-pointer transition">
              Solicita tu plan
            </button>
          </Link>
        </div>
      </div>

      {/* Beneficios */}
      <div className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#01377d] mb-12">
          ¿Por qué elegir Airos Comunicaciones?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-md shadow-md bg-white hover:shadow-lg transition">
            <FaWifi className="text-4xl text-[#006eff] mb-3 mx-auto" />
            <h3 className="font-bold text-lg mb-2">Cobertura amplia</h3>
            <p className="text-sm text-gray-600">
              Llegamos a zonas rurales y urbanas donde otros no pueden.
            </p>
          </div>
          <div className="p-6 rounded-md shadow-md bg-white hover:shadow-lg transition">
            <FaRocket className="text-4xl text-[#006eff] mb-3 mx-auto" />
            <h3 className="font-bold text-lg mb-2">Instalación rápida</h3>
            <p className="text-sm text-gray-600">
              Sin complicaciones, nos adaptamos a tu tiempo.
            </p>
          </div>
          <div className="p-6 rounded-md shadow-md bg-white hover:shadow-lg transition">
            <FaHeadset className="text-4xl text-[#006eff] mb-3 mx-auto" />
            <h3 className="font-bold text-lg mb-2">Soporte cercano</h3>
            <p className="text-sm text-gray-600">
              Te acompañamos antes, durante y después de la instalación.
            </p>
          </div>
          <div className="p-6 rounded-md shadow-md bg-white hover:shadow-lg transition">
            <FaWifi className="text-4xl text-[#006eff] mb-3 mx-auto" />
            <h3 className="font-bold text-lg mb-2">Planes accesibles</h3>
            <p className="text-sm text-gray-600">
              Diseñados para ajustarse a tus necesidades y presupuesto.
            </p>
          </div>
        </div>
      </div>

      {/* CTA de contacto */}
      <div className="px-6 pb-20">
        <div className="bg-[#01377d] p-8 rounded-md text-center shadow-md">
          <h3 className="text-2xl font-bold mb-2 text-[#ffffff]">
            ¿Tienes dudas o quieres saber si hay cobertura en tu zona?
          </h3>
          <p className="text-[#d2e5ff] mb-4">
            Escríbenos por WhatsApp y te ayudamos en minutos.
          </p>
          <a
            href="https://wa.me/573234404048"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#006eff] text-white px-6 py-3 rounded-md font-bold hover:bg-[#71aeff] hover:text-black transition"
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
