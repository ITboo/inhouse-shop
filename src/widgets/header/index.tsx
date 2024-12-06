import { Heart, Moon, Search, ShoppingCart, UserRound } from "lucide-react";
import Logo from "../../shared/ui/logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-[20px]">
      <Logo />
      <nav>
        <ul className="flex items-center gap-[75px]">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div className="flex items-center gap-[45px]">
        <UserRound />
        <Search />
        <Heart />
        <Link to={"/cart"} className="relative">
          <ShoppingCart />
          <span className="absolute top-2/3 right-1/2 bg-red-400 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
            0
          </span>
        </Link>

        <Moon />
      </div>
    </header>
  );
};

export default Header;
