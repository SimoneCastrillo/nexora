import { Link } from "react-router-dom";

function CardBuffet({ buffet }) {
  return (
    <Link to={buffet.link} key={buffet.id} className="bg-white rounded-lg shadow-sm p-5">
      <img src={buffet.image} alt={buffet.name} className="w-full h-[200px] object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-2">{buffet.name}</h2>
      <p className="text-gray-600 my-3">{buffet.description}</p>
      <p className="text-[#022946] font-bold text-[14px]">{buffet.endereco}</p>
    </Link>
  );
}

export default CardBuffet;
