import "./Style.css";
import "./components/pages/itemListContainer/ItemListContainer.css";
import "./components/common/ItemList.css";
import "./components/layout/navBar/NavBar.css";
import "./components/pages/itemDetail/ItemDetail.css";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import { AppRouter } from "./router/AppRouter";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
