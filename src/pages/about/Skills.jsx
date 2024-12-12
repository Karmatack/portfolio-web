import React from 'react';

const skills = [
  { name: 'React.js', level: 'Avanzado' },
  { name: 'JavaScript (ES6+)', level: 'Avanzado' },
  { name: 'Spring Boot', level: 'Intermedio' },
  { name: 'SQL (MySQL, SQL Server)', level: 'Intermedio' },
  { name: 'Ciencia de Datos (Python, Spark)', level: 'Intermedio' },
  { name: 'Git/GitHub', level: 'Avanzado' },
];

const Skills = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Habilidades Técnicas</h2>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex justify-between items-center border-b pb-2"
          >
            <span className="font-semibold">{skill.name}</span>
            <span className="text-gray-600">{skill.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
