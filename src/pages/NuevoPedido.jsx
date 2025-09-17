import Form from '../components/Form';
import { usePedidos } from '../context/PedidosContext';

function NuevoPedido() {
	const { addPedido } = usePedidos();
	return (
		<div>
			<h2>Nuevo Pedido</h2>
			<Form onAddPedido={addPedido} />
		</div>
	);
}

export default NuevoPedido;
