import { NavLink } from "react-router-dom";
import { FaWrench, FaBox, FaChartBar, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Herader.css"; // Archivo de estilos

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();
const cerrarSesion = () => {
    localStorage.removeItem("token"); // 🔐 Elimina el token
    navigate("/login"); // 🔄 Redirige al login
  };

  return (
    <header
  style={{
    width: "100%",
    maxWidth: "1500px",
    margin: "0 auto",
    backgroundColor: "#005e97",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    zIndex: 2,
    position: "relative",  // Para evitar que el menú desplegable se salga
  }}
>
  {/* Logo */}
  <img
    src="/logo_SERMEX_blanco.fw.png"
    alt="Logo"
    style={{ height: "80px", marginRight: "15px" }}
  />

  {/* Navegación */}
  <nav className="nav" style={{ flex: 1, display: "flex", justifyContent: "center", gap: "20px" }}>
    <NavLink to="/reparaciones" className={({ isActive }) => (isActive ? "link active" : "link")}>
      <FaWrench className="icon" /> Reparaciones
    </NavLink>
    <NavLink to="/productos" className={({ isActive }) => (isActive ? "link active" : "link")}>
      <FaBox className="icon" /> Productos
    </NavLink>
    <NavLink to="/reporte" className={({ isActive }) => (isActive ? "link active" : "link")}>
      <FaChartBar className="icon" /> Reporte
    </NavLink>
  </nav>
  <button
          onClick={() => navigate("/inicio")}
          style={{
            marginRight: "10px",
            padding: "8px 15px",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#ffffff",
            color: "#005e97",
            border: "2px solid #005e97",
            borderRadius: "5px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#005e97")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ffffff")}
        >
          Inicio
        </button>

        <button
          onClick={cerrarSesion}
          style={{
            padding: "8px 15px",
            fontSize: "1rem",
            cursor: "pointer",
            backgroundColor: "#fd0707",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c00404")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#fd0707")}
        >
          Cerrar Sesión
        </button>

  {/* Contenedor del perfil */}
  <div
    className="profile-container"
    onClick={() => setMenuVisible(!menuVisible)}
    style={{
      position: "relative",
      cursor: "pointer",
      marginLeft: "auto",
      marginRight: "20px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <FaUserCircle className="profile-icon" size={40} color="#ffffff" />

    {/* Menú desplegable */}
    {menuVisible && (
      <div
        className="profile-menu"
        style={{
          position: "absolute",
          top: "50px",
          right: "0",
          backgroundColor: "#ffffff",
          borderRadius: "5px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          minWidth: "150px",
        }}
      >
        <NavLink to="/perfil" className="profile-link" style={{ padding: "5px 10px" }}>Mi Perfil</NavLink>
        <NavLink to="/configuracion" className="profile-link" style={{ padding: "5px 10px" }}>Configuración</NavLink>
        <NavLink to="/logout" className="profile-link" style={{ padding: "5px 10px", color: "red" }}>Cerrar Sesión</NavLink>



        
      </div>
    )}


    
  </div>
  
</header>


  );
};

export default Header;
