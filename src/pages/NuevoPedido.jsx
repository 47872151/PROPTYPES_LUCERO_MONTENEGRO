import Form from '../components/Form';
import { usePedidos } from '../context/PedidosContext';
import '../css/styles.css';

function NuevoPedido() {
	const { addPedido } = usePedidos();
	return (
		<div className="home-container">
		<div className="container">
			<h2 className="titulo-seccion">Nuevo Pedido</h2>
			<Form onAddPedido={addPedido} />
		</div>
		</div>
	);
}

export default NuevoPedido;