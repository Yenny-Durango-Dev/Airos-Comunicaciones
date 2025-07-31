import { FaWifi, FaRocket, FaHeadset, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner1 from "../img/background1.jpg";
import banner2 from "../img/background2.jpg";
import banner3 from "../img/background3.jpg";
import logo from "../img/logo.png";
import Hero from "../components/Hero"

const HomePage = () => {
  return (
    <div className="w-full mx-auto text-gray-800">
      {/* Hero con fondo de imagen */}
      <Hero
        images={[banner1, banner2, banner3]}
        title={"Internet confiable para todos los hogares"}
        text="Conexión estable, planes accesibles y atención cercana.¡Descubre por qué cada vez más personas nos eligen!"
        buttonText="Solicita tu plan"
        buttonLink="/plans" 
        showLogo={true}
        logo={logo}
      />
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
            href="https://wa.me/573502983203?text=Hola%2C%20quiero%20saber%20si%20hay%20cobertura%20en%20mi%20zona.%20¿Me%20puedes%20ayudar%3F"
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
