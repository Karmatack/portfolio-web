import React from 'react';

import ScrumFoundation from '../../assets/images/certificados/scrumfoundation.webp';
import ProgramacionWebFullStack from '../../assets/images/certificados/WebFullStack.webp';
import CloudComputing from '../../assets/images/certificados/CloudComputing.webp';
import CienciaDeDatos1 from '../../assets/images/certificados/CienciaDeDatos1.webp';
import CienciaDeDatos2 from '../../assets/images/certificados/CienciaDeDatos2.webp';

const certifications = [
    {
        title: 'Programación Web Full Stack',
        description: [
            'Beca Generación Digital',
            'Diciembre 2024',
        ],
        image: ProgramacionWebFullStack,
        link: 'https://egg-csv-bulk-certificates-prod.s3.amazonaws.com/certificates/65d6688b339a554a49904fce-1733582969225.pdf',
    },
    {
        title: 'Fundamentos de Data Analytics',
        description: [
            'IBM',
            'Diciembre 2024',
        ],
        image: require('../../assets/images/svg/linkedin.svg'),
    },
    {
        title: 'Scrum Foundation Professional Certification - SFPC™ !',
        description: [
            'CertiProf',
            'Enero 2024',
        ],
        image: ScrumFoundation,
        link: 'https://www.credly.com/badges/8426fb23-54f7-4f39-ba83-e7d44247844f/linked_in_profile',
    },
    {
        title: 'CLOUD COMPUTING: AWS - AZURE -GOOGLE CLOUD',
        description: [
            'UNI PIT',
            'Junio 2024',
        ],
        image: CloudComputing,
        link: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_34150a3f9cdb22fd29209c3bd60d2493&action=view',
    },
    {
        title: 'CIENCIA DE DATOS 1 ',
        description: [
            'UNI PIT',
            'Junio 2024',
        ],
        image: CienciaDeDatos1,
        link: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_31d9bfcd70f9f220cf6d951b397d6474',
    },
    {
        title: 'CIENCIA DE DATOS 2',
        description: [
            'UNI PIT',
            'Junio 2024',
        ],
        image: CienciaDeDatos2,
        link: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_943f7002a7a930a0d53c25e06b909ac5&action=view',
    },
    {
        title: 'POWER BI - Básico',
        description: [
            'UNI PIT',
            'Junio 2024',
        ],
        image: CienciaDeDatos2,
        link: 'https://certificados.uni.edu.pe/verificador/search.php?cert_id=cert_d6f3fd78bb3af97b033a0fbe2245d57e&action=view',
    },
    
    
];

function Certifications() {
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
                        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-transform transform hover:-translate-y-2"
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
                            <footer className="mt-4">
                                {cert.link ? (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Ver Certificado
                                    </a>
                                ) : (
                                    <span className="text-gray-400 italic">
                                        Sin enlace disponible
                                    </span>
                                )}
                            </footer>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Certifications;
