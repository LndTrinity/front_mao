"use client"
import { InputPesquisa } from "@/components/InputPesquisa";
import { PropostaI } from "@/utils/types/proposta";

import { useEffect, useState } from "react";
import { Toaster } from 'sonner'


export default function Home() {
  const [produtos, setProdutos] = useState<PropostaI[]>([])
  const [titulo, setTitulo] = useState("Produtos em destaque")


  let listaProdutos
  let mensagem
  
  
  useEffect(() => {

    
    
    mostraDestaque()
  }, []);

  async function mostraDestaque() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/produtos/destaques`);
    const dados = await response.json()
    setTitulo("Produtos em destaque")
    setProdutos(dados)
  }

  

  return (
    <main>

      <section className="max-w-screen-xl mx-auto">
        <h1 className="mb-5 mt-2 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          <span className="underline underline-offset-3 decoration-8 decoration-AzulBase dark:decoration-slate-800">
           {titulo}</span></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {listaProdutos}
        </div>
      </section>
      <Toaster position="top-center" richColors />
    </main>
  );
}
