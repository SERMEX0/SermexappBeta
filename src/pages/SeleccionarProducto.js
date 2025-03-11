import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SeleccionarProducto = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://apiimagessermex-default-rtdb.firebaseio.com/.json");
        if (!response.ok) throw new Error("❌ Error al obtener los productos");
        const data = await response.json();
        setProductos(data.Productos || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProductos();
  }, []);

  const seleccionarProducto = (producto) => {
    if (!producto || !producto.Nombre) return;
    navigate("/detalle-producto", { state: { producto } });
  };

  return (
    <div style={styles.container}>
      <Header />
      <h1 style={styles.title}>Selecciona un Producto</h1>

      {error ? (
        <p style={styles.errorText}>{error}</p>
      ) : productos.length > 0 ? (
        <div style={styles.grid}>
          {productos.map((producto, index) => (
            <div
              key={index}
              onClick={() => seleccionarProducto(producto)}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={Array.isArray(producto.Imagen) && producto.Imagen.length > 0 ? producto.Imagen[0] : producto.Imagen}
                alt={producto.Nombre || "Imagen del producto"}
                style={styles.image}
              />
              <h3 style={styles.productName}>{producto.Nombre || "Nombre no disponible"}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.loadingText}>⏳ Cargando productos...</p>
      )}

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
  title: {
    fontSize: "28px",
    color: "#005e97",
    fontWeight: "bold",
    marginBottom: "25px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    justifyContent: "center",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  image: {
    width: "100%",
    height: "230px",
    objectFit: "cover",
    borderRadius: "8px",
    transition: "transform 0.3s ease-in-out",
  },
  productName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginTop: "10px",
  },
  loadingText: {
    fontSize: "16px",
    color: "#777",
    fontStyle: "italic",
  },
  errorText: {
    fontSize: "18px",
    color: "red",
    fontWeight: "bold",
  },
};

export default SeleccionarProducto;
