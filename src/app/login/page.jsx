"use client";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_API}/usuarios/login`,
        {
          email,
          senha,
        }
      );
      console.log("Usuário logado:", response.data);
    } catch (error) {
      console.error("Erro ao logar:", error);
    }
  };

  return (
    <main className="bg-[url('../../public/imagem_profissional.png')] bg-no-repeat bg-right-bottom">
      <div className="background-image"></div>

      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-gray-200 text-center text-2xl font-bold mb-6">
            Mão na Roda
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <div className="flex justify-between items-center mb-4">
              <a
                href="#"
                className="text-yellow-600 text-sm hover:text-yellow-500"
              >
                Esqueceu a senha?
              </a>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-yellow-300 text-dark p-2 rounded hover:bg-yellow-400 transition"
            >
              Entrar
            </button>
          </form>
          <div className="text-center mt-8">
            <p className="text-gray-200">
              Não tem uma conta?
              <a
                href="cadastro.html"
                className="text-yellow-600 text-sm hover:text-yellow-500"
              >
                Cadastre-se aqui
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}