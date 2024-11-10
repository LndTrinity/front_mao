import "./globals.css";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Mão na roda",
  description: "Plataforma que conecta profissionais e clientes",
  keywords: [""],
};

export default function RootLayout({children,
  }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}       
      </body>
    </html>
  );
}
