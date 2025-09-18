
import PropTypes from 'prop-types';
import { useState } from 'react';
import productos from '../data/productos';
import { usePedidos } from '../context/PedidosContext';

function Form({ onAddPedido }) {
	const [customer, setCustomer] = useState('');
	const [items, setItems] = useState([]);
	// Estado siempre 'pending', no editable
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);


	const [selectedProductId, setSelectedProductId] = useState(productos[0]?.idProducto || '');
	const [productQty, setProductQty] = useState(1);

	const handleAddItem = () => {
		const producto = productos.find(p => p.idProducto === Number(selectedProductId));
		if (!producto || productQty <= 0) {
			setError('Datos de producto inválidos');
			return;
		}
		setItems([...items, {
			productId: producto.idProducto,
			name: producto.nombre,
			quantity: productQty,
			price: producto.precio,
			descripcion: producto.descripcion,
		}]);
		setSelectedProductId(productos[0]?.idProducto || '');
		setProductQty(1);
		setError('');
	};

	const { pedidos } = usePedidos();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (customer.length < 3) {
			setError('El nombre del cliente debe tener al menos 3 caracteres');
			return;
		}
		if (items.length === 0) {
			setError('Debe agregar al menos un producto');
			return;
		}
		// Calcular el id siguiente
		const lastId = pedidos.length > 0 ? Math.max(...pedidos.map(p => p.id)) : 0;
		const nuevoPedido = {
			id: lastId + 1,
			customer,
			items,
			status: 'pending',
			date: new Date(),
		};
		onAddPedido(nuevoPedido);
		setCustomer('');
		setItems([]);
		setError('');
		setSuccess(true);
		setTimeout(() => setSuccess(false), 5000);
	};

			return (
				<div className="align-center">
					<form className="form" onSubmit={handleSubmit}>
						<h3>Nuevo Pedido</h3>
						{error && <p className="mensaje-error">{error}</p>}
						{success && <p id="mensajeConfirmacion">¡Pedido creado exitosamente!</p>}
						<label>Cliente</label>
						<input
							type="text"
							placeholder="Cliente"
							value={customer}
							onChange={e => setCustomer(e.target.value)}
						/>
						<div>
							<label>Producto</label>
							<select value={selectedProductId} onChange={e => setSelectedProductId(e.target.value)}>
								{productos.map(producto => (
									<option key={producto.idProducto} value={producto.idProducto}>
										{producto.nombre}
									</option>
								))}
							</select>
							<label>Cantidad</label>
							<input
								type="number"
								min="1"
								placeholder="Cantidad"
								value={productQty}
								onChange={e => setProductQty(Number(e.target.value))}
							/>
							{/* Mostrar datos del producto seleccionado */}
							{(() => {
								const producto = productos.find(p => p.idProducto === Number(selectedProductId));
								if (!producto) return null;
								return (
									<div className="card-consulta">
										<p><span>Descripción:</span> {producto.descripcion}</p>
										<p><span>Precio:</span> ${producto.precio}</p>
										<p><span>Categoría:</span> {producto.categoria}</p>
									</div>
								);
							})()}
							<button type="button" className="button-primary" onClick={handleAddItem}>Agregar producto</button>
						</div>
						<ul>
							{items.map(item => (
								<li key={item.productId}>
									{item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
									<br /><small>{item.descripcion}</small>
								</li>
							))}
						</ul>
						{/* Estado oculto, siempre 'pending' */}
						<button type="submit" className="button-primary">Agregar Pedido</button>
					</form>
				</div>
			);
}

Form.propTypes = {
	onAddPedido: PropTypes.func.isRequired,
};

export default Form;
