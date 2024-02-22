import "./Style.css";
import "./components/pages/itemListContainer/ItemListContainer.css";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer";
import "./components/common/ItemList.css";
import "./components/layout/navBar/NavBar.css";
import { NavBar } from "./components/layout/navBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/common/cart/Cart";
import "./components/common/ItemDetail.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
