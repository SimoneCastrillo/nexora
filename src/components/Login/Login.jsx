import { useState } from "react";
import { logar } from "../../api/api";
import { toast } from "react-toastify";

const Login = ({ onSetIsLogado }) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const handleLogar = () => {
        const usuario = {
            email,
            senha
        };

        logar(usuario)
            .then((response) => {
                console.log(response.data);
                toast.success("Login realizado com sucesso!", {
                    autoClose: 600
                });
                sessionStorage.setItem("token", response.data.token);
                onSetIsLogado(true);
            })
            .catch((error) => {
                toast.error("Login deu erro!");
                console.error(error);
            });
        // onSetIsLogado(true);
    }

    return (
        <div className="h-[100vh] flex items-center justify-center flex-col">
            <h1 className="text-4xl mb-10 font-bold">Login</h1>
            <div className="flex flex-col gap-4 w-[300px]">
                <input type="email  " placeholder="E-mail" onChange={(e)=> setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" onChange={(e)=> setSenha(e.target.value)} />
                <button className="mt-10 w-full py-2 rounded-sm text-white cursor-pointer bg-blue-500 font-bold" onClick={handleLogar}>Login</button>
            </div>
        </div>
    )
}
export default Login;