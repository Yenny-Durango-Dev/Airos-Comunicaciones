import React from 'react'

const SpeedTestPage = () => {
  return (
    <div className="min-h-screen bg-[#009DD0] text-white px-6 py-12">
      <div className="max-w-2xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-[#009DD0] mb-6">
          Test de velocidad
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Verifica en tiempo real la velocidad de tu conexión a Internet. Te recomendamos hacerlo con el cable de red conectado directamente al router y sin más dispositivos usando la red.
        </p>

        <div className="flex justify-center">
          <a
            href="https://fast.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#009DD0] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#26B170] transition"
          >
            Iniciar test de velocidad
          </a>
        </div>

        <p className="text-sm text-center mt-6 text-gray-600">
          Si detectas una velocidad baja, no dudes en contactarnos. Estamos aquí para ayudarte.
        </p>
      </div>
    </div>
  )
}

export default SpeedTestPage
