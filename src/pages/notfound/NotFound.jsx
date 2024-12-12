// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import img404 from "../../assets/images/error/404.webp";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gray-100 text-gray-800 p-4">
      {/* Contenedor principal con diseño rectangular y borde punteado */}
      <div className="flex flex-col md:flex-row items-center border-dashed border-2 border-red-300 rounded-lg bg-white max-w-lg w-full mx-auto p-3 md:p-5">
        
        {/* Espacio para la imagen */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-5">
          <img src={img404} alt="Error 404" className="w-28 h-auto mx-auto md:w-40 md:h-auto" />
        </div>

        {/* Contenido de texto */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-red-500 mb-1">404</h1>
          <h2 className="text-sm md:text-base font-semibold mb-1">Página no encontrada</h2>
          <p className="text-xs md:text-sm text-gray-600 mb-3 max-w-xs mx-auto md:mx-0">
            Lo sentimos, la página que estás buscando no existe.
          </p>
          <Link
            to="/"
            className="inline-block mt-3 px-3 py-2 bg-red-500 text-white text-xs md:text-sm rounded-lg hover:bg-red-600 transition"
          >
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
