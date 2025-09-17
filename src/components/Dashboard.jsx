
import { usePedidos } from '../context/PedidosContext';
import OrderFilter from './OrderFilter';
import OrderList from './OrderList';
import OrderStats from './OrderStats';

function Dashboard() {
  const { pedidos, addPedido } = usePedidos();
  const [filter, setFilter] = useState('');

  // Filtrar pedidos según el estado seleccionado
  const filteredOrders = filter
    ? pedidos.filter(p => p.status === filter)
    : pedidos;

  // Estadísticas
  const total = pedidos.length;
  const pending = pedidos.filter(p => p.status === 'pending').length;
  const shipped = pedidos.filter(p => p.status === 'shipped').length;
  const delivered = pedidos.filter(p => p.status === 'delivered').length;

  return (
    <div>
      <h2>Gestión de Pedidos</h2>
      <OrderFilter filter={filter} onChange={setFilter} />
      <OrderStats total={total} pending={pending} shipped={shipped} delivered={delivered} />
      <OrderList orders={filteredOrders} />
      {/* El formulario ahora solo en NuevoPedido */}
    </div>
  );
}

export default Dashboard;