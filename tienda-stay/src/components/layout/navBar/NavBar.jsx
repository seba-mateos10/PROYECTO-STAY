import Brand from "../brand/Brand";
import CartWidget from "../../common/cartWidget/CartWidget";
import MenuList from "../../pages/menuList/MenuList";

const NavBar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>

      <nav className="containerMenuList">
        <MenuList itemUno="Remeras" itemDos="Abrigos" itemTres="Zapatillas" />
      </nav>

      <div className="containerCart">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
