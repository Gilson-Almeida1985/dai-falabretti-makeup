import React from 'react';
import Image from 'next/image';

// Os caminhos agora partem da pasta 'public'
import makeup1 from '../../public/portfolio/makeup1.jpeg';
import makeup_1 from '../../public/portfolio/makeup-1.jpeg';
import makeup2 from '../../public/portfolio/makeup2.jpeg';
import makeup3 from '../../public/portfolio/makeup3.jpeg';
import makeup4 from '../../public/portfolio/makeup4.png';
import makeup5 from '../../public/portfolio/makeup5.png';
import makeup6 from '../../public/portfolio/makeup6.jpeg';
import makeup_6 from '../../public/portfolio/makeup-6.jpeg';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfólio</h2>
      <div className="portfolio-grid">
        <h3 className='services'>Maquiagem Social</h3>
        <Image src={makeup_1} alt="Maquiagem profissional 1" placeholder="blur" />
        <Image src={makeup1} alt="Maquiagem profissional 1" placeholder="blur" />
        <Image src={makeup2} alt="Maquiagem profissional 2" placeholder="blur" />
        <Image src={makeup3} alt="Maquiagem profissional 3" placeholder="blur" />
        <Image src={makeup4} alt="Maquiagem profissional 4" placeholder="blur" />
        <Image src={makeup5} alt="Maquiagem profissional 5" placeholder="blur" />
        <Image src={makeup_6} alt="Maquiagem profissional 6" placeholder="blur" />
        <Image src={makeup6} alt="Maquiagem profissional 6" placeholder="blur" />
        <Image src={makeup6} alt="Maquiagem profissional 6" placeholder="blur" />
      </div>
    </section>
  );
}

export default Portfolio;