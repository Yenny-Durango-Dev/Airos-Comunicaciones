import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/Logo.png"; // ✅ Ruta relativa al archivo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Airos Logo" className="h-10" />
          {/* Si quieres texto al lado: */}
          {/* <span className="text-xl font-bold">Airos</span> */}
        </Link>

        {/* Menú desktop */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-airosBlue transition">Inicio</Link></li>
          <li><Link to="/about-us" className="hover:text-airosBlue transition">Quiénes somos</Link></li>
          <li><Link to="/plans" className="hover:text-airosBlue transition">Planes</Link></li>
          <li><Link to="/coverage" className="hover:text-airosBlue transition">Cobertura</Link></li>
          <li><Link to="/invoice" className="hover:text-airosBlue transition">Factura</Link></li>
          <li><Link to="/speed-test" className="hover:text-airosBlue transition">Test de velocidad</Link></li>
          <li><Link to="/blog" className="hover:text-airosBlue transition">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-airosBlue transition">Contacto</Link></li>
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-black text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 px-4 pb-4 text-black">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
            <li><Link to="/about-us" onClick={toggleMenu}>Quiénes somos</Link></li>
            <li><Link to="/plans" onClick={toggleMenu}>Planes</Link></li>
            <li><Link to="/coverage" onClick={toggleMenu}>Cobertura</Link></li>
            <li><Link to="/invoice" onClick={toggleMenu}>Factura</Link></li>
            <li><Link to="/speed-test" onClick={toggleMenu}>Test de velocidad</Link></li>
            <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
