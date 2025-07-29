import React from 'react'
import banner from "../img/blog.png"
import banner19 from "../img/background19.jpg";
import banner20 from "../img/background20.jpg";
import banner21 from "../img/background21.jpg";
import logo from "../img/logo.png";
import Hero from "../components/Hero"

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
      <Hero
        images={[banner19, banner20, banner21]}
        title="Explora nuestro blog"
        text="Encuentra consejos, noticias, tutoriales, alertas y más contenido útil para estar siempre conectado."
        showLogo={true}
        logo={logo}
      />
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
