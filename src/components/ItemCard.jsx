import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/styles.css';

function ItemCard({ id, customer, date, status }) {
  return (
    <div className="producto-card">
      <h3 className="producto-nombre">Pedido #{id}</h3>
      <p>Cliente: {customer}</p>
      <p>Fecha: {date instanceof Date ? date.toLocaleDateString() : new Date(date).toLocaleDateString()}</p>
      <p>Estado: {status}</p>
      <Link to={`/pedidos/${id}`} className="btn-vermas">
        Ver más
      </Link>
    </div>
  );
}

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  customer: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  status: PropTypes.oneOf(['pending', 'shipped', 'delivered']).isRequired,
};

export default ItemCard;