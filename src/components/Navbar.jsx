import React from 'react';
import { Link } from "react-router-dom";
import '../css/styles.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">MailAmerica</Link>
        <ul className="navbar-nav">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/NuevoPedido" className="nav-link">Nuevo Pedido</Link></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;