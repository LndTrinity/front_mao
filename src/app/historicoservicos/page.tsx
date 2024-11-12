import ServicoCard from "@/components/ServicoCard"; // Importando o componente ServicoCard
import SocialMediaLinks from "@/components/SocialMediaLinks"; // Importando o componente SocialMediaLinks

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen">
        <ServicoCard /> {/* Usando o componente ServicoCard */}
        <SocialMediaLinks /> {/* Usando o componente SocialMediaLinks */}
      </div>
    </main>
  );
}
