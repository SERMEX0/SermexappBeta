import { NavLink } from "react-router-dom";
import {  FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Inicio = () => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: 0,
        margin: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
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


      {/* Contenido principal con video de fondo */}
      <div
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          poster="https://sermex0.github.io/Sermex_Api_Images/sermex_img-video.png"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src="https://sermex0.github.io/Sermex_Api_Images/SERMEX-video..mp4" type="video/mp4" />
        </video>

        {/* Contenido centrado sobre el video */}
        <div
          style={{
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
            zIndex: 1,
          }}
        >
          <h2>Bienvenido a nuestra App de SERMEX</h2>
          <h6>
            En **SERMEX**, nos preocupamos por tu satisfacción. Por eso, hemos creado un **asistente virtual** 
            para brindarte la mejor atención y mejorar tu experiencia como cliente.
          </h6>

          {/* Botón de navegación */}
          <button
            onClick={() => navigate("/seleccionar-producto")}
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              cursor: "pointer",
              backgroundColor: "#fff",
              color: "#005e97",
              border: "none",
              borderRadius: "5px",
              marginTop: "15px",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ddd")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
          >
            Seleccionar Producto
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          width: "100%",
          backgroundColor: "#005e97",
          color: "#ffffff",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        <p>© 2025 En Proceso de Certificación ISO 9001:2015.</p>

        {/* Imágenes de marcas */}
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", paddingTop: "10px" }}>
          {[
            "vicon.png", "od.png", "milesight.png", "flir.png",
            "eagle.png", "density.png", "ceia.png", "flexradio.png",
            "id3.png", "or-technology.png", "trafictec.png", "louroe.png"
          ].map((img) => (
            <img
              key={img}
              src={`/images/${img}`}
              alt={img.replace(".png", "")}
              style={{ width: 100, height: 48 }}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Inicio;
