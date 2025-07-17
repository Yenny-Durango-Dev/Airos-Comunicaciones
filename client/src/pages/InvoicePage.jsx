import React from 'react'
import banner from "../img/factura.png"

const InvoicePage = () => {
  return (
    <div className="w-full">
      {/* Hero con fondo de imagen */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-[#26b17081] backdrop-blur-md p-8 rounded-md text-black shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            FACTURA
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Aquí puedes encontrar la información de tu factura.
          </p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg p-10 m-10">
        <h1 className="text-3xl font-bold text-center text-[#26B170] mb-6">
          Consulta tu factura
        </h1>

        {/* Formulario */}
        <form className="space-y-4 m-5 p-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Número de contrato o cédula
            </label>
            <input
              type="text"
              placeholder="Ej: 123456789"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#26B170]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#26B170] text-white py-2 px-4 rounded-md hover:bg-[#387e5c] hover:text-white transition cursor-pointer font-bold"
          >
            Consultar factura
          </button>
        </form>

        {/* Información adicional */}
        <p className="text-center text-sm mt-6 text-gray-600">
          Por ahora, las facturas se consultan directamente con nuestros asesores.
          Puedes escribirnos por WhatsApp para recibir tu factura al instante.
        </p>

        {/* Botón de WhatsApp */}
        <div className="flex justify-center mt-6">
          <a
            href="https://wa.me/573001112233"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#26B170] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#387e5c] transition"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default InvoicePage
