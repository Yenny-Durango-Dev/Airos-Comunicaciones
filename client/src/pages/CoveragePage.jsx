const CoveragePage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <h1 className="text-4xl font-bold text-darkBlue text-center">
        Zonas donde tenemos cobertura
      </h1>

      {/* Cobertura Nororiental */}
      <div>
        <h2 className="text-2xl font-semibold text-darkBlue mb-2">Medellín Zona Nororiental y Vereda Granizal (Bello)</h2>
        <p className="mb-1 text-gray-700">Barrios:</p>
        <ul className="list-disc list-inside text-gray-800 grid md:grid-cols-2 gap-2">
          <li>Santo Domingo</li>
          <li>La Avanzada</li>
          <li>Carpinelo</li>
          <li>Carambolas</li>
          <li>El Pinar</li>
          <li>Regalo de Dios</li>
          <li>La Esperanza</li>
          <li>Manantiales</li>
          <li>Kilómetro 7</li>
          <li>Kilómetro 8</li>
          <li>Piedras Blancas</li>
          <li>Pilonas Metro Cable Arví</li>
          <li>Altos de Oriente 1 y 2</li>
          <li>Portal de Oriente</li>
        </ul>
      </div>

      {/* Cobertura Belén */}
      <div>
        <h2 className="text-2xl font-semibold text-darkBlue mb-2">Zona Belén</h2>
        <p className="mb-1 text-gray-700">Barrios:</p>
        <ul className="list-disc list-inside text-gray-800 grid md:grid-cols-2 gap-2">
          <li>Guanteros</li>
          <li>Aguas Frías Baja</li>
          <li>Aguas Frías Alta</li>
          <li>La Isla</li>
          <li>Potrerito</li>
        </ul>
      </div>

      {/* Mapa */}
      <div>
        <h2 className="text-2xl font-bold text-darkBlue mb-4 text-center">Zonas en el mapa</h2>
        <div className="w-full h-[400px]">
          <iframe
            title="Mapa Cobertura Airos"
            src="https://www.google.com/maps/d/u/0/edit?mid=1fxMqMjC8XKPXBqyDEM6crNeflz2Lgr4&usp=sharing" // cambia por tu link
            width="100%"
            height="100%"
            className="rounded-xl shadow-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CoveragePage;
