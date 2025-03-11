import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import PrivateRoute from "./PrivateRoute";
import SeleccionarProducto from "./pages/SeleccionarProducto";
import ProductDetail from "./pages/ProductDetail"; // Importamos la nueva pantalla
import Reparacion from "./pages/Reparacion";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* 🔒 Protegemos la pantalla de inicio */}
        <Route path="/inicio" element={<PrivateRoute><Inicio /></PrivateRoute>} />
        <Route path="/seleccionar-producto" element={<SeleccionarProducto />} />  {/* ✅ Ruta correcta */}
        <Route path="/detalle-producto" element={<ProductDetail />} />  {/* ✅ Nueva ruta */}
        <Route path="/reparacion" element={<Reparacion />} />
        
        {/* Redirige al login si no hay ninguna ruta coincidente */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
