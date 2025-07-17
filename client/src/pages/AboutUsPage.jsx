import mujer1 from "../img/mujer1.png";
import mujer2 from "../img/mujer2.png";
import hombre1 from "../img/hombre1.png";
import hombre2 from "../img/hombre2.png";
import hombre3 from "../img/hombre3.png";
import banner from "../img/quienessomos.png";

const AboutUsPage = () => {
  return (
    <div className="w-full">
      
      {/* Hero con fondo de imagen */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center shadow-lg overflow-hidden"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-[#01377dbd] p-8 rounded-md text-white max-w-2xl backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">¿QUIÉNES SOMOS?</h1>
          <p className="text-lg md:text-xl">
            Conoce nuestro equipo capacitado para brindarte la mejor atención y servicio.
          </p>
        </div>
      </div>

      {/* Historia */}
      <section className="bg-white p-10 m-10 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#01377d]">Nuestra Historia</h2>
        <p className="leading-relaxed text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe, error reiciendis laudantium veniam illum odio non quos dolor, ab at tempore rerum...
        </p>
      </section>

      {/* Misión y Visión */}
      <section className="grid md:grid-cols-2 gap-10 m-10 p-10">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-[#01377d] mb-4">Misión</h3>
          <p>
            Proporcionar servicios de internet estables, accesibles y de calidad, mejorando la conectividad en comunidades que necesitan una solución confiable para trabajar, estudiar y entretenerse.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-[#01377d] mb-4">Visión</h3>
          <p>
            Ser la empresa de telecomunicaciones líder en nuestra región, reconocida por su compromiso, innovación y atención al cliente, expandiendo el acceso al internet donde más se necesita.
          </p>
        </div>
      </section>

      {/* Diferenciales */}
      <section className="text-center m-10 p-10">
        <h2 className="text-2xl font-bold text-[#01377d] mb-6">¿Qué nos hace diferentes?</h2>
        <ul className="list-disc list-inside max-w-2xl mx-auto text-left space-y-3">
          <li>Atención personalizada y cercana.</li>
          <li>Soporte técnico rápido y sin rodeos.</li>
          <li>Planes ajustados a tus necesidades y presupuesto.</li>
          <li>Cobertura en zonas donde otros no llegan.</li>
          <li>Instalación ágil y sin complicaciones.</li>
        </ul>
      </section>

      {/* Nuestro equipo */}
      <section className="bg-[#F9FAFB] py-16 px-4 rounded-xl">
        <h2 className="text-3xl font-bold text-[#01377d] text-center mb-12">Nuestro equipo</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { nombre: "David Diosa", rol: "Técnico de instalaciones", imagen: hombre1 },
            { nombre: "Katerine Franco", rol: "Administración", imagen: mujer1 },
            { nombre: "Pablo Franco", rol: "Tecnico de instalaciones", imagen: hombre2 },
            { nombre: "Brayan Nidea", rol: "Tecnico de instalaciones", imagen: hombre3 },
            { nombre: "Cristina Nose", rol: "Soporte al cliente", imagen: mujer2 },
            { nombre: "Yenny Durango", rol: "Desarrolladora de software", imagen: mujer2 },
          ].map((persona, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#98E7F4] rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition"
            >
              <img
                src={persona.imagen}
                alt={persona.nombre}
                className="w-24 h-24 object-cover rounded-full border-4 border-[#009DD0] mb-4"
              />
              <h3 className="text-lg font-semibold text-[#01377d]">{persona.nombre}</h3>
              <p className="text-sm text-[#26B170]">{persona.rol}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="p-10 m-10">
        <h2 className="text-2xl font-bold text-[#01377d] text-center mb-8">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { nombre: "Sandra G.", mensaje: "Desde que tengo Airos mi internet nunca falla. ¡Recomendadísimos!" },
            { nombre: "Carlos M.", mensaje: "La atención al cliente es excelente. Siempre me responden rápido." },
            { nombre: "María E.", mensaje: "El internet llegó hasta mi finca donde nadie más ofrecía servicio." },
          ].map((testimonio, idx) => (
            <div key={idx} className="bg-[#98E7F4] p-6 rounded-xl shadow-md text-gray-800">
              <p className="mb-3 italic">"{testimonio.mensaje}"</p>
              <h4 className="font-semibold text-[#01377d]">{testimonio.nombre}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
