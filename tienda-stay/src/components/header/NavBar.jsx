import Brand from "./Brand";
import CartWidget from "./CartWidget";
import MenuList from "./ItemListContainer/MenuList";

const NavBar = () => {
    return(
        <header>
            <div className="containerBrand">
                <Brand/>
            </div>

            <nav className="containerItemList">
                <MenuList
                itemUno = "Remeras"
                itemDos = "Pantalones"
                itemTres = "Abrigos"
                itemCuatro = "Zapatillas"
                />
            </nav>

            <div className="containerCart">
            <CartWidget />
            </div>

        </header>
    )
}

export default NavBar;