const AboutUsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
      {/* Título principal */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-darkBlue mb-4">¿Quiénes somos?</h1>
        <p className="text-lg text-gray-700">
          En Airos Comunicaciones conectamos hogares con internet rápido y confiable.
          Somos una empresa comprometida con brindar acceso a internet en zonas rurales y urbanas,
          con atención cercana, precios justos y soporte técnico oportuno.
        </p>
      </div>

      {/* Misión y Visión */}
      <div className="grid md:grid-cols-2 gap-12 text-gray-800">
        <div>
          <h2 className="text-2xl font-semibold text-darkBlue mb-2">Misión</h2>
          <p>
            Proporcionar servicios de internet estables, accesibles y de calidad, mejorando la conectividad
            en comunidades que necesitan una solución confiable para trabajar, estudiar y entretenerse.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-darkBlue mb-2">Visión</h2>
          <p>
            Ser la empresa de telecomunicaciones líder en nuestra región, reconocida por su compromiso,
            innovación y atención al cliente, expandiendo el acceso al internet donde más se necesita.
          </p>
        </div>
      </div>

      {/* Diferenciales */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-darkBlue mb-4">¿Qué nos hace diferentes?</h2>
        <ul className="list-disc list-inside max-w-xl mx-auto text-left text-gray-700 space-y-2">
          <li>Atención personalizada y cercana.</li>
          <li>Soporte técnico rápido y sin rodeos.</li>
          <li>Planes ajustados a tus necesidades y presupuesto.</li>
          <li>Cobertura en zonas donde otros no llegan.</li>
          <li>Instalación ágil y sin complicaciones.</li>
        </ul>
      </div>

      {/* Nuestro equipo */}
      <div>
        <h2 className="text-2xl font-bold text-darkBlue mb-6 text-center">Nuestro equipo</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            { nombre: "David Diosa", rol: "Técnico de instalaciones" },
            { nombre: "Pablo Franco", rol: "Soporte al cliente" },
            { nombre: "Kate Franco", rol: "Administración" },
            { nombre: "Brayan Nidea", rol: "Marketing digital" },
            { nombre: "Franki Franco", rol: "Gestión operativa" },
          ].map((persona, idx) => (
            <div key={idx} className="p-4 border rounded-xl shadow-sm">
              <img
                src={`https://via.placeholder.com/100?text=${persona.nombre.split(" ")[0]}`}
                alt={persona.nombre}
                className="mx-auto rounded-full mb-3"
              />
              <h3 className="font-semibold text-lg">{persona.nombre}</h3>
              <p className="text-sm text-gray-600">{persona.rol}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonios */}
      <div>
        <h2 className="text-2xl font-bold text-darkBlue mb-6 text-center">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              nombre: "Sandra G.",
              mensaje: "Desde que tengo Airos mi internet nunca falla. ¡Recomendadísimos!",
            },
            {
              nombre: "Carlos M.",
              mensaje: "La atención al cliente es excelente. Siempre me responden rápido.",
            },
            {
              nombre: "María E.",
              mensaje: "El internet llegó hasta mi finca donde nadie más ofrecía servicio.",
            },
          ].map((testimonio, idx) => (
            <div key={idx} className="bg-lightBlue p-4 rounded-xl shadow-md text-gray-800">
              <p className="mb-3 italic">"{testimonio.mensaje}"</p>
              <h4 className="font-semibold text-darkBlue">{testimonio.nombre}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
