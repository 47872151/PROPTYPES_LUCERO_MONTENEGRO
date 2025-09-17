import PropTypes from 'prop-types';

function OrderFilter({ filter, onChange }) {
  return (
    <select value={filter} onChange={e => onChange(e.target.value)}>
      <option value="">Todos</option>
      <option value="pending">Pendiente</option>
      <option value="shipped">Enviado</option>
      <option value="delivered">Entregado</option>
    </select>
  );
}

OrderFilter.propTypes = {
  filter: PropTypes.oneOf(['pending', 'shipped', 'delivered', '']),
  onChange: PropTypes.func.isRequired,
};

export default OrderFilter;