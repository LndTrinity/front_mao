import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-AzulForte flex justify-center w-full">
      <div className="container flex">
        <div className="flex mx-auto w-full">
          <div className="w-2/3 min-h-full">
            {/* cards */}
            <div className="grid grid-cols-2 h-5/6">
              <div className="flex flex-col h-full justify-evenly">
                <div className="max-w-72">
                  <Image
                    src="/icones/logo_branco.svg"
                    alt="Logo"
                    width={200}
                    height={50}
                  />
                </div>
                <div className="max-w-72 text-gray-200">
                  <p>
                    Conectando você aos melhores profissionais para serviços
                    rápidos e confiáveis. Seu lar em boas mãos!
                  </p>
                </div>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook">
                    <Image
                      src="/icones/facebook_branco_circulo.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <Image
                      src="/icones/youtube_branco_circulo.svg"
                      alt="YouTube"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <Image
                      src="/icones/instagram_branco_circulo.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-col text-gray-200 h-full justify-evenly">
                <div className="flex items-center">
                  <Image
                    src="/icones/icone_mail.svg"
                    alt="Mail"
                    width={24}
                    height={24}
                  />
                  <p className="ps-2">suporte@maonaroda.com</p>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/icones/icone_localizacao.svg"
                    alt="Location"
                    width={24}
                    height={24}
                  />
                  <p className="ps-2">Pelotas, RS - Sede</p>
                </div>
                <div className="flex items-center">
                  <Image
                    src="/icones/icone_whats.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col text-center">
                    <p>Whats App</p>
                    <p className="ps-2">(53) 99643 - 0964</p>
                  </div>
                </div>
              </div>
            </div>

            {/* copyright */}
            <div className="flex items-center h-1/6 text-gray-200 border-t border-t-AzulHr">
              <p>Copyright © 2024. a senac_rs_project. All rights reserved.</p>
            </div>
          </div>
          <div className="w-1/3 h-full">
            <Image
              className="max-h-96"
              src="/encanador_footer.png"
              alt="Encanador"
              width={384}
              height={384}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
