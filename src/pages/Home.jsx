import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { MdSearch } from "react-icons/md";
import CardBuffet from "../components/CardBuffet/CardBuffet";
import Footer from "../components/Footer/Footer";
import Filtro from "../components/Filtro/Filtro";
import { buscarBuffets } from "../api/api";

function Home() {
  
  const [json_bufet, setJson_bufet] = useState([])
  const [buffetsExibir, setBuffetsExibir] = useState([]);
  const [nomePesquisa, setNomePesquisa] = useState('');
  const [isFiltroAberto, setIsFiltroAberto] = useState(false);
  const handleResultPesquisa = () => {
    const buffetsFiltrados = json_bufet.filter((buffet) =>
      buffet.buffetId.nome.toLowerCase().includes(nomePesquisa.toLowerCase())
    );
    return buffetsFiltrados;
  }
  useEffect(() => {
    const asyncBuffet = async () => {
      const buffets = await buscarBuffets();
      setJson_bufet(buffets.data);
      setBuffetsExibir(buffets.data);
      console.log("buffets", buffets.data);
    };
    asyncBuffet();
  }, []);
  
  return (
    <div className="bg-gray-50">
      <Header />
      <div className="w-[80%]  m-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl text-[#022946] font-bold text-center mt-10">Bem-vindo ao Nexora!</h1>
        <p className="text-center mt-5">Aqui você encontrará os melhores buffets para o seu evento.</p>
        <div className='w-full mt-10'>

          <div className="flex w-full gap-2 items-center justify-center">
            <div className="flex w-full justify-center items-center">
              <input type="text" placeholder="Procure por nome do buffet"
                value={nomePesquisa}
                onChange={(e) => setNomePesquisa(e.target.value)}
                className="classNameInput w-[95%] rounded-l-md bg-[#f2f2f2] px-4 py-2 outline-none border border-gray-300" />
              <button
                onClick={() => {
                  setBuffetsExibir(handleResultPesquisa())
                }}
                className="bg-[#022946] text-white font-bold text-[14px] flex justify-center items-center w-[5%] py-[10px] rounded-tr-md rounded-br-md cursor-pointer"><MdSearch size={25} /></button>
            </div>
          </div>
          <div className="flex justify-end relative">
            <button
              onClick={() => setIsFiltroAberto(!isFiltroAberto)}
              className="my-4 text-blue-500 underline text-[14px] px-[2px] cursor-pointer hover:text-blue-700">
              Busca por outros filtros
            </button>
            {isFiltroAberto && (
              <Filtro onBuffets={json_bufet} onSetExibirBuffets={setBuffetsExibir} />
            )}
          </div>
        </div>
        <div className="grid grid-cols-3 pb-2 h-[400px] overflow-y-auto gap-4 mb-10">
          {buffetsExibir.map((buffet) => (
            <CardBuffet key={buffet.id} buffet={buffet} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
