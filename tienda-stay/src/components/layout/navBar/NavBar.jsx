import { Brand } from "../brand/Brand";
import { CartWidget } from "../../common/cart/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <header>
        <Link to={"/"} className="containerBrand">
          <Brand />
        </Link>

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
          <CartWidget />
        </div>
      </header>
    </>
  );
};
