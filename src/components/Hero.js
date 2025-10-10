import React from 'react';

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay">
        <h1>Elevando sua beleza, realçando sua essência.</h1>
        <a 
          href="https://wa.me/5541998137141?text=Olá!%20Gostaria%20de%20agendar%20um%20horário." 
          className="cta-button"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Agende seu horário
        </a>
      </div>
    </section>
  );
}

export default Hero;