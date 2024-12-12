import React from 'react';

const CertificationModal = ({ isOpen, onClose, certification }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-[90%] max-w-7xl h-[60vh] overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()} // Evita cerrar el modal al hacer clic dentro
      >
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 absolute top-4 right-4 text-2xl"
        >
          ✖
        </button>

        {/* Imagen del certificado */}
        <div className="flex-shrink-0 md:w-1/2 h-full flex items-center justify-center">
          <img
            src={certification.image}
            alt={certification.title}
            className="w-full h-auto max-h-full object-contain rounded"
          />
        </div>

        {/* Texto de descripción */}
        <div className="flex-1 mt-4 md:mt-0 md:ml-6 overflow-y-auto pr-4">
          <h3 className="text-2xl font-bold text-gray-800">{certification.title}</h3>
          <p className="text-gray-600 mt-2">
            {certification.description.map((desc, index) => (
              <React.Fragment key={index}>
                {desc}
                <br />
              </React.Fragment>
            ))}
          </p>
          {certification.details && (
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              {certification.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationModal;
