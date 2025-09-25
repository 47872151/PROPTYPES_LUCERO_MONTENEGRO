import { useParams } from 'react-router-dom';
import pedidosData from '../data/pedidos';
import OrderItem from '../components/OrderItem';
import '../css/styles.css';

function DetallePedido() {
	const { id } = useParams();
	// Buscar el pedido por id (puede ser string, convertir a número)
	const pedidoRaw = pedidosData.find(p => p.id === Number(id));

	if (!pedidoRaw) {
		return <h2>Pedido no encontrado</h2>;
	}

	// Mapear al formato esperado por OrderItem
	const pedido = {
		id: pedidoRaw.id,
		customer: pedidoRaw.cliente,
		items: pedidoRaw.listaProductos.map(item => ({
			productId: item.idProducto,
			name: item.nombre,
			quantity: item.cantidad,
			price: item.precio,
		})),
		status: pedidoRaw.estado,
		date: new Date(pedidoRaw.fecha),
	};

	return (
		<div className="home-container">
		<div className="container">
			<h2 className="titulo-seccion">Detalle del Pedido</h2>
			<OrderItem {...pedido} />
		</div>
		</div>
	);
}

export default DetallePedido;
