import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginFetch } from "../assets/config/axios";
import { loginPending, loginSuccess, loginFailure } from "../redux/reducers/UserSlice";

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { username, password } = credentials;

  const { error, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleLogin = useCallback(async (e) => {
    e.preventDefault();

    if (!username || !password) {
      dispatch(loginFailure("Preencha todos os campos!"));
      return;
    }

    try {
      dispatch(loginPending());

      const response = await loginFetch.post("/login", { username, password });
      console.log(response)

      if (!response.data || !response.data.data || !response.data.data.token) {
        dispatch(loginFailure("Credenciais inválidas."));
        return;
      }
  
    const { token, user } = response.data.data;
  

      dispatch(loginSuccess(user));
      localStorage.setItem("token", token);
      loginFetch.defaults.headers.Authorization = `Bearer ${response.token}`;
      navigate("/home");
    } catch (err) {
      dispatch(
        loginFailure(err.response?.response?.message || "Erro ao conectar ao servidor.")
      );
    }
  }, [username, password, dispatch, navigate]);

  return (
    <div className="h-screen w-screen bg-black bg-opacity-60 flex items-center justify-center">
      <div className="bg-white p-6 w-[350px] rounded-md shadow-md">
        <h1 className="font-wallpoet text-center uppercase text-2xl mb-6">
          Inhambo <span className="text-blue-500">Imóveis</span>
        </h1>

        {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="username" className="sr-only">username</label>
            <input
              id="username"
              type="email"
              name="username"
              placeholder="username"
              value={username}
              onChange={handleInputChange}
              className="w-full h-10 px-3 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={handleInputChange}
              className="w-full h-10 px-3 bg-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-10 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <p className="text-sm text-center">
            Não tens conta?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Cadastrar-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
