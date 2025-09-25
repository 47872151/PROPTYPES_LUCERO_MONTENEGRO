import PropTypes from 'prop-types';

function OrderFilter({ filter, onChange }) {
  return (
    <div className="order-filter-wrapper">
      <label htmlFor="order-filter" className="order-filter-label">Filtrar por Estado:</label>
      <div className="order-filter-container">
        <select
          id="order-filter"
          className="order-filter-select"
          value={filter}
          onChange={e => onChange(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="pending">Pendiente</option>
          <option value="shipped">Enviado</option>
          <option value="delivered">Entregado</option>
        </select>
      </div>
    </div>
  );
}

OrderFilter.propTypes = {
  filter: PropTypes.oneOf(['pending', 'shipped', 'delivered', '']),
  onChange: PropTypes.func.isRequired,
};

export default OrderFilter;