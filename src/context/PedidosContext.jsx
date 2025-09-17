import { createContext, useContext, useState } from 'react';
import pedidosData from '../data/pedidos';

const PedidosContext = createContext();

export function PedidosProvider({ children }) {
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
