
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
				<div className="nuevo-pedido-container">
					<div className="form-container">
						{error && <p className="mensaje-error">{error}</p>}
						{success && <p id="mensajeConfirmacion">¡Pedido creado exitosamente!</p>}

						<form onSubmit={handleSubmit}>
							<label>Cliente</label>
							<input
								type="text"
								placeholder="Nombre del cliente"
								value={customer}
								onChange={e => setCustomer(e.target.value)}
							/>

							{/* Mostrar información del cliente */}
							{customer && (
								<div className="customer-preview">
									<p><span>Cliente:</span> {customer}</p>
								</div>
							)}

							<div className="product-selection">
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
										<div className="product-preview">
											<p><span>Descripción:</span> {producto.descripcion}</p>
											<p><span>Precio:</span> ${producto.precio}</p>
											<p><span>Categoría:</span> {producto.categoria}</p>
										</div>
									);
								})()}

								<button type="button" className="btn-add-product" onClick={handleAddItem}>
									Agregar producto
								</button>
							</div>

							<div className="items-list">
								{items.length === 0 ? (
									<div className="items-empty">
										No hay productos agregados. Selecciona un producto y cantidad para comenzar.
									</div>
								) : (
									<ul>
										{items.map(item => (
											<li key={item.productId}>
												<strong>{item.name}</strong> - Cantidad: {item.quantity} - Precio: ${item.price}
												<small>{item.descripcion}</small>
											</li>
										))}
									</ul>
								)}
							</div>

							<div className="form-actions">
								<button type="submit" className="button-primary">Crear Pedido</button>
							</div>
						</form>
					</div>
				</div>
			);
}

Form.propTypes = {
	onAddPedido: PropTypes.func.isRequired,
};

export default Form;
