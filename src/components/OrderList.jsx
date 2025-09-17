import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';
import Pagination from './Pagination';
import '../css/styles.css';

function OrderList({ orders }) {
    const [ordersPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    return (
        <>
            <div className="pedidos-list">
                {currentOrders.length === 0 ? (
                    <p>No hay pedidos para mostrar.</p>
                ) : (
                    currentOrders.map((order) => (
                        <ItemCard key={order.id} {...order} />
                    ))
                )}
            </div>

            <Pagination
                pedidosPerPage={ordersPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPedidos={orders.length}
            />
        </>
    );
}

OrderList.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    customer: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    status: PropTypes.oneOf(['pending', 'shipped', 'delivered']),
    date: PropTypes.instanceOf(Date),
  })).isRequired,
};

export default OrderList;