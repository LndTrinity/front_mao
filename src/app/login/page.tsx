"use client"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useClienteStore } from "@/context/cliente"

type Inputs = {
  email: string
  senha: string
  manter: boolean
}

export default function login() {
  const { register, handleSubmit } = useForm<Inputs>()
  const { logaCliente } = useClienteStore()
  const router = useRouter()

  async function verificaLogin(data: Inputs) {
    // console.log(data)
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/login`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ email: data.email, senha: data.senha })
    })
    //    console.log(response)
    const dados_ = await response.json()
    console.log(dados_.token)
    if (response.status == 200) {
      const response_ = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/dados`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${dados_.token}`          
        },
        method: "POST",
        body: JSON.stringify({ email: data.email })        
      }
    ) 
    const dadosUsuario = await response_.json()
    const dadosUsuario2 = {
      ...dadosUsuario,
      token: dados_.token
    }
           
      // console.log(dadosUsuario)
      // alert("Olá " + dados.nome)
      // console.log(dados)

      // "coloca" os dados do cliente no contexto
      
      logaCliente(dadosUsuario2)

      // se indicou que quer manter conectado, vamos salvar o id em localStorage
      if (data.manter) {
        localStorage.setItem("client_key", dados_.id)
        localStorage.setItem("client_token", dados_.token)
      } else {
        if (localStorage.getItem("client_key")) {
          localStorage.removeItem("client_key")
          localStorage.removeItem("client_token")
        }
      }

      router.push("/")
    } else {
      alert("Erro... Login ou Senha incorretos")
    }
  }
  return (
    <main className="bg-[url('../../public/imagem_profissional.png')]  bg-no-repeat bg-right-bottom   ">


      <div className="background-image"></div>

      <div className="flex justify-center items-center min-h-screen p-4">

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">

          <h2 className="text-gray-200 text-center text-2xl font-bold mb-6">
            Mão na Roda
          </h2>
          <form onSubmit={handleSubmit(verificaLogin)}>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register("email")}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              {...register("senha")}
              required
            />
            <div className="flex justify-between items-center mb-4">
              <label className="text-gray-200 flex items-center">

                <input type="checkbox" className="mr-2"
                  {...register("manter")}
                /> Lembrar-me por 14 dias

              </label>
              <a href="#" className="text-yellow-600 text-sm hover:text-yellow-500"
              >Esqueceu a senha?</a            >
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
              >Cadastre-se aqui</a            >
            </p>
          </div>
        </div>
      </div>

    </main>
  )
}
