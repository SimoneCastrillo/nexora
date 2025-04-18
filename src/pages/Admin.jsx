import { useState } from "react";
import Login from "../components/Login/Login";
import { cadastrarBuffet, cadastrarEndereco } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
    const [isLogado, setIsLogado] = useState(false);
    const [buffets, setBuffets] = useState([]);

    const [buffet, setBuffet] = useState({
        nome: "",
        imagem: null,
        plano: "",
        telefone: "",
        email: "",
        urlSite: ""
    });

    const [endereco, setEndereco] = useState({
        rua: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
        buffetId: ""
    });

    const [editandoIndex, setEditandoIndex] = useState(null);

    const handleBuffetChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "imagem") {
            setBuffet({ ...buffet, imagem: files[0] });
        } else {
            setBuffet({ ...buffet, [name]: value });
        }
    };

    const handleEnderecoChange = (e) => {
        setEndereco({ ...endereco, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("imagem", buffet.imagem);
        formData.append("descricao", buffet.descricao);
        formData.append("nome", buffet.nome);
        formData.append("email", buffet.email);
        formData.append("urlSite", buffet.urlSite);
        formData.append("telefone", buffet.telefone);
        formData.append("plano", buffet.plano);

        try {
            const responseBuffet = await cadastrarBuffet(formData);
            const buffetSalvo = responseBuffet.data;
            const buffetId = buffetSalvo.id;

            const enderecoComBuffetId = { ...endereco, buffetId };

            await cadastrarEndereco(enderecoComBuffetId);

            const novoBuffet = { ...buffet, id: buffetId };
            const novoEndereco = enderecoComBuffetId;

            if (editandoIndex !== null) {
                const atualizados = [...buffets];
                atualizados[editandoIndex] = { buffet: novoBuffet, endereco: novoEndereco };
                setBuffets(atualizados);
                setEditandoIndex(null);
            } else {
                setBuffets([...buffets, { buffet: novoBuffet, endereco: novoEndereco }]);
            }

            setBuffet({
                imagem: null,
                nome: "",
                telefone: "",
                descricao: "",
                urlSite: "",
                email: "",
                plano: ""
            });

            setEndereco({
                rua: "",
                numero: "",
                complemento: "",
                bairro: "",
                cidade: "",
                estado: "",
                cep: "",
                buffetId: ""
            });

            toast.success("Buffet e endereço cadastrados com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
            toast.error("Erro ao cadastrar buffet ou endereço.");
        }
    };

    return (
        <div>
            <ToastContainer />
            {!isLogado && <Login onSetIsLogado={setIsLogado} />}
            {isLogado && (
                <div className="min-h-screen p-4 bg-gray-50 flex flex-col items-center">
                    <div className="w-full max-w-md bg-white p-6 rounded shadow">
                        <h3 className="text-xl mb-4 font-bold text-center">
                            {editandoIndex !== null ? "Editar Buffet" : "Cadastrar Buffet"}
                        </h3>
                        <div className="flex flex-col gap-3">
                            <input type="file" name="imagem" onChange={handleBuffetChange} accept="image/*" />
                            <input type="text" name="nome" placeholder="Nome do Buffet" value={buffet.nome} onChange={handleBuffetChange} />
                            <input type="text" name="telefone" placeholder="Telefone" value={buffet.telefone} onChange={handleBuffetChange} />
                            <textarea
                                name="descricao"
                                placeholder="Descrição"
                                value={buffet.descricao}
                                onChange={handleBuffetChange}
                            />
                            <input type="email" name="email" placeholder="Email" value={buffet.email} onChange={handleBuffetChange} />
                            <input type="text" name="urlSite" placeholder="URL do Site" value={buffet.urlSite} onChange={handleBuffetChange} />
                            <select name="plano" value={buffet.plano} onChange={handleBuffetChange} className="border p-2 rounded">
                                <option value="">Plano</option>
                                <option value="BASICO">Básico</option>
                                <option value="PREMIUM">Premium</option>
                            </select>

                            <input type="text" name="cep" placeholder="CEP" value={endereco.cep} onChange={handleEnderecoChange} />
                            <input type="text" name="rua" placeholder="Rua" value={endereco.rua} onChange={handleEnderecoChange} />
                            <input type="text" name="numero" placeholder="Número" value={endereco.numero} onChange={handleEnderecoChange} />
                            <input type="text" name="complemento" placeholder="Complemento" value={endereco.complemento} onChange={handleEnderecoChange} />
                            <input type="text" name="bairro" placeholder="Bairro" value={endereco.bairro} onChange={handleEnderecoChange} />
                            <input type="text" name="cidade" placeholder="Cidade" value={endereco.cidade} onChange={handleEnderecoChange} />
                            <input type="text" name="estado" placeholder="Estado" value={endereco.estado} onChange={handleEnderecoChange} />

                            <button onClick={handleSubmit} className="mt-4 w-full py-2 rounded-sm text-white cursor-pointer bg-blue-500 font-bold">
                                {editandoIndex !== null ? "Salvar Alterações" : "Cadastrar"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
