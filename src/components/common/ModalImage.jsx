import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // No renderiza el modal si no está abierto

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Cierra el modal al hacer clic fuera del contenido
    >
      <div
        className="bg-white rounded-lg p-4 max-w-4xl w-full relative"
        onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro del modal
      >
        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 absolute top-4 right-4 text-2xl"
        >
          ✖
        </button>
        {/* Contenido del modal */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
