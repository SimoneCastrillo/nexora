  import { Link } from "react-router-dom";

  function CardBuffet({ buffet }) {
    function formatarTelefone(telefone) {
      if (!telefone) return '';
    
      const apenasNumeros = telefone.replace(/\D/g, '');
    
      if (apenasNumeros.length === 12) {
        return apenasNumeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      }
      if (apenasNumeros.length === 11) {
        return apenasNumeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
      }
    
      if (apenasNumeros.length === 10) {
        return apenasNumeros.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
      }
    
      return telefone;
    }
    return (
      <a href={`https://${buffet.buffetId.urlSite}`} target="_blank" key={buffet.id} className="bg-white rounded-lg shadow-sm p-5">
        <img
          src={`data:image/jpeg;base64,${buffet.buffetId.imagem}`}
          alt={buffet.buffetId.nome}
          className="w-full h-[200px] object-cover rounded-t-lg"
        />
        <div className="flex flex-col justify-between gap-2 w-full">
        <h2 className="text-xl font-bold text-center">{buffet.buffetId.nome}</h2>
        <h3 className="text-sm font-bold">{formatarTelefone(buffet.buffetId.telefone)}</h3>
        <p className="text-gray-600 break-words">{buffet.buffetId.descricao}</p>
        <p className="text-sm  text-center">{`${buffet.rua}, ${buffet.numero} - ${buffet.cidade} - ${buffet.estado}`}</p>
        </div>

      </a>
    );
  }

  export default CardBuffet;
