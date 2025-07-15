import banner from "../img/planes.png";
import { FaWhatsapp } from "react-icons/fa";

const PlansPage = () => {
  return (
    <div className="w-full">
      {/* Hero con fondo de imagen */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center shadow-lg"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="p-8 rounded-xl text-black max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PLANES</h1>
          <p className="text-lg md:text-xl mb-6">
            Conoce nuestras opciones de planes y encuentra el que mejor se adapte a tus necesidades.
          </p>
        </div>
      </div>
      {/* Título principal */}
      <div className="text-center m-10">
        <h2 className="text-4xl font-bold text-[#01377d] mb-3">Conoce nuestros planes</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Ofrecemos planes de internet para todos los hogares, con o sin antena. Elige el que mejor se adapte a ti.
        </p>
      </div>

      {/* Planes con antena */}
      <section>
        <h3 className="text-2xl font-semibold text-[#01377d] mb-6 text-center">
          Planes con antena independiente
        </h3>
        <div className="grid md:grid-cols-2 gap-8 m-10">
          {[
            {
              nombre: "Plan Básico",
              velocidad: "10 Megas",
              precio: "$80.000",
            },
            {
              nombre: "Plan Premium",
              velocidad: "30 Megas",
              precio: "$120.000",
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className="border border-[#98E7F4] p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition"
            >
              <h4 className="text-xl font-bold text-[#01377d]">{plan.nombre}</h4>
              <p className="text-lg text-gray-700">{plan.velocidad}</p>
              <p className="text-2xl font-semibold text-[#009DD0]">{plan.precio}</p>
              <button className="mt-4 bg-[#009DD0] text-white px-6 py-2 rounded-md hover:bg-[#01377d] transition cursor-pointer">
                Solicitar este plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Planes sin antena */}
      <section>
        <h3 className="text-2xl font-semibold text-[#01377d] mb-6 text-center">
          Planes para todos los hogares
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 m-10">
          {[
            { velocidad: "10 Megas", precio: "$55.000" },
            { velocidad: "20 Megas", precio: "$70.000" },
            { velocidad: "50 Megas", precio: "$90.000" },
            { velocidad: "100 Megas", precio: "$140.000" },
          ].map((plan, idx) => (
            <div
              key={idx}
              className="border border-[#98E7F4] p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition"
            >
              <h4 className="text-xl font-bold text-[#01377d]">Plan {plan.velocidad}</h4>
              <p className="text-2xl font-semibold text-[#009DD0]">{plan.precio}</p>
              <button className="mt-4 bg-[#009DD0] text-white px-6 py-2 rounded-md hover:bg-[#01377d] transition cursor-pointer">
                Solicitar este plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Información adicional */}
      <section className="bg-[#98E7F4] p-10 m-10 rounded-md text-center text-gray-800">
        <h3 className="text-xl font-bold text-[#01377d] mb-2">¿Cómo puedo pagar?</h3>
        <p className="mb-2">
          Aceptamos pagos por Nequi y Bancolombia.
          También puedes pagar en efectivo en nuestra oficina.
        </p>
        <p className="mb-4">
          Instalación rápida, sin papeleo, y con soporte técnico incluido.
        </p>
        <a
          href="https://wa.me/573001112233"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#26B170] text-white px-6 py-3 rounded-md inline-flex items-center gap-3 font-semibold hover:bg-[#7FD349] transition"
        >
          <FaWhatsapp className="text-2xl text-white" />
          Escríbenos por WhatsApp
        </a>
      </section>
    </div>
  );
};

export default PlansPage;
