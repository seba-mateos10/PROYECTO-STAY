import { Brand } from "../brand/Brand";
import { CartWidget } from "../../common/cart/CartWidget";
import { Link } from "react-router-dom";
import { menuNavigation } from "../../../router/menuNavigation";

export const NavBar = () => {
  return (
    <>
      <header>
        <Link to={"/"} className="containerBrand">
          <Brand />
        </Link>

        <nav className="containerMenuList">
          <ul>
            {menuNavigation.map(({ id, text, path }) => (
              <Link className="categories" key={id} to={path}>
                {text}
              </Link>
            ))}
          </ul>
        </nav>

        <div className="containerCart">
          <CartWidget />
        </div>
      </header>
    </>
  );
};
