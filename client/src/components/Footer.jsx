import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y nombre */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Airos Comunicaciones</h1>
          <p className="text-sm">Conectando personas desde 2025.</p>
        </div>

        {/* Redes Sociales */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Redes Sociales</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
            <li><a href="#" className="hover:text-pink-400">Instagram</a></li>
            <li><a href="#" className="hover:text-sky-400">Twitter/X</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contacto</h2>
          <ul className="space-y-1">
            <li><a href="mailto:correo@airos.com" className="hover:text-green-400">Correo</a></li>
            <li><a href="https://wa.me/123456789" className="hover:text-green-400">WhatsApp</a></li>
            <li><a href="#" className="hover:text-green-400">Dirección</a></li>
          </ul>
        </div>
      </div>

      {/* Línea divisora */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        <p>Política de privacidad</p>
        <p>&copy; 2025 Airos Comunicaciones. Todos los derechos reservados.</p>
        <p>Desarrollado con 💻 por Yenny</p>
      </div>
    </footer>
  );
}

export default Footer;
