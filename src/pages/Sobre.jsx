import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import logo_nexora from "../assets/logo.png";

const Sobre = () => {
    return (
        <div className="bg-gray-50">
            <Header />
            <div className="w-[80%] m-auto flex flex-col justify-center items-center mt-10 text-center">
                <img className="w-[300px]" src={logo_nexora} alt="Logo Nexora" />
                <p className="text-[18px] mt-10">
                    Na Nexora, transformamos a forma como buffets gerenciam seus eventos e se conectam com o público. Somos uma empresa especializada no desenvolvimento de sistemas inteligentes para buffets, oferecendo soluções completas que facilitam agendamentos, controle de reservas, gestão de clientes e muito mais.
                </p>
                <p className="text-[18px] mt-2">
                    Além da tecnologia, também cuidamos da divulgação do seu buffet, criando estratégias digitais que aumentam sua visibilidade e atraem mais clientes. Nosso foco é unir automação com marketing, ajudando buffets a crescerem de forma organizada, moderna e eficiente.
                </p>
                <p className="text-[18px] mt-2">
                    Combinamos inovação, simplicidade e resultados para que você possa focar no que realmente importa: oferecer experiências inesquecíveis aos seus clientes.
                </p>
            </div>

            {/* Seção de Cards */}
            <div className="w-[80%] m-auto mt-14 mb-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Card 1 - Valores */}
                <div className="bg-white shadow-sm rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-3 text-[#022946]">Valores</h3>
                    <p className="text-[16px] text-gray-700">
                        Ética, transparência, comprometimento com resultados e foco total no sucesso dos nossos clientes.
                    </p>
                </div>

                {/* Card 2 - Missão */}
                <div className="bg-white shadow-sm rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-3 text-[#022946]">Missão</h3>
                    <p className="text-[16px] text-gray-700">
                        Oferecer soluções tecnológicas e estratégias de marketing que impulsionem o crescimento de buffets de todos os portes.
                    </p>
                </div>

                {/* Card 3 - Visão */}
                <div className="bg-white shadow-sm rounded-2xl p-6 hover:shadow-md transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-3 text-[#022946]">Visão</h3>
                    <p className="text-[16px] text-gray-700">
                        Ser referência nacional em tecnologia para buffets, entregando inovação com propósito e excelência.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Sobre;
