import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Planos = () => {
    return (
        <div className="bg-gray-50">
            <Header />
            <div className="flex flex-col h-[80vh] items-center gap-8 p-4">
                <h1 className="text-4xl font-bold text-[#022946] mt-4">Planos</h1>

                <div className="flex flex-col md:flex-row gap-6 mt-6 items-start">
                    <div className="bg-white shadow-md rounded-2xl p-6 w-full md:w-[300px]  flex flex-col gap-5 border border-gray-200">
                        <div>
                            <h2 className="text-2xl font-semibold text-[#022946] mb-4">Plano de divulgação</h2>
                            <p className="text-gray-600 mb-6 text-sm">
                                Indicado para buffets que desejam aumentar sua visibilidade. Nós cuidamos da divulgação completa do seu negócio dentro do nosso sistema e em nossos canais de promoção.
                            </p>
                            <ul className="text-sm text-gray-700 list-disc pl-5">
                                <li>Divulgação no nosso sistema</li>
                                <li>Alcance de novos clientes</li>
                                <li>Presença nos nossos canais e redes sociais</li>
                            </ul>

                        </div>
                        <button className="bg-[#022946] font-bold text-white px-4 py-2 rounded-lg hover:bg-[#034066] transition mt-4">
                            Adquirir agora
                        </button>
                    </div>
                    <div className="bg-[#022946] shadow-xl rounded-2xl p-6 w-full md:w-[300px]  flex flex-col gap-5 border border-gray-200">
                        <div>
                            <h2 className="text-2xl font-semibold text-[#ffff] mb-4">Plano Sistema</h2>
                            <p className="text-gray-200 mb-6 text-sm">
                                Perfeito para buffets que desejam dar um passo à frente. Criamos um sistema personalizado para gerenciar reservas, eventos e clientes — além de cuidar da divulgação completa para atrair mais público.
                            </p>
                            <ul className="text-sm text-gray-300 list-disc pl-5">
                                <li>Criação de sistema personalizado</li>
                                <li>Gestão de reservas e eventos</li>
                                <li>Divulgação na nossa plataforma</li>
                                <li>Suporte dedicado</li>
                            </ul>

                        </div>
                        <button className="bg-[#0071c8] font-bold text-white px-4 py-2 rounded-lg hover:bg-[#034066] transition mt-4">
                            Adquirir agora
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Planos;
