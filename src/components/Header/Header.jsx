import logo_nexora from "../../assets/logo.png";
import { Link } from "react-router-dom";

const style_links = "text-[15px] text-[#022946] hover:text-[#FFB800] transition duration-200 ease-in-out cursor-pointer hover:scale-120 font-bold";
function Header() {
    return (
      <div className="sticky bg-white top-0 z-50">
            <div className="w-[80%] m-auto flex justify-between items-center py-4 ">
                <Link to='/'><img src={logo_nexora} className="w-[150px]" alt="logo nexora" /></Link>
                <div className="flex gap-8">
                    <Link className={style_links} to="/">Buffets</Link>
                    <Link className={style_links} to="/sobre">Sobre nós</Link>
                    <Link className={style_links} to="/planos">Planos</Link>
                </div>
            </div>
      </div>
    );
  }
  
  export default Header;
  