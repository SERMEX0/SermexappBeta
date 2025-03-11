import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("token"); // 🔐 Elimina el token
    navigate("/login"); // 🔄 Redirige al login
  };

  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "#005e97",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // 🔹 Separa los elementos
        padding: "10px 20px",
        zIndex: 2,
      }}
    >
      {/* 📌 Logo */}
      <img
        src="/logo_SERMEX_blanco.fw.png"
        alt="Logo"
        style={{ height: "60px", cursor: "pointer" }}
        onClick={() => navigate("/inicio")} // ✅ Regresar a inicio al hacer clic
      />

      {/* 📌 Botones */}
      <div>
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
      </div>
    </header>
  );
};

export default Header;
