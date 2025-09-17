import React, { useState } from 'react';
import { usePedidos } from '../context/PedidosContext';
import OrderFilter from './OrderFilter';
import OrderList from './OrderList';
import OrderStats from './OrderStats';

function Dashboard() {
  const { pedidos } = usePedidos();
  const [filter, setFilter] = useState('');

  // Filtrar pedidos según el estado seleccionado
  const filteredOrders = filter
    ? pedidos.filter(p => p.status === filter)
    : pedidos;

  // Estadísticas SIEMPRE sobre todos los pedidos
  const total = pedidos.length;
  const pending = pedidos.filter(p => p.status === 'pending').length;
  const shipped = pedidos.filter(p => p.status === 'shipped').length;
  const delivered = pedidos.filter(p => p.status === 'delivered').length;

  return (
    <div>
      <h2>Gestión de Pedidos</h2>
      <OrderFilter filter={filter} onChange={setFilter} />
      <OrderList orders={filteredOrders} />
      <h2>Estadísticas</h2>
      <OrderStats total={total} pending={pending} shipped={shipped} delivered={delivered} />
    </div>
  );
}

export default Dashboard;