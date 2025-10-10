import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Dai Falabretti Makeup. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;