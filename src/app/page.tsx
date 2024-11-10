"use client"
import { useState } from "react";
import {Home} from "./home/page";
import { PropostaI } from "@/utils/types/proposta";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";



export default function Page() {
  const [servico, setServicos] = useState<PropostaI[]>([])
  return (
    <main>
      
      <Home />
     
    </main>
  );
}
