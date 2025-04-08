function Filtro() {
    const styly_inputs = "rounded-tl-md rounded-bl-md bg-[#f2f2f2] px-4 py-2 outline-none text-[12px]";
    return (
        <div className="absolute py-2 px-4 top-8 mt-2 flex flex-col gap-4 right-0 w-[300px] bg-white rounded-lg shadow-sm z-10">
            <h3 className="text-[12px]">Filtrar por:</h3>
            <input className={styly_inputs} type="text" placeholder="estado" />
            <input className={styly_inputs} type="text" placeholder="cidade" />
            <input className={styly_inputs} type="text" placeholder="capacidade" />
            <button className="bg-[#022946] rounded-lg text-white font-bold py-1 text-[14px] cursor-pointer">Filtrar</button>
        </div>
    );
}
export default Filtro;
