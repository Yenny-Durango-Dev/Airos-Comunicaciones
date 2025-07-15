import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png"; // ✅ Ruta relativa al archivo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Airos Logo" className="h-10" />
          {/* Si quieres texto al lado: */}
          {/* <span className="text-xl font-bold">Airos</span> */}
        </Link>

        {/* Menú desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-[#7FD349] transition">Inicio</Link></li>
          <li><Link to="/about-us" className="hover:text-[#7FD349] transition">Quiénes somos</Link></li>
          <li><Link to="/plans" className="hover:text-[#7FD349] transition">Planes</Link></li>
          <li><Link to="/coverage" className="hover:text-[#7FD349] transition">Cobertura</Link></li>
          <li><Link to="/invoice" className="hover:text-[#7FD349] transition">Factura</Link></li>
          <li><Link to="/speed-test" className="hover:text-[#7FD349] transition">Test de velocidad</Link></li>
          <li><Link to="/blog" className="hover:text-[#7FD349] transition">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-[#7FD349] transition">Contacto</Link></li>
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-[#7FD349] text-2xl focus:outline-none transition-transform duration-300 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 text-white animate-fade-in-down">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li className="hover:text-[#7FD349]"><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
            <hr className="text-[#01377d]" />
            <li className="hover:text-[#7FD349]"><Link to="/about-us" onClick={toggleMenu}>Quiénes somos</Link></li>
            <hr className="text-[#009DD0]" />
            <li className="hover:text-[#7FD349]"><Link to="/plans" onClick={toggleMenu}>Planes</Link></li>
            <hr className="text-[#98E7F4]" />
            <li className="hover:text-[#7FD349]"><Link to="/coverage" onClick={toggleMenu}>Cobertura</Link></li>
            <hr className="text-[#7FD349]" />
            <li className="hover:text-[#7FD349]"><Link to="/invoice" onClick={toggleMenu}>Factura</Link></li>
            <hr className="text-[#26B170]" />
            <li className="hover:text-[#7FD349]"><Link to="/speed-test" onClick={toggleMenu}>Test de velocidad</Link></li>
            <hr className="text-[#01377d]" />
            <li className="hover:text-[#7FD349]"><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
            <hr className="text-[#009DD0]" />
            <li className="hover:text-[#7FD349]"><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
