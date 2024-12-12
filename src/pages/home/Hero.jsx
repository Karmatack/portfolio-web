import React from 'react';

function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${require('../../assets/images/backgrounds/home-background.webp')})`,
      }}
    >
      {/* Capa de superposición para contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido */}
      <div className="relative text-center z-10 text-white">
        <h1 className="text-5xl font-bold mb-4">
          ¡Bienvenido a Mi Portafolio!
        </h1>
        <p className="text-xl mb-8">
          Descubre mis proyectos, habilidades y experiencia profesional.
        </p>
      </div>
    </section>
  );
}

export default Hero;
