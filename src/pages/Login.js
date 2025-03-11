import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

const iniciarSesion = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, password }),
    });

    if (!response.ok) throw new Error("Correo o contraseña incorrectos");

    const data = await response.json();
    localStorage.setItem("token", data.token);
    navigate("/inicio");
  } catch (err) {
    setError(err.message || "Error al conectar con el servidor");
  } finally {
    setLoading(false);
  }
};

  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Bienvenido 🔑
        </h2>
        {error && (
          <p className="text-red-500 text-sm text-center mb-4" aria-live="polite">
            {error}
          </p>
        )}
        <form onSubmit={iniciarSesion} className="space-y-6">
          <div>
            <label className="block text-gray-600 text-sm mb-1" htmlFor="correo">
              Correo electrónico
            </label>
            <input
              id="correo"
              type="email"
              placeholder="Escribe tu correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-1" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Escribe tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
              required
            />
          </div>
          <button
  type="submit"
  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl hover:shadow-lg transform transition-all duration-300 ${
    loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
  }`}
  disabled={loading}
>
  {loading ? "Ingresando..." : "Ingresar 🚀"}
</button>

        </form>
       
      </div>
    </div>
  );
};

export default Login;
