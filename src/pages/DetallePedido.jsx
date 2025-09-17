import { useParams } from 'react-router-dom';
import pedidosData from '../data/pedidos';
import OrderItem from '../components/OrderItem';

function DetallePedido() {
	const { id } = useParams();
	// Buscar el pedido por id (puede ser string, convertir a número)
	const pedido = pedidosData.find(p => p.id === Number(id));

	if (!pedido) {
		return <h2>Pedido no encontrado</h2>;
	}

	return (
		<div>
			<h2>Detalle del Pedido</h2>
			<OrderItem {...pedido} />
		</div>
	);
}

export default DetallePedido;
