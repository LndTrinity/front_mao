"use client"
import Link from "next/link";
import { PropostaI } from "@/utils/types/proposta";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from "sonner";
import { useClienteStore } from "@/context/cliente";



type inputs = {
    termo: string
}
type InputPesquisaProps = {
    setCarros: React.Dispatch<React.SetStateAction<PropostaI[]>>
   
}

export function Header() {
    const {register, handleSubmit, reset} = useForm<inputs>()
    const { cliente, deslogaCliente } = useClienteStore()

    function sairCliente(){
        deslogaCliente()

        if(localStorage.getItem("client_key")){
            localStorage.removeItem("client_key")
        }
        router.push("/login")
    }
  
    const router = useRouter()

    async function enviaPesquisa(data: inputs) {
        router.push(`/pesquisa?termo=${data.termo}`);

    }


    return (
        <header>
            {/* Main Header */}
            <nav className="bg-white border-gray-200 shadow-lg">
                <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center rtl:space-x-reverse">
                        <img src="./icones/logo_azul_e_cinzas_e_nome.svg" className="" alt="logo" />
                        <span className="text-3xl font-semibold whitespace-nowrap dark:text-black"></span>
                    </Link>
                    

                    {/* Login, Cadastro e WhatsApp */}
                    { cliente.nome ? 
                      <>

                      <div className="flex items-center space-x-6 rtl:space-x-reverse">
                      <span className="text-AzulBase text-lg font-bold hover:underline">
                          {cliente.nome}
                        </span>
                        <Link href="/perfil" className="font-bold text-AzulBase dark:text-blue-500 hover:underline">
                          Meu Perfil
                        </Link>
          
                        <span className="cursor-pointer font-bold text-AzulBase dark:text-blue-500 hover:underline"
                          onClick={sairCliente}>
                          Sair
                        </span>
                      </div>
                    </>
                    :
                    <div className="flex max-w-xl justify-between container items-center">
                        <Link href="/login" className="bg-white-400 text-black font-bold text-base hover:text-blue-700 py-2 ms-72 px-4 rounded-lg">
                            LOGIN
                        </Link>
                        <Link href="/cadastro" className="bg-Amarelo w-44 px-0 rounded-full hover:text-blue-700 text-black text-xl text-center font-bold py-2">
                            Cadastre-se
                        </Link>
                    </div> }
                </div>
            </nav>

            {/* Navigation Menu */}
            <div className="w-screen bg-gray-100">
              {/* Imagem de fundo à esquerda */}
                  


                <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                    <ul className="flex justify-center space-x-8 py-4">
                        <li><Link href="/" className="text-gray-700 hover:text-blue-700 font-bold">Principal</Link></li>
                        <li><Link href="/" className="text-gray-700 hover:text-blue-700 font-bold">Suporte</Link></li>
                        <li><Link href="/servicos" className="text-gray-700 hover:text-blue-700 font-bold">Serviços</Link></li>
                    </ul>
                    
                    <form className="max-w-xl container rounded-full"
                        onSubmit={handleSubmit(enviaPesquisa)}>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full max-h-10 py-4 rounded-full ps-10 text-sm text-gray-900 border border-gray-300 bg-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Pesquisar"
                                required
                                {...register("termo")}
                            />
                            <button type="submit" className="absolute right-0 top-0 h-full px-4 bg-transparent border-l border-gray-300 rounded-r-full focus:ring-4 focus:outline-none focus:ring-blue-300">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </button>
                            </div>
                    </form>
                </div>
              </div>
        </header>

        
    );
}
