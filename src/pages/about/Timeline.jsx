import React, { useState } from 'react';
import fravaExperience from '../../assets/images/certificados/PasantiaFrava320h.webp';

import Modal from '../../components/common/ModalImage';

const experiences = [
  {
    year: '2024',
    title: 'Pasante en Ingeniería de Sistemas Computacionales',
    company: 'Grupo Frava',
    location: 'Lima, Perú - En remoto',
    duration: 'Ago 2024 - Nov 2024 · 4 meses',
    description: [
      'Diseño y desarrollo del sitio web corporativo, asegurando que cumpliera con los objetivos comerciales y necesidades funcionales de la empresa.',
      'Resolución de incidencias de hardware y software, proporcionando soporte técnico eficiente a nivel organizacional.',
      'Apoyo en proyectos de implementación de sistemas, contribuyendo a la integración y optimización de procesos tecnológicos.',
      'Elaboración de documentación técnica y guías de usuario para facilitar la adopción y el uso eficiente de los sistemas implementados.',
      'Coordinación de equipos de pasantes, fomentando un ambiente de trabajo colaborativo y asegurando el cumplimiento de metas del equipo.',
    ],
    image: fravaExperience,
  },
  {
    year: 'Proximamente',
    title: '',
    company: '',
    location: '',
    duration: '',
    description: [],
    image: '',
  }
];


const Timeline = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Experiencia Profesional</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center md:space-x-6 bg-gray-50 p-4 rounded-lg shadow-sm"
          >
            {/* Detalles de la experiencia */}
            <div className="flex-1">
              <span className="text-gray-500 font-medium">{exp.year}</span>
              <h3 className="text-xl font-semibold text-blue-600">{exp.title}</h3>
              <p className="text-gray-700 italic">
                {exp.company} - {exp.location}
              </p>
              <p className="text-gray-500 text-sm">{exp.duration}</p>
              <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
            {/* Botón para abrir el modal */}
            {exp.image && (
              <div className="mt-4 md:mt-0">
                <button
                  onClick={() => openModal(exp.image)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Ver Certificado
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Usando el Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img
          src={selectedImage}
          alt="Certificado"
          className="w-full h-auto max-h-[80vh] object-contain rounded"
        />
      </Modal>
    </section>
  );
};

export default Timeline;
