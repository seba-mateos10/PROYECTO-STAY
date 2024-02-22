import { Brand } from "../brand/Brand";
import { CartWidget } from "../../common/cart/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>

      <nav className="containerMenuList">
        <ul>
          <Link to="/">
            <li className="">Home</li>
          </Link>
          <Link to="/category/remeras">
            <li className="">Remeras</li>
          </Link>
          <Link to="/category/abrigos">
            <li className="">Abrigos</li>
          </Link>
          <Link to="/category/zapatillas">
            <li className="">Zapatillas</li>
          </Link>
        </ul>
      </nav>

      <div className="containerCart">
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};
