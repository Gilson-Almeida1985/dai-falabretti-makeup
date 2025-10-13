import React from 'react';
import Image from 'next/image'; // Importe o componente de Imagem do Next.js

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        {/* Use o componente Image e o caminho da pasta public */}
        <Image src="/logo-dai.svg" alt="Dai Falabretti Makeup Logo" width={240} height={70} className="logo-img" />
      </div>
      <nav>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;