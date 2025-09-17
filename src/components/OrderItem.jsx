import PropTypes from 'prop-types';
import '../css/styles.css';

function OrderItem({ id, customer, items, status, date }) {
  return (
    <div className="order-item">
      <h4>Pedido #{id}</h4>
      <p>Cliente: {customer}</p>
      <p>Fecha: {date instanceof Date ? date.toLocaleDateString() : new Date(date).toLocaleDateString()}</p>
      <p>Estado: {status}</p>
      <ul>
        {items.map(item => (
          <li key={item.productId}>
            {item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

OrderItem.propTypes = {
  id: PropTypes.number.isRequired,
  customer: function(props, propName, componentName) {
    if (!props[propName] || typeof props[propName] !== 'string' || props[propName].length < 3) {
      return new Error(`Prop '${propName}' en '${componentName}' debe ser string y mínimo 3 caracteres.`);
    }
  },
  items: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    quantity: function(obj, key, comp) {
      if (typeof obj[key] !== 'number' || obj[key] <= 0) {
        return new Error(`'quantity' debe ser mayor a 0 en '${comp}'.`);
      }
    },
    price: PropTypes.number.isRequired,
  })).isRequired,
  status: PropTypes.oneOf(['pending', 'shipped', 'delivered']),
  date: PropTypes.instanceOf(Date),
};

OrderItem.defaultProps = {
  status: 'pending',
  date: new Date(),
};

export default OrderItem;