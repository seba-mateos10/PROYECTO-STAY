import Brand from "../brand/Brand";
import CartWidget from "../../common/cartWidget/CartWidget";
import MenuList from "../../pages/MenuList";

const NavBar = () => {
  return (
    <header>
      <div className="containerBrand">
        <Brand />
      </div>

      <nav className="containerItemList">
        <MenuList
          itemUno="Remeras"
          itemDos="Pantalones"
          itemTres="Abrigos"
          itemCuatro="Zapatillas"
        />
      </nav>

      <div className="containerCart">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
