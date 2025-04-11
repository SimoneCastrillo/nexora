import { useState } from "react";
import Login from "../components/Login/Login";

const Admin = () => {
    const [isLogado, setIsLogado] = useState(false);
    const [buffets, setBuffets] = useState([]);
    const [novoBuffet, setNovoBuffet] = useState({
        nome: "",
        descricao: "",
        imagem: "",
        capacidade: "",
        rua: "",
        bairro: "",
        cidade: "",
        estado: "",
        plano: "" // novo campo
    });
    const [editandoIndex, setEditandoIndex] = useState(null);

    const handleChange = (e) => {
        setNovoBuffet({ ...novoBuffet, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editandoIndex !== null) {
            const atualizados = [...buffets];
            atualizados[editandoIndex] = novoBuffet;
            setBuffets(atualizados);
            setEditandoIndex(null);
        } else {
            setBuffets([...buffets, novoBuffet]);
        }
        setNovoBuffet({
            nome: "",
            descricao: "",
            imagem: "",
            capacidade: "",
            rua: "",
            bairro: "",
            cidade: "",
            estado: "",
            plano: ""
        });
    };

    return (
        <div>
            {!isLogado && <Login onSetIsLogado={setIsLogado} />}
            {isLogado && (
                <div className="min-h-screen p-4 bg-gray-50 flex flex-col items-center">
                    <div className="w-full max-w-md bg-white p-6 rounded shadow">
                        <h3 className="text-xl mb-4 font-bold text-center">
                            {editandoIndex !== null ? "Editar Buffet" : "Cadastrar Buffet"}
                        </h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input type="text" name="nome" placeholder="Nome do Buffet" value={novoBuffet.nome} onChange={handleChange} />
                            <input type="text" name="descricao" placeholder="Descrição" value={novoBuffet.descricao} onChange={handleChange} />
                            <input type="text" name="imagem" placeholder="Imagem (URL)" value={novoBuffet.imagem} onChange={handleChange} />
                            <input type="text" name="capacidade" placeholder="Capacidade" value={novoBuffet.capacidade} onChange={handleChange} />
                            <input type="text" name="rua" placeholder="Rua" value={novoBuffet.rua} onChange={handleChange} />
                            <input type="text" name="bairro" placeholder="Bairro" value={novoBuffet.bairro} onChange={handleChange} />
                            <input type="text" name="cidade" placeholder="Cidade" value={novoBuffet.cidade} onChange={handleChange} />
                            <input type="text" name="estado" placeholder="Estado" value={novoBuffet.estado} onChange={handleChange} />

                            {/* SELECT DE PLANO */}
                            <select
                                name="plano"
                                value={novoBuffet.plano}
                                onChange={handleChange}
                                className="border p-2 rounded"
                            >
                                <option value="divulgacao">Plano de Divulgação</option>
                                <option value="sistema">Plano Sistema</option>
                            </select>

                            <button className="mt-4 w-full py-2 rounded-sm text-white cursor-pointer bg-blue-500 font-bold">
                                {editandoIndex !== null ? "Salvar Alterações" : "Cadastrar"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
