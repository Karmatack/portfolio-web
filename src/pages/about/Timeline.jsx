import React from 'react';

const experiences = [
  { year: '2023', title: 'Proyecto X', description: 'Desarrollé una aplicación React para gestión de inventarios.' },
  { year: '2022', title: 'Internship en Data Science', description: 'Trabajé con Python y Power BI para análisis de datos.' },
];

const Timeline = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">Experiencia Profesional</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between">
            <span className="font-bold text-lg">{exp.year}</span>
            <div className="mt-2 md:mt-0">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
