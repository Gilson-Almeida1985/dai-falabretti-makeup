import React from 'react';
import Image from 'next/image';

// Os caminhos agora partem da pasta 'public'
import makeup1 from '../../public/makeup1.jpeg';
import makeup2 from '../../public/makeup2.jpeg';
import makeup3 from '../../public/makeup3.jpeg';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfólio</h2>
      <div className="portfolio-grid">
        <Image src={makeup1} alt="Maquiagem profissional 1" placeholder="blur" />
        <Image src={makeup2} alt="Maquiagem profissional 2" placeholder="blur" />
        <Image src={makeup3} alt="Maquiagem profissional 3" placeholder="blur" />
      </div>
    </section>
  );
}

export default Portfolio;