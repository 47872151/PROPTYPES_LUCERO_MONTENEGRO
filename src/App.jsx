import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { PedidosProvider } from './context/PedidosContext';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NuevoPedido from './pages/NuevoPedido';
import DetallePedido from './pages/DetallePedido';

export default function App() {
  return (
    <PedidosProvider>
      <BrowserRouter>
        <div className="page-layout">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/NuevoPedido" element={<NuevoPedido />} />
              <Route path="/pedidos/:id" element={<DetallePedido />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </PedidosProvider>
  )
}
