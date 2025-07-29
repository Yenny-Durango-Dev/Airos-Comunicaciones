import React from 'react'
import banner16 from "../img/background16.jpg";
import banner17 from "../img/background17.jpg";
import banner18 from "../img/background18.jpg";
import logo from "../img/logo.png";
import Hero from "../components/Hero"

const SpeedTestPage = () => {
  return (
    <div className="w-full">
      {/* Hero con fondo de imagen */}
      <Hero
        images={[banner16, banner17, banner18]}
        title="¿Tu internet está lento?"
        text="Prueba nuestra herramienta y descubre la velocidad real de tu conexión."
        showLogo={true}
        logo={logo}
      />
      {/* Contenido del test */}
      <div className="max-w-5xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg p-10 m-10">
        <h2 className="text-3xl font-bold text-center text-[#01377d] mb-6">
          Comprueba tu velocidad de conexión
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Antes de realizar el test, asegúrate de estar conectado por cable directamente al router y de cerrar otras aplicaciones o dispositivos que usen Internet.
        </p>

        {/* Test embebido */}
        <div className="w-full h-[500px]">
          <iframe
            title="Speedtest"
            width="100%"
            height="600"
            src="https://openspeedtest.com/speedtest?Run=5"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-sm text-center mt-6 text-gray-600">
          Si los resultados no son los esperados, contáctanos. Te ayudaremos a resolverlo.
        </p>
      </div>
    </div>
  )
}

export default SpeedTestPage
