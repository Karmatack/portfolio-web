import React, { useState } from 'react';
import CertificationModal from '../../components/common/CertificationModal';

import ScrumFoundation from '../../assets/images/certificados/scrumfoundation.webp';
import ProgramacionWebFullStack from '../../assets/images/certificados/WebFullStack.webp';
import CloudComputing from '../../assets/images/certificados/CloudComputing.webp';
import CienciaDeDatos1 from '../../assets/images/certificados/CienciaDeDatos1.webp';
import CienciaDeDatos2 from '../../assets/images/certificados/CienciaDeDatos2.webp';




const certifications = [
    {
        title: 'Programación Web Full Stack',
        description: ['Beca Generación Digital', 'Diciembre 2024'],
        image: ProgramacionWebFullStack,
        details: [
            'Desarrollado en colaboración con BID, Egg y MTPE.',
            'Duración: 535 horas distribuidas en competencias técnicas y socioemocionales.',
            'Competencias técnicas: HTML5, CSS3, JavaScript, Spring, y Java. También incluye bases de datos relacionales con MySQL y herramientas avanzadas como Spring Boot.',
            'Competencias socioemocionales: comunicación efectiva, trabajo en equipo, liderazgo, y resolución de problemas.',
            'Objetivo: potenciar la empleabilidad mediante habilidades digitales altamente demandadas.',
            'Certificación válida a nivel nacional, diseñada para preparar a desarrolladores para trabajar en startups, empresas de software y más.',
        ],
        link: 'https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/65d6688b339a554a49904fce-1733582969225.pdf',
    },
    {
        title: 'Fundamentos de Data Analytics',
        description: ['IBM & Guayerd', 'Diciembre 2024'],
        image: ProgramacionWebFullStack,
        details: [
            'Conocimientos en desarrollo full-stack.',
            'Curso avalado por BID, Egg y otras instituciones.',
        ],
        link: 'https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/65d6688b339a554a49904fce-1733582969225.pdf',
    },
    {
        title: 'Scrum Foundation Professional Certification - SFPC™ !',
        description: ['CertiProf', 'Enero 2024'],
        image: ScrumFoundation,
        details: [
            'Fundamentos del marco de trabajo Scrum.',
            'Certificación profesional avalada internacionalmente.',
        ],
        link: 'https://www.credly.com/badges/8426fb23-54f7-4f39-ba83-e7d44247844f/linked_in_profile',
    },
    {
        title: 'CLOUD COMPUTING: AWS - AZURE -GOOGLE CLOUD',
        description: ['UNI PIT', 'Junio 2024'],
        image: CloudComputing,
        details: [
            'Introducción a servicios en la nube de AWS, Azure y Google Cloud.',
            'Certificado por la Universidad Nacional de Ingeniería.',
        ],
        link: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_34150a3f9cdb22fd29209c3bd60d2493&action=view',
    },
    {
        title: 'CIENCIA DE DATOS 1',
        description: ['UNI PIT', 'Junio 2024'],
        image: CienciaDeDatos1,
        details: [
            'Bases fundamentales en ciencia de datos y análisis estadístico.',
            'Certificado emitido por la Universidad Nacional de Ingeniería.',
        ],
        link: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_31d9bfcd70f9f220cf6d951b397d6474',
    },
    {
        title: 'CIENCIA DE DATOS 2',
        description: ['UNI PIT', 'Junio 2024'],
        image: CienciaDeDatos2,
        details: [
            'Análisis avanzado en Machine Learning y Big Data.',
            'Certificado por la Universidad Nacional de Ingeniería.',
        ],
        link: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_943f7002a7a930a0d53c25e06b909ac5&action=view',
    },
    {
        title: 'POWER BI - Básico',
        description: ['UNI PIT', 'Junio 2024'],
        image: CienciaDeDatos2,
        details: [
            'Creación de dashboards interactivos y visualización avanzada de datos.',
            'Certificado emitido por la Universidad Nacional de Ingeniería.',
        ],
        link: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_d6f3fd78bb3af97b033a0fbe2245d57e&action=view',
    },
];

function Certifications() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCertification, setSelectedCertification] = useState(null);

    const openModal = (certification) => {
        setSelectedCertification(certification);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedCertification(null);
        setIsModalOpen(false);
    };

    return (
        <section className="py-16 bg-gray-100">
            <header className="max-w-screen-xl mx-auto px-6 text-center mb-8">
                <h2 className="text-4xl font-bold">Certificaciones</h2>
                <p className="text-lg text-gray-600">
                    Una muestra de las certificaciones obtenidas a lo largo de mi trayectoria.
                </p>
            </header>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-6">
                {certifications.map((cert, index) => (
                    <li
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-2 cursor-pointer"
                        onClick={() => openModal(cert)}
                    >
                        <figure className="flex items-center justify-center w-full h-48 bg-gray-100">
                            <img
                                src={cert.image}
                                alt={cert.title}
                                className="max-w-full max-h-full object-contain"
                            />
                        </figure>
                        <article className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">{cert.title}</h3>
                            <p className="text-gray-600">
                                {cert.description.map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                            {cert.link && (
                                <footer className="mt-4">
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Ver Certificado
                                    </a>
                                </footer>
                            )}
                        </article>
                    </li>
                ))}
            </ul>

            {/* Modal */}
            <CertificationModal
                isOpen={isModalOpen}
                onClose={closeModal}
                certification={selectedCertification}
            />
        </section>
    );
}

export default Certifications;
