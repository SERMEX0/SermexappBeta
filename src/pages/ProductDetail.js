import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const producto = location.state?.producto;

  if (!producto) {
    return <p style={styles.noData}>No hay información del producto</p>;
  }

  return (
    <div style={styles.container}>
      <Header />

      <div style={styles.content}>
        {/* 🔙 Botón para regresar */}
        <button 
          onClick={() => navigate("/seleccionar-producto")}
          style={styles.backButton}
        >
          ⬅ Volver a Selección
        </button>

        {/* 🏷 Nombre del producto */}
        <h1 style={styles.title}>{producto.Nombre || "Producto sin nombre"}</h1>

        {/* 🖼 Imagen destacada */}
        <div style={styles.imageContainer}>
          <img
            src={Array.isArray(producto.Imagen) && producto.Imagen.length > 0 ? producto.Imagen[0] : producto.Imagen}
            alt="Producto"
            style={styles.image}
          />
        </div>

        {/* 📝 Descripción */}
        <p style={styles.description}>
          <strong> Descripción:</strong> {producto.Adicional || "No disponible"}
        </p>

        {/* 📋 Características */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>🔍 Características</h3>
          <ul style={styles.list}>
            {Array.isArray(producto["Caracteristicas de mi producto"]) ? (
              producto["Caracteristicas de mi producto"].map((caracteristica, index) => (
                <li key={index} style={styles.listItem}>✔ {caracteristica}</li>
              ))
            ) : (
              <p style={styles.noData}>No hay características disponibles</p>
            )}
          </ul>
        </div>

        <button
        onClick={() => navigate("/reparacion")}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
          backgroundColor: "#005e97",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          marginBottom: "15px",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#005e97")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#005e97")}
      >
        Seleccionar Producto
      </button>

      


     
      </div>

      <Footer />
    </div>
  );
};

// 🎨 Estilos avanzados con CSS-in-JS
const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    padding: "40px 20px",
    textAlign: "center",
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    textAlign: "left",
  },
  title: {
    fontSize: "28px",
    color: "#005e97",
    fontWeight: "bold",
    marginBottom: "20px",
    textTransform: "uppercase",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "10px",
    transition: "transform 0.3s ease-in-out",
  },
  description: {
    fontSize: "16px",
    color: "#555",
    textAlign: "justify",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  section: {
    textAlign: "left",
    marginBottom: "25px",
  },
  sectionTitle: {
    fontSize: "20px",
    color: "#333",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
  },
  listItem: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "8px",
    lineHeight: "1.5",
  },
  noData: {
    fontSize: "16px",
    color: "#888",
    textAlign: "center",
    marginTop: "10px",
  },
  backButton: {
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    marginBottom: "20px",
    transition: "background-color 0.3s ease",
    display: "block",
    textAlign: "center",
  },
};

export default ProductDetail;
