import React from 'react';
import Image from 'next/image';

// Os caminhos agora partem da pasta 'public'
import makeup1 from '../../public/makeup1.jpeg';
import makeup_1 from '../../public/makeup-1.jpeg';
import makeup2 from '../../public/makeup2.jpeg';
import makeup3 from '../../public/makeup3.jpeg';
import makeup4 from '../../public/makeup4.png';
import makeup5 from '../../public/makeup5.png';
import makeup6 from '../../public/makeup6.jpeg';
import makeup_6 from '../../public/makeup-6.jpeg';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfólio</h2>
      {/* --- Categoria 1: Maquiagem Social --- */}
      <h3>Maquiagem Social</h3>
      <div className="portfolio-grid">
<<<<<<< HEAD
        <h3 className='services'>Maquiagem Social.</h3>
        <Image src={makeup_1} alt="Maquiagem profissional 1" placeholder="blur" />
        <Image src={makeup1} alt="Maquiagem profissional 1" placeholder="blur" />
        <Image src={makeup2} alt="Maquiagem profissional 2" placeholder="blur" />
        <Image src={makeup3} alt="Maquiagem profissional 3" placeholder="blur" />
        <Image src={makeup4} alt="Maquiagem profissional 4" placeholder="blur" />
        <Image src={makeup5} alt="Maquiagem profissional 5" placeholder="blur" />
        <Image src={makeup_6} alt="Maquiagem profissional 6" placeholder="blur" />
        <Image src={makeup6} alt="Maquiagem profissional 6" placeholder="blur" />
        <Image src={makeup6} alt="Maquiagem profissional 6" placeholder="blur" />
=======
        <Image src={makeup_1} alt="Maquiagem social 1" placeholder="blur" />
        <Image src={makeup1} alt="Maquiagem social 2" placeholder="blur" />
        {/* Adicione mais imagens de maquiagem social aqui... */}
      </div>

      {/* --- Categoria 2: Maquiagem para Noivas --- */}
      <h3>Maquiagem para Noivas</h3>
      <div className="portfolio-grid">
        <Image src={makeup2} alt="Maquiagem para noiva 1" placeholder="blur" />
        <Image src={makeup3} alt="Maquiagem para noiva 2" placeholder="blur" />
        {/* Adicione mais imagens de noivas aqui... */}
      </div>

      {/* --- Categoria 3: Madrinhas e Convidadas --- */}
      <h3>Maquiagem para Madrinhas e Convidadas</h3>
      <div className="portfolio-grid">
        <Image src={makeup4} alt="Maquiagem para madrinha 1" placeholder="blur" />
        <Image src={makeup5} alt="Maquiagem para convidada 1" placeholder="blur" />
        {/* Adicione mais imagens de madrinhas/convidadas aqui... */}
      </div>

      {/* --- Categoria 4: Debutantes --- */}
      <h3>Maquiagem para Debutantes</h3>
      <div className="portfolio-grid">
        <Image src={makeup_6} alt="Maquiagem para debutante 1" placeholder="blur" />
        <Image src={makeup6} alt="Maquiagem para debutante 2" placeholder="blur" />
        {/* Adicione mais imagens de debutantes aqui... */}
      </div>

      {/* --- Categoria 5: Ensaios Fotográficos --- */}
      <h3>Maquiagem para Ensaios Fotográficos</h3>
      <div className="portfolio-grid">
        {/* Adicione imagens de ensaios aqui... */}
>>>>>>> 0aa6c38 (Update correct)
      </div>
    </section>
  );
}

export default Portfolio;