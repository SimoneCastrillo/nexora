function Footer() {
    return (
        <footer className="w-full h-[100px] bg-[#022946] flex flex-col justify-center items-center mt-10">
            <div className="w-[80%] flex justify-between items-center">
                <img
                    src="/src/assets/logo.png"
                    alt="Logo"
                    className="h-8 filter invert brightness-0"
                />
            </div>
            <p className="text-white text-center text-[12px] mt-2">Todos os direitos reservados &copy; 2025</p>
        </footer>
    );
}
export default Footer;