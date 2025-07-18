import React from 'react'
import banner from "../img/blog.png"

const BlogPage = () => {
  // Simulación de artículos del blog
  const posts = [
    {
      title: '5 consejos para mejorar tu conexión Wi-Fi',
      date: 'Julio 2025',
      excerpt:
        'Evita interferencias, ubica bien tu router y conoce qué dispositivos pueden estar afectando la velocidad de tu red.',
    },
    {
      title: '¿Qué hacer si no tienes señal?',
      date: 'Junio 2025',
      excerpt:
        'Antes de llamar al soporte, revisa estos pasos simples que pueden ayudarte a recuperar tu conexión en minutos.',
    },
    {
      title: 'Nueva zona de cobertura: Vereda El Bosque',
      date: 'Mayo 2025',
      excerpt:
        '¡Ya llegamos a más hogares! Consulta si tu zona está incluida y conoce cómo solicitar la instalación.',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero con fondo de imagen */}
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-[#009cd072] backdrop-blur-md p-8 rounded-md text-black shadow-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            BLOG
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Conoce nuestros consejos y noticias sobre tecnología y servicios de internet.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto m-10 p-10">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#009DD0]">
          Blog de Airos Comunicaciones
        </h1>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-[#009DD0] mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
