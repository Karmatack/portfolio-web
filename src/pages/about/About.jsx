import React from 'react';
import Biography from './Biography';
import Skills from './Skills';
import Timeline from './Timeline';
import Certifications from './Certifications';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-8 mt-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre mí</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Aquí encontrarás información sobre mi trayectoria, habilidades, y certificaciones.
          </p>
        </header>

        <section>
          <Biography />
        </section>

        <section>
          <Skills />
        </section>

        <section>
          <Timeline />
        </section>

        <section>
          <Certifications />
        </section>
      </div>
    </div>
  );
};

export default About;
