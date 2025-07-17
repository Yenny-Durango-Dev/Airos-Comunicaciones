import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import banner from "../img/cobertura.png";

const barriosNororiental = [
  "Santo Domingo",
  "La Avanzada",
  "Carpinelo",
  "Carambolas",
  "El Pinar",
  "Regalo de Dios",
  "La Esperanza",
  "Manantiales",
  "Kilómetro 7",
  "Kilómetro 8",
  "Piedras Blancas",
  "Pilonas Metro Cable Arví",
  "Altos de Oriente 1 y 2",
  "Portal de Oriente",
];

const barriosBelen = [
  "Guanteros",
  "Aguas Frías Baja",
  "Aguas Frías Alta",
  "La Isla",
  "Potrerito",
];

const CoveragePage = () => {
  return (
    <div className="w-full">
      {/* Hero con fondo de imagen */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-[#7ed3497b] backdrop-blur-md p-8 rounded-md text-black shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            COBERTURA
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Conoce nuestros servicios en diferentes barrios de Medellín.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Zona Nororiental */}
        <div className="shadow-md p-10 rounded-md">
          <h2 className="text-3xl font-bold text-[#7FD349] mb-3 text-center">
            Medellín Zona Nororiental y Vereda Granizal (Bello)
          </h2>
          <p className="mb-2 text-gray-700 font-bold text-2xl">Barrios</p>
          <ul className="text-gray-800 grid md:grid-cols-2 gap-1">
            {barriosNororiental.map((barrio) => (
              <li key={barrio} className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#7FD349]" />
                {barrio}
              </li>
            ))}
          </ul>
        </div>

        {/* Zona Belén */}
        <div className="shadow-md p-10 rounded-md">
          <h2 className="text-3xl font-bold text-[#7FD349] mb-3 text-center">
            Zona Belén
          </h2>
          <p className="mb-2 text-gray-700 font-bold text-2xl">Barrios</p>
          <ul className="text-gray-800 grid md:grid-cols-2 gap-1">
            {barriosBelen.map((barrio) => (
              <li key={barrio} className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#7FD349]" />
                {barrio}
              </li>
            ))}
          </ul>
        </div>

        {/* Mapa */}
        <div>
          <h2 className="text-2xl font-bold text-[#7FD349] mb-4 text-center">
            Zonas en el mapa
          </h2>
          <div className="w-full h-[400px] shadow-lg rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1fxMqMjC8XKPXBqyDEM6crNeflz2Lgr4&ehbc=2E312F&noprof=1"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contacto */}
        <div className="bg-[#7ed34982] p-10 rounded-md text-center text-gray-800 shadow-md">
          <h3 className="text-xl font-bold text-[#307d01] mb-3">¿No ves tu zona?</h3>
          <p className="mb-4">
            Escríbenos y confirma si ya tenemos cobertura en tu sector o si pronto llegaremos.
          </p>
          <a
            href="https://wa.me/573502983203"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7FD349] text-black px-6 py-3 rounded-md inline-flex items-center gap-3 font-semibold hover:bg-[#a7ff70] transition"
          >
            <FaWhatsapp className="text-2xl text-black" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoveragePage;
