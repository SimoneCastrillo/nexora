import { Link } from "react-router-dom";

function CardBuffet({ buffet }) {
  return (
    <Link to={buffet.urlSite} key={buffet.id} className="bg-white rounded-lg shadow-sm p-5">
      <img
        src={`data:image/jpeg;base64,${buffet.imagem}`}
        alt={buffet.nome}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <h2 className="text-xl font-bold mt-2">{buffet.nome}</h2>
      {/* <p className="text-gray-600 my-3">{buffet.descricao}</p> */}
      <p>{`${buffet.endereco.rua}, ${buffet.endereco.numero} - ${buffet.endereco.cidade}`}</p>

    </Link>
  );
}

export default CardBuffet;
