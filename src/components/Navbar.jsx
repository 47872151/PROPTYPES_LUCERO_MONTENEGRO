import React from 'react';
import { Link } from "react-router-dom";
import '../css/styles.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} className="logo-image" />
        <Link to="/" className="logo">MailAmerica</Link>
      </div>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/NuevoPedido">Nuevo Pedido</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
