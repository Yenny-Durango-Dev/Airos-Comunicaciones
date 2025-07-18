import React from 'react'
import banner from "../img/test-velocidad.png"

const SpeedTestPage = () => {
  return (
    <div className="w-full">
      {/* Hero con fondo de imagen */}
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-[#01377d6e] backdrop-blur-md p-8 rounded-md text-white shadow-lg max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Tu Internet está lento?
          </h1>
          <p className="text-lg md:text-xl">
            Realiza aquí una prueba rápida de velocidad y conoce el rendimiento real de tu conexión.
          </p>
        </div>
      </div>

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
