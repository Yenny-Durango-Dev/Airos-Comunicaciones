import banner from "../img/planes.png";
import { FaWhatsapp } from "react-icons/fa";
import banner7 from "../img/background7.jpg";
import banner8 from "../img/background8.jpg";
import banner9 from "../img/background9.jpg";
import logo from "../img/logo.png";
import Hero from "../components/Hero"

const PlansPage = () => {
  return (
    <div className="w-full">
      {/* Hero con fondo de imagen */}
      <Hero
        images={[banner7, banner8, banner9]}
        title="Planes de internet para todos"
        text="Con antena independiente y formas de pago fáciles para cada hogar."
        showLogo={true}
        logo={logo}
      />
      {/* Título principal */}
      <div className="text-center m-10">
        <h2 className="text-4xl font-bold text-[#48d0e5] mb-3">Conoce nuestros planes</h2>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Ofrecemos planes de internet para todos los hogares, con o sin antena. Elige el que mejor se adapte a ti.
        </p>
      </div>

      {/* Planes con antena */}
      <section>
        <h3 className="text-2xl font-bold text-[#48d0e5] mb-6 text-center">
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
          ].map((plan, idx) => {
            const mensaje = `Hola, me interesa el ${plan.nombre} de ${plan.velocidad} por ${plan.precio}`;
            const formURL = `/plans-form?plan=${encodeURIComponent(plan.nombre)} - ${plan.velocidad} - ${plan.precio}`;
            return (
              <div
                key={idx}
                className="border border-[#98E7F4] p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition bg-white"
              >
                <h4 className="text-2xl font-bold text-[#00bfdc]">{plan.nombre}</h4>
                <p className="text-2xl text-gray-500 font-bold">{plan.velocidad}</p>
                <p className="text-2xl font-bold text-[#000000]">{plan.precio}</p>
                <a
                  href={formURL}
                  className="mt-4 bg-[#00ddff] text-black px-6 py-2 rounded-md hover:bg-[#98E7F4] transition cursor-pointer font-semibold inline-block"
                >
                  Solicitar este plan
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Planes sin antena */}
      <section>
        <h3 className="text-2xl font-bold text-[#48d0e5] mb-6 text-center">
          Planes para todos los hogares
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 m-10">
          {[
            { velocidad: "10 Megas", precio: "$55.000" },
            { velocidad: "20 Megas", precio: "$70.000" },
            { velocidad: "50 Megas", precio: "$90.000" },
            { velocidad: "100 Megas", precio: "$140.000" },
          ].map((plan, idx) => {
            const mensaje = `Hola, me interesa el plan de ${plan.velocidad} por ${plan.precio}`;
            const formURL = `/plans-form?plan=${plan.velocidad} - ${plan.precio}`;

            return (
              <div
                key={idx}
                className="border border-[#98E7F4] p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition bg-white"
              >
                <h4 className="text-2xl font-bold text-[#00bfdc]">Plan {plan.velocidad}</h4>
                <p className="text-2xl font-bold text-gray-500">{plan.precio}</p>
                <a
                  href={formURL}
                  className="mt-4 bg-[#00ddff] text-black px-6 py-2 rounded-md hover:bg-[#98E7F4] transition cursor-pointer font-semibold inline-block"
                >
                  Solicitar este plan
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Información adicional */}
      <section className="bg-[#98e8f47a] p-10 m-10 rounded-md text-center text-gray-800 shadow-md">
        <h3 className="text-xl font-bold text-[#019db5] mb-2">¿Cómo puedo pagar?</h3>
        <p className="mb-2">
          Aceptamos pagos por Nequi y Bancolombia. También puedes pagar en efectivo en nuestra oficina.
        </p>
        <p className="mb-4">
          Instalación rápida, sin papeleo, y con soporte técnico incluido.
        </p>
        <a
          href="https://wa.me/573502983203"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#98E7F4] text-black px-6 py-3 rounded-md inline-flex items-center gap-3 font-bold hover:bg-[#73ecff] transition"
        >
          <FaWhatsapp className="text-2xl text-black" />
          Escríbenos por WhatsApp
        </a>
      </section>
    </div>
  );
};

export default PlansPage;
