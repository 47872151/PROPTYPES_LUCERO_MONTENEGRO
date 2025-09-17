import React, { useState } from 'react';
import OrderItem from './OrderItem';
import { Pagination } from './Pagination';
import '../css/styles.css';

export const OrderList = ({ pedidos }) => {
    const [pedidosPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPedido = currentPage * pedidosPerPage;
    const indexOfFirstPedido = indexOfLastPedido - pedidosPerPage;
    const currentPedidos = pedidos.slice(indexOfFirstPedido, indexOfLastPedido);

    return (
        <>
            <div className="pedidos-list">
                {currentPedidos.length === 0 ? (
                    <p>No hay pedidos para mostrar.</p>
                ) : (
                    currentPedidos.map((pedido) => (
                        <OrderItem key={pedido.id} pedido={pedido} />
                    ))
                )}
            </div>

            <Pagination
                pedidosPerPage={pedidosPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPedidos={pedidos.length}
            />
        </>
    );
};