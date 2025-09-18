import React from 'react';
import '../css/styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenedor">
        <div className="footer-col">
          <h4>MailAmerica</h4>
          <p>Tu socio en envíos confiables.</p>
        </div>
        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/NuevoPedido">Nuevo Pedido</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contacto</h4>
          <p>Email: info@mailamerica.com</p>
          <p>Tel: +1 234 567 890</p>
        </div>
        <div className="footer-col">
          <h4>Síguenos</h4>
          <div className="redes-sociales">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>&copy; 2023 MailAmerica. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
