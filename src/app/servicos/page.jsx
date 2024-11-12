import Link from "next/link";

export default function servicos() {
  return (
    <main className="w-screen h-fit pb-10">
      <section className="max-w-screen-lg mt-20 mx-auto grid grid-cols-[65%_35%] ">
        <div className="flex flex-col justify-between min-h-[100vh]  ">
          <div className="max-w-[90%] mx-auto h-fit rounded-3xl">

            <img
              className="max-w-full mx-auto h-auto rounded-3xl"
              src="./encanador.png"
              alt=""
            />
            <p className="pt-14">
              João Silva é um profissional dedicado com mais de 10 anos de
              experiência em serviços de manutenção residencial e comercial.
              Especializado em reparos hidráulicos e reformas gerais, João traz
              um olhar técnico e detalhista a cada trabalho, garantindo a
              satisfação dos clientes. Com uma abordagem personalizada e
              comprometida com a qualidade, ele é uma peça fundamental no
              projeto Mão na Roda, conectando pessoas que precisam de soluções
              práticas e eficientes para suas casas ou negócios. João se destaca
              por sua pontualidade, competência e dedicação em cada serviço
              realizado.
            </p>
          </div>
          {/* <div className="h-fit max-w-[90%] mx-auto flex flex-col my-8 justify-evenly"> */}

          <div className="w-[90%] mx-auto">
            <h4 className="text-xl font-semibold">Qualificações</h4>
            <ul className="flex flex-wrap gap-4 mt-2">
              <li className="bg-blue-100 p-2 rounded-md font-bold">
                Curso de Manutenção Predial
              </li>
              <li className="bg-blue-100 p-2 rounded-md font-bold">
                Certificação em Segurança no Trabalho
              </li>
              <li className="bg-blue-100 p-2 rounded-md font-bold">
                Curso de Instalação Elétrica Residencial{" "}
              </li>
              <li className="bg-blue-100 p-2 rounded-md font-bold">
                Formação em Hidráulica{" "}
              </li>
              <li className="bg-blue-100 p-2 rounded-md font-bold">
                Workshop de Sustentabilidade e Eficiência Energética
              </li>
              <li className="bg-blue-100 p-2 rounded-md font-bold">
                Certificado de Atendimento ao Cliente
              </li>
            </ul>
            {/* </div> */}
          </div>

        </div>


        <div className="col-start-2 h-fit">
          <div className="rounded-xl w-[90%] flex flex-col justify-evenly items-center  mx-auto shadow h-96">
            <img className="rounded-full max-w-20" src="./img181.jpg" alt="" />

            <div className=" container flex flex-col justify-between max-w-fit items-center max-h-20">
              <h1 className="text-4xl font-semibold text-AzulMaisForte mb-2">
                João Silva{" "}
              </h1>
              <p className="text-base text-gray-600 ">Encanador</p>
            </div>
            <div className="w-[60%] p-1 h-fit flex items-center justify-evenly">
              <a href="">
                <img
                  className="w-8 h-8"
                  src="./icones/icone_facebook.svg"
                  alt=""
                />
              </a>
              <a href="">
                <img className="w-8" src="./icones/icone_youtube.svg" alt="" />
              </a>
              <a href="">
                <img
                  className="w-8"
                  src="./icones/icone_instagram.svg"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  className="w-8"
                  src="./icones/icone_twitter.svg"
                  alt=""
                />
              </a>
            </div>

            <Link
              href="/buy"
              className="bg-AzulMaisForte w-[80%] px-0 rounded-full hover:text-blue-700 text-white text-base text-center font-bold  py-2"
            >
              Contratar
            </Link>
          </div>

          <div className="rounded-xl w-[90%] flex flex-col bg-AzulMaisForte  justify-evenly items-center  mt-14 mx-auto shadow h-fit">
            <div className="w-[90%] flex justify-around flex-col h-[360px] items-center pt-2 pb-6">
              <div className=" h-14 w-[90%] flex  flex-col justify-center text-center  bg-Amarelo rounded-full">
                {" "}
                <h2 className="font-bold">Avaliação Geral</h2>

              </div>
              {/* avaliações estrelas */}
              <div className=" flex flex-col items-center">
                <div className="flex h-7 w-fit">
                  <img className="mx-1" src="/icones/icone_star.png" alt="" />
                  <img className="mx-1" src="/icones/icone_star.png" alt="" />
                  <img className="mx-1" src="/icones/icone_star.png" alt="" />
                  <img className="mx-1" src="/icones/icone_star.png" alt="" />
                  <img className="mx-1" src="/icones/icone_halfstar.png" alt="" />


                </div>
                <div className="text-center text-white">
                  <p className="text-xs">4,5 de 5</p>
                  <p className="text-sm">50 avaliações</p>

                </div>
              </div>

              <div className="flex  justify-between w-[90%]  ">
                <div className="flex flex-col px-2 w-20 text-center items-center">
                  <img
                    className="max-w-9"
                    src="./icones/icone_docu_check_branco.svg"
                    alt=""
                  />
                  <p className="text-[12px] text-white leading-relaxed">
                    Qualificações verificadas
                  </p>
                </div>
                <div className="flex flex-col text-center px-2 w-20 items-center">
                  <img
                    className="max-w-9"
                    src="./icones/icone_50_branco.svg"
                    alt=""
                  />
                  <p className="text-[12px] text-white leading-relaxed">
                    50 Serviços
                  </p>
                </div>
                <div className="flex flex-col text-center px-2 w-20 items-center">
                  <img
                    className="max-w-9"
                    src="./icones/icone_perfil_branco.svg"
                    alt=""
                  />
                  <p className="text-[12px] text-white leading-relaxed">
                    Perfil verificado
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className="rounded-xl w-[90%] flex flex-col bg-CinzaBg  justify-evenly items-center  mt-14 mx-auto shadow h-fit">
            <div className="w-[90%] flex justify-around flex-col h-fit items-center pt-2 pb-6">
              <Link
                href="/buy"
                className="bg-AzulMaisForte h-11 my-7 w-[80%] px-0 rounded-full hover:text-blue-700 text-white text-base text-center font-bold  py-2"
              >
                Galeria
              </Link>
              <Link
                href="/buy"
                className="bg-AzulMaisForte h-11 w-[80%] px-0 rounded-full hover:text-blue-700 text-white text-base text-center font-bold  py-2"
              >
                Avaliações
              </Link>
              {/* <Link
                href="/buy"
                className="bg-AzulMaisForte h-11 w-[80%] px-0 rounded-full hover:text-blue-700 text-white text-base text-center font-bold  py-2"
              >
                Ver horários disponíveis
              </Link> */}




            </div>

          </div>

        </div>
      </section>
      <section className="flex max-w-screen-lg items-center bg-CinzaBg mt-6 mx-auto h-fit flex-col">
        <div className="flex w-24 my-5 h-5">
          <div className="w-5 h-[10px] mx-[2px] border-AzulMaisForte border-b-[1px]"></div>
          <p className="text-sm  mx-[2px] font-semibold text-AzulMaisForte">Galeria</p>
        </div>
        <div className="text-center w-fit">
          <h1 className="font-bold text-3xl">Alguns trabalhos de Manuel Silva</h1>

        </div>
        <div className="max-w-[90%] my-5 flex-wrap container mx-auto h-3/5 flex justify-evenly">
          <img
            className="w-64 my-3 h-auto rounded-sm "
            src="./casal.png"
            alt=""
          />{" "}
          <img
            className="w-64 my-3 h-auto rounded-sm "
            src="./encanador_com_tubo.png"
            alt=""
          />
          <img
            className="w-64 my-3 h-auto rounded-sm "
            src="./encanador_com_tubo.png"
            alt=""
          />
          <img
            className="w-64 my-3 h-auto rounded-sm "
            src="./encanador_com_tubo.png"
            alt=""
          />
          <img
            className="w-64 my-3 h-auto rounded-sm "
            src="./encanador_com_tubo.png"
            alt=""
          />
          <img
            className="w-64 my-3 h-auto rounded-sm "
            src="./encanador_com_tubo.png"
            alt=""
          />
        </div>
      </section>
      <section className="flex max-w-screen-lg items-center mt-6 mx-auto h-screen flex-col">
        <div className="flex w-24 my-5 h-5">
          <div className="w-5 h-[10px] mx-[2px] border-AzulMaisForte border-b-[1px]"></div>
          <p className="text-sm  mx-[2px] font-semibold text-AzulMaisForte">Avaliações</p>
        </div>
        <div className="text-center w-fit">
          <h1 className="font-bold text-3xl">Veja o que os clientes acham de Manuel! </h1>

        </div>
        <div className="w-full flex flex-col h-fit justify-around ">
          <div className="rounded-xl w-[90%] my-1 flex flex-col justify-evenly items-start  mx-auto shadow h-64">
            <div className="w-64 ms-5 flex h-28" >
              <div className="w-[40%] flex items-center justify-between flex-col">
                <img className="rounded-full max-w-20" src="./img181.jpg" alt="" />
                <div className=" flex items-center">
                  <img className="w-4 mx-[2px] h-auto" src="/icones/icone_star.png" alt="" />
                  <img className="w-4 mx-[2px] h-auto" src="/icones/icone_star.png" alt="" />
                  <img className="w-4 mx-[2px] h-auto" src="/icones/icone_star.png" alt="" />
                  <img className="w-4 mx-[2px] h-auto" src="/icones/icone_star.png" alt="" />

                </div>
              </div>
              <div className="w-[60%]">
                <div className="h-[75%] flex flex-col items-center justify-between mt-8">
                  <h1 className="font-semibold text-2xl text-CinzaTexto">Manoel Silva</h1>
                  <p className="text-sm italic">Há 2 semanas</p>
                  <h2 className="font-bold text-base">Ótimo serviço</h2>
                </div>

              </div>
            </div>
            <div>
              <div className="h-16 ms-5">
                <p>Testei por 3 semanas antes de deixar minha avaliação e vou falar tudo o que  gostaria de ter encontrado quando estava procurando para comprar:O  reconhecimento de voz não é incrível, funciona 90% do tempo mas quando  não funciona é bem frustrante porque, geralmente, falha quando estamos  do lado dela.</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl w-[90%] my-2 flex flex-col justify-evenly items-start  mx-auto shadow h-64">
            <div className="w-64 ms-5 flex h-28" >
              <div className="w-[40%] flex items-center justify-between flex-col">
                <img className="rounded-full max-w-20" src="./img181.jpg" alt="" />
                <div className=" flex items-center">
                  <img className="w-4 mx-[2px] h-auto" src="/icones/icone_star.png" alt="" />
                  <img className="w-4 mx-[2px] h-auto" src="/icones/icone_star.png" alt="" />
                  <img className="w-4 mx-[2px] h-auto" src="/icones/icone_star.png" alt="" />
                  <img className="w-4 mx-[2px] h-auto" src="/icones/icone_star.png" alt="" />

                </div>
              </div>
              <div className="w-[60%]">
                <div className="h-[75%] flex flex-col items-center justify-between mt-8">
                  <h1 className="font-semibold text-2xl text-CinzaTexto">Manoel Silva</h1>
                  <p className="text-sm italic">Há 2 semanas</p>
                  <h2 className="font-bold text-base">Ótimo serviço</h2>
                </div>

              </div>
            </div>
            <div>
              <div className="h-16 ms-5">
                <p>Testei por 3 semanas antes de deixar minha avaliação e vou falar tudo o que  gostaria de ter encontrado quando estava procurando para comprar:O  reconhecimento de voz não é incrível, funciona 90% do tempo mas quando  não funciona é bem frustrante porque, geralmente, falha quando estamos  do lado dela.</p>
              </div>
            </div>
          </div>
        </div>
        
        

      </section>

    </main>
  );
}
