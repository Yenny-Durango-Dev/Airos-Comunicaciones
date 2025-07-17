import React from 'react'

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
    <div className="min-h-screen bg-[#7FD349] px-6 py-12 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#01377D]">
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
