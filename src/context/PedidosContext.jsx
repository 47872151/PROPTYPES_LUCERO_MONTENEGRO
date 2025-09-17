import { createContext, useContext, useState } from 'react';
import rawPedidos from '../data/pedidos';

const PedidosContext = createContext();

function getInitialPedidos() {
  const local = localStorage.getItem('pedidos');
  if (local) {
    try {
      const arr = JSON.parse(local);
      return arr.map(p => ({
        ...p,
        date: new Date(p.date),
      }));
    } catch {
      // Si hay error, usar los datos iniciales
    }
  }
  return rawPedidos.map(p => ({
    id: p.id,
    customer: p.cliente,
    items: p.listaProductos.map(item => ({
      productId: item.idProducto,
      name: item.nombre,
      quantity: item.cantidad,
      price: item.precio,
    })),
    status: p.estado,
    date: new Date(p.fecha),
  }));
}

export function PedidosProvider({ children }) {
  const [pedidos, setPedidos] = useState(getInitialPedidos());

  const addPedido = (nuevoPedido) => {
    setPedidos(prev => {
      const updated = [...prev, nuevoPedido];
      localStorage.setItem('pedidos', JSON.stringify(updated));
      return updated;
    });
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
