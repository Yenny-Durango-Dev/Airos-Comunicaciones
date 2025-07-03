import React from 'react';
import { Link } from 'react-router-dom';

const CoveragePage = () => {
  return (
    <div className="bg-white text-gray-900 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Conoce nuestras zonas de cobertura
      </h1>

      <p className="text-center max-w-3xl mx-auto mb-10 text-gray-700">
        En Airos Comunicaciones llevamos internet de calidad a zonas donde otras empresas no llegan. Gracias a nuestra tecnología inalámbrica y fibra óptica, conectamos hogares y negocios en áreas urbanas, rurales y de difícil acceso.
      </p>

      {/* Zonas con cobertura */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Zonas de cobertura actual:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          <div>
            <h3 className="font-bold mb-2">📍 Medellín</h3>
            <ul className="list-disc list-inside">
              <li>Manrique</li>
              <li>Aranjuez</li>
              <li>Popular</li>
              <li>Santo Domingo</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">📍 Bello</h3>
            <ul className="list-disc list-inside">
              <li>Niquía</li>
              <li>París</li>
              <li>El Trapiche</li>
              <li>Zamora</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">📍 Copacabana</h3>
            <ul className="list-disc list-inside">
              <li>Machado</li>
              <li>La Misericordia</li>
              <li>El Noral</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">📍 Girardota y Barbosa</h3>
            <ul className="list-disc list-inside">
              <li>Zona urbana</li>
              <li>Vereda El Totumo</li>
              <li>La Palma</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contacto si no aparece su zona */}
      <div className="text-white p-6 rounded-xl shadow-md text-center max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2">¿No ves tu zona en la lista?</h3>
        <p>
          Escríbenos por <a href="https://wa.me/573001112233" className="underline font-medium">WhatsApp</a> o visita nuestra <Link to="/contact" className="underline font-medium">página de contacto</Link> y te confirmamos si podemos instalar en tu ubicación.
        </p>
      </div>
    </div>
  );
};

export default CoveragePage;


