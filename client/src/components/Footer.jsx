import React from 'react';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#01377d] text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo y descripción */}
        <div>
          <h1 className="text-3xl font-bold mb-4 text-[#98E7F4]">Airos Comunicaciones</h1>
          <p className="text-sm text-[#98E7F4]">Conectando personas desde 2025.</p>
        </div>

        {/* Redes Sociales */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#7FD349]">Síguenos</h2>
          <ul className="space-y-3 text-white">
            <li className="flex items-center gap-2 hover:text-[#009DD0] transition">
              <Facebook size={18} /> <a href="#">Facebook</a>
            </li>
            <li className="flex items-center gap-2 hover:text-pink-400 transition">
              <Instagram size={18} /> <a href="#">Instagram</a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#98E7F4] transition">
              <Twitter size={18} /> <a href="#">Twitter / X</a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#26B170]">Contacto</h2>
          <ul className="space-y-3 text-white">
            <li className="flex items-center gap-2 hover:text-[#7FD349] transition">
              <Mail size={18} /> <a href="mailto:correo@airos.com">correo@airos.com</a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#7FD349] transition">
              <Phone size={18} /> <a href="https://wa.me/123456789">WhatsApp</a>
            </li>
            <li className="flex items-center gap-2 hover:text-[#7FD349] transition">
              <MapPin size={18} /> <a href="#">Dirección</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-[#009DD0] mt-10 pt-6 text-center text-sm text-[#98E7F4]">
        <p className="mb-1 hover:text-[#7FD349] cursor-pointer transition">Política de privacidad</p>
        <p>&copy; 2025 Airos Comunicaciones. Todos los derechos reservados.</p>
        <p className="text-[#26B170] mt-1">Desarrollado con 💻 por Yenny</p>
      </div>
    </footer>
  );
}

export default Footer;
