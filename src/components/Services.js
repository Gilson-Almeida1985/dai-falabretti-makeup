import React from 'react';
import { FaHeart, FaRing, FaUserFriends, FaCamera, FaGraduationCap, FaStar } from 'react-icons/fa';

function Services() {
  const services = [
    { title: 'Maquiagem Social', description: 'Produções para festas, jantares, formaturas, aniversários e eventos em geral', icon: <FaStar /> },
    { title: 'Maquiagem para Noivas', description: 'Um dia inesquecível merece uma maquiagem impecável e duradoura, inclui teste de maquiagem, consultoria de estilo e maquiagem no dia do casamento', icon: <FaRing /> },
    { title: 'Maquiagem para Madrinhas e Convidadas', description: 'Serviços específicos para casamentos', icon: <FaUserFriends /> },
    { title: 'Maquiagem para Debutantes', description: 'Adaptada ao estilo jovem, com foco em naturalidade e durabilidade', icon: <FaHeart /> },
    { title: 'Maquiagem para Ensaios Fotográficos', description: 'Voltada para fotos em estúdio ou externas, com técnicas que valorizam na câmera.', icon: <FaCamera /> },
    { title: 'Maquiagem para Formatura', description: 'Destaque para longa duração e acabamento perfeito.', icon: <FaGraduationCap /> }
  ];

  return (
    <section id="servicos" className="services">
      <h2>Meus Serviços</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;