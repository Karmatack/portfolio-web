import React from "react";
import logo from "../../../assets/images/logo/logo.webp";
import location from "../../../assets/images/svg/imagen.webp";
import whatsapp from "../../../assets/images/svg/whatsapp.svg";
import facebook from "../../../assets/images/svg/facebook.svg";
import linkedin from "../../../assets/images/svg/linkedin.svg";
import gmail from "../../../assets/images/svg/gmail.svg";
import instagram from "../../../assets/images/svg/instagram.svg";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10 w-full">
            <section className="w-full flex flex-col md:flex-row md:justify-center gap-10 px-4 md:px-10">
                {/* Sección del logo */}
                <section className="flex flex-col items-center justify-center space-y-4 md:flex-1">
                    <img src={logo} alt="Mi Portafolio" className="w-40 h-auto md:w-48" />
                    <article className="bg-gray-700 p-4 rounded-md text-center">
                        <p className="text-sm leading-relaxed">
                            Bienvenido a mi portafolio. Aquí encontrarás una muestra de mis
                            proyectos, habilidades y experiencia profesional.
                        </p>
                    </article>
                </section>

                {/* Sección de contacto */}
                <section className="flex flex-col items-center text-center space-y-4 md:flex-1">
                    <h2 className="text-lg font-bold">CONTÁCTAME</h2>
                    <address className="flex flex-col items-center space-y-3 not-italic">
                        <p className="flex items-center space-x-2">
                            <img src={location} alt="Ubicación" className="w-6 h-6" />
                            <span>Lima, Perú</span>
                        </p>

                        <a
                            href="https://wa.me/902985139?text=Hola%20me%20gustaría%20más%20información"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-green-400"
                        >
                            <img src={whatsapp} alt="Whatsapp" className="w-6 h-6" />
                            <span>902-985-139</span>
                        </a>

                        <a
                            href="mailto:systems.kennedy@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-blue-400"
                        >
                            <img src={gmail} alt="Gmail" className="w-6 h-6" />
                            <span>systems.kennedy@gmail.com</span>
                        </a>
                    </address>
                </section>



                {/* Sección de redes sociales */}
                <section className="flex flex-col items-center text-center space-y-4 md:flex-1">
                    <h2 className="text-lg font-bold">MIS REDES</h2>
                    <div className="flex flex-col items-center space-y-3">
                        
                        <a
                            href="https://www.linkedin.com/in/kennedypinodextre"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-blue-400"
                        >
                            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kennedypinodextre"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-blue-400"
                        >
                            <img src={instagram} alt="LinkedIn" className="w-6 h-6" />
                            <span>Instagram</span>
                        </a>
                        <a
                            href="https://www.facebook.com/lkennedyl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 hover:text-blue-400"
                        >
                            <img src={facebook} alt="Facebook" className="w-6 h-6" />
                            <span>Facebook</span>
                        </a>
                    </div>
                </section>
            </section>

            {/* Pie de página */}
            <div className="text-center mt-8 text-sm text-gray-400">
                &copy; Todos los derechos reservados
            </div>
        </footer>
    );
}

export default Footer;
