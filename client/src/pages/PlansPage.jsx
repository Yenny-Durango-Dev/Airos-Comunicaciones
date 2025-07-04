const PlansPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Título principal */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-darkBlue mb-2">Conoce nuestros planes</h1>
        <p className="text-lg text-gray-700">
          Ofrecemos planes de internet para todos los hogares, con o sin antena. Elige el que mejor se adapte a ti.
        </p>
      </div>

      {/* Planes con antena */}
      <section>
        <h2 className="text-2xl font-semibold text-darkBlue mb-6 text-center">
          Planes con antena independiente
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
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
            <div key={idx} className="border p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold text-darkBlue">{plan.nombre}</h3>
              <p className="text-lg text-gray-700">{plan.velocidad}</p>
              <p className="text-xl font-semibold text-strongBlue">{plan.precio}</p>
              <button className="mt-4 bg-strongBlue text-white px-6 py-2 rounded-2xl hover:bg-darkBlue transition">
                Solicitar este plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Planes comunes (sin antena o estándar) */}
      <section>
        <h2 className="text-2xl font-semibold text-darkBlue mb-6 text-center">
          Planes para todos los hogares
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { velocidad: "10 Megas", precio: "$55.000" },
            { velocidad: "20 Megas", precio: "$70.000" },
            { velocidad: "50 Megas", precio: "$90.000" },
            { velocidad: "100 Megas", precio: "$140.000" },
          ].map((plan, idx) => (
            <div key={idx} className="border p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-bold text-darkBlue">Plan {plan.velocidad}</h3>
              <p className="text-xl text-strongBlue">{plan.precio}</p>
              <button className="mt-4 bg-strongBlue text-white px-6 py-2 rounded-2xl hover:bg-darkBlue transition">
                Solicitar este plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Información adicional */}
      <section className="bg-lightBlue p-6 rounded-xl text-center text-gray-800">
        <h3 className="text-xl font-bold text-darkBlue mb-2">¿Cómo puedo pagar?</h3>
        <p className="mb-2">
          Aceptamos pagos por Nequi, Bancolombia, Efecty y transferencia directa. 
          También puedes pagar en efectivo en nuestra oficina o al técnico en la instalación.
        </p>
        <p className="mb-4">
          Instalación rápida, sin papeleo, y con soporte técnico incluido.
        </p>
        <a
          href="https://wa.me/573001112233" // cámbialo por el WhatsApp real
          target="_blank"
          rel="noopener noreferrer"
          className="bg-greenMedium text-white px-6 py-3 rounded-2xl inline-block font-semibold hover:bg-limeGreen transition"
        >
          Escríbenos por WhatsApp
        </a>
      </section>
    </div>
  );
};

export default PlansPage;
