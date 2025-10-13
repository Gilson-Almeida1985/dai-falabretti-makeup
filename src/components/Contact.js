'use client';

import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contato" className="contact">
      <h2>Entre em Contato</h2>
      <p>Vamos conversar e agendar sua produção com todo o cuidado e atenção que você merece!</p>

      <div className="contact-info">
        <a
          href="https://www.instagram.com/daifalabretti_makeup"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaInstagram className="contact-icon" />
          <span>@daifalabretti_makeup</span>
        </a>

        <a
          href="https://wa.me/5541998137141"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FaWhatsapp className="contact-icon" />
          <span>(41) 99813-7141</span>
        </a>
      </div>

      <button
        className="cta-button"
        onClick={() => window.open('https://wa.me/5541998137141', '_blank')}
      >
        Agendar Agora
      </button>
    </section>
  );
}

export default Contact;