import React from 'react';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción breve del proyecto 1.',
    image: require('../../assets/images/backgrounds/home-background.webp'),
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2.',
    image: require('../../assets/images/backgrounds/home-background.webp'),
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción breve del proyecto 3.',
    image: require('../../assets/images/backgrounds/home-background.webp'),
  },
  {
    title: 'Proyecto 4',
    description: 'Descripción breve del proyecto 4.',
    image: require('../../assets/images/backgrounds/home-background.webp'),
  },
  {
    title: 'Proyecto 5',
    description: 'Descripción breve del proyecto 5.',
    image: require('../../assets/images/backgrounds/home-background.webp'),
  },
  {
    title: 'Proyecto 6',
    description: 'Descripción breve del proyecto 6.',
    image: require('../../assets/images/backgrounds/home-background.webp'),
  },
];

function FeaturedProjects() {
  return (
    <section className="py-16 bg-gray-100">
      <header className="max-w-screen-xl mx-auto px-6 text-center mb-8">
        <h2 className="text-4xl font-bold">Proyectos Destacados</h2>
        <p className="text-lg text-gray-600">
          Algunos de los trabajos más recientes que he realizado.
        </p>
      </header>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-6">
        {projects.map((project, index) => (
          <li
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-2"
          >
            <figure>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <figcaption className="sr-only">{project.title}</figcaption>
            </figure>
            <article className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <footer className="mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Ver Más
                </button>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FeaturedProjects;
