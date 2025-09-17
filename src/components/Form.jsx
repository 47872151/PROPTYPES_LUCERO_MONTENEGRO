
import PropTypes from 'prop-types';
import { useState } from 'react';
import productos from '../data/productos';

function Form({ onAddPedido }) {
	const [customer, setCustomer] = useState('');
	const [items, setItems] = useState([]);
	const [status, setStatus] = useState('pending');
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
		const nuevoPedido = {
			id: Date.now(),
			customer,
			items,
			status,
			date: new Date(),
		};
		onAddPedido(nuevoPedido);
		setCustomer('');
		setItems([]);
		setStatus('pending');
		setError('');
		setSuccess(true);
		setTimeout(() => setSuccess(false), 5000);
	};

			return (
				<form onSubmit={handleSubmit}>
					<h3>Nuevo Pedido</h3>
					{error && <p style={{color:'red'}}>{error}</p>}
					{success && <p style={{color:'green'}}>¡Pedido creado exitosamente!</p>}
					<input
						type="text"
						placeholder="Cliente"
						value={customer}
						onChange={e => setCustomer(e.target.value)}
					/>
					<div>
						<select value={selectedProductId} onChange={e => setSelectedProductId(e.target.value)}>
							{productos.map(producto => (
								<option key={producto.idProducto} value={producto.idProducto}>
									{producto.nombre}
								</option>
							))}
						</select>
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
								<div style={{marginTop: '8px', marginBottom: '8px'}}>
									<p><strong>Descripción:</strong> {producto.descripcion}</p>
									<p><strong>Precio:</strong> ${producto.precio}</p>
									<p><strong>Categoría:</strong> {producto.categoria}</p>
								</div>
							);
						})()}
						<button type="button" onClick={handleAddItem}>Agregar producto</button>
					</div>
					<ul>
						{items.map(item => (
							<li key={item.productId}>
								{item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
								<br /><small>{item.descripcion}</small>
							</li>
						))}
					</ul>
					<select value={status} onChange={e => setStatus(e.target.value)}>
						<option value="pending">Pendiente</option>
						<option value="shipped">Enviado</option>
						<option value="delivered">Entregado</option>
					</select>
					<button type="submit">Agregar Pedido</button>
				</form>
			);
}

Form.propTypes = {
	onAddPedido: PropTypes.func.isRequired,
};

export default Form;
