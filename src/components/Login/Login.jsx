const Login = ({ onSetIsLogado }) => {
    const handleLogar = () => {
        onSetIsLogado(true);
        console.log("Login clicked");
    }
    return (
        <div className="h-[100vh] flex items-center justify-center flex-col">
            <h1 className="text-4xl mb-10 font-bold">Login</h1>
            <form className="flex flex-col gap-4 w-[300px]">
                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <button className="mt-10 w-full py-2 rounded-sm text-white cursor-pointer bg-blue-500 font-bold" onClick={handleLogar}>Login</button>
            </form>
        </div>
    )
}
export default Login;