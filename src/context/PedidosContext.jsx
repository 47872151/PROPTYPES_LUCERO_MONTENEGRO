import { createContext, useContext, useState } from 'react';
import rawPedidos from '../data/pedidos';

const PedidosContext = createContext();

export function PedidosProvider({ children }) {
  // Mapeo de datos al formato esperado
  const pedidosData = rawPedidos.map(p => ({
    id: p.id,
    customer: p.cliente,
    items: p.listaProductos.map(item => ({
      productId: item.idProducto,
      name: item.nombre,
      quantity: item.cantidad,
      price: item.precio,
    })),
    status: p.estado, // "pending", "shipped", "delivered"
    date: new Date(p.fecha),
  }));
  const [pedidos, setPedidos] = useState(pedidosData);

  const addPedido = (nuevoPedido) => {
    setPedidos(prev => [...prev, nuevoPedido]);
  };

  return (
    <PedidosContext.Provider value={{ pedidos, addPedido }}>
      {children}
    </PedidosContext.Provider>
  );
}

export function usePedidos() {
  return useContext(PedidosContext);
}
