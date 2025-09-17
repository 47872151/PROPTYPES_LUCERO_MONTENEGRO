
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import './css/styles.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home'
import NuevoPedido from './pages/NuevoPedido.jsx'
import DetallePedido from './pages/DetallePedido.jsx'

export default function App() {
  return (  
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>           
            <Route path="/" element={<Home />} />
            <Route path="/NuevoPedido" element={<NuevoPedido />} />
            <Route path="/pedidos/:id" element={<DetallePedido />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
