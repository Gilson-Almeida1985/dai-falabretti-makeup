import React from 'react';

function Services() {
  const services = [
    { title: 'Maquiagem Social', description: 'Produções para festas, formaturas e eventos especiais.' },
    { title: 'Noivas & Madrinhas', description: 'Um dia inesquecível merece uma maquiagem impecável e duradoura.' },
    { title: 'Cursos de Automaquiagem', description: 'Aprenda a realçar sua beleza com técnicas profissionais para o dia a dia.' }
  ];

  return (
    <section id="servicos" className="services">
      <h2>Meus Serviços</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;