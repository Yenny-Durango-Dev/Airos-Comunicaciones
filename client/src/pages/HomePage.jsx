const HomePage = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-center">
      {/* Hero principal */}
      <h1 className="text-4xl md:text-5xl font-bold text-darkBlue mb-4">
        AIROS COMUNICACIONES
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        Internet rápido, estable y sin complicaciones en tu hogar.
      </p>
      <button className="bg-strongBlue text-white px-6 py-3 rounded-2xl font-semibold hover:bg-darkBlue transition">
        Solicita tu plan
      </button>

      {/* Beneficios / CTA */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-darkBlue mb-4">
          ¿Por qué elegir Airos Comunicaciones?
        </h2>
        <ul className="text-left md:text-center text-gray-800 list-disc list-inside space-y-2 max-w-md mx-auto">
          <li>Planes accesibles según tus necesidades.</li>
          <li>Instalación rápida y soporte cercano.</li>
          <li>Amplia cobertura en zonas rurales y urbanas.</li>
          <li>Conexión estable para estudiar, trabajar o disfrutar en casa.</li>
        </ul>
      </div>

      {/* Sección final: contacto rápido */}
      <div className="mt-16 bg-lightBlue p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-2 text-darkBlue">
          ¿Tienes dudas o quieres saber si hay cobertura en tu zona?
        </h3>
        <p className="text-gray-700 mb-4">
          Escríbenos por WhatsApp y te ayudamos en minutos.
        </p>
        <a
          href="https://wa.me/573001112223" // reemplaza por tu número real
          target="_blank"
          rel="noopener noreferrer"
          className="bg-greenMedium text-white px-6 py-3 rounded-2xl inline-block font-semibold hover:bg-limeGreen transition"
        >
          Habla con un asesor
        </a>
      </div>
    </div>
  );
};

export default HomePage;
