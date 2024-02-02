import Brand from "./Brand";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
    return(
        <header>
            <div className="containerBrand">
                <Brand/>
            </div>

            <nav className="containerItemList">
                <ItemListContainer
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