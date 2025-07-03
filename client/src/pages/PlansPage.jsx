import React from 'react';

const PlansPage = () => {
  return (
    <div className="bg-white py-10 px-4 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-12 text-darkBlue">
        Conoce nuestros planes
      </h1>

      {/* Planes con antena independiente */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-center text-greenMedium mb-8">
          Planes con antena independiente
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-lightBlue rounded-xl p-6 shadow-md hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2 text-darkBlue">Plan Básico</h3>
            <p className="text-lg">10 MEGAS</p>
            <p className="text-xl font-bold text-greenMedium mt-2">$80.000</p>
          </div>
          <div className="bg-strongBlue rounded-xl p-6 shadow-md hover:scale-105 transition text-white">
            <h3 className="text-xl font-bold mb-2">Plan Premium</h3>
            <p className="text-lg">30 MEGAS</p>
            <p className="text-xl font-bold text-limeGreen mt-2">$120.000</p>
          </div>
        </div>
      </section>

      {/* Otros planes */}
      <section>
        <h2 className="text-2xl font-semibold text-center text-darkBlue mb-8">
          Tenemos los mejores planes para ti
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white border border-greenMedium rounded-lg p-5 shadow hover:shadow-xl transition">
            <h3 className="text-lg font-bold text-darkBlue">10 MEGAS</h3>
            <p className="text-limeGreen font-semibold mt-1">$55.000</p>
          </div>
          <div className="bg-white border border-greenMedium rounded-lg p-5 shadow hover:shadow-xl transition">
            <h3 className="text-lg font-bold text-darkBlue">20 MEGAS</h3>
            <p className="text-limeGreen font-semibold mt-1">$70.000</p>
          </div>
          <div className="bg-white border border-greenMedium rounded-lg p-5 shadow hover:shadow-xl transition">
            <h3 className="text-lg font-bold text-darkBlue">50 MEGAS</h3>
            <p className="text-limeGreen font-semibold mt-1">$90.000</p>
          </div>
          <div className="bg-white border border-greenMedium rounded-lg p-5 shadow hover:shadow-xl transition">
            <h3 className="text-lg font-bold text-darkBlue">100 MEGAS</h3>
            <p className="text-limeGreen font-semibold mt-1">$140.000</p>
          </div>
          
          <div className="bg-strongBlue text-white p-4 rounded">
            {/* Fondo azul de la paleta */}
          </div>

          <p className="text-limeGreen">Texto verde limón</p>

        </div>
      </section>
    </div>
  );
};

export default PlansPage;
