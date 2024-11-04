import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        AzulForte: '#084A83',
        AzulMaisForte:"#183A5D",
        Amarelo:"#F9DA75",
        AzulHr:"#264462",
        CinzaBg:"#F8F8F8",
        CinzaTexto:"#4B5563",
        Azul2:"#374151",
        Cinza2: "#1F2937"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
