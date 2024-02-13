import "./Style.css";
import "./components/pages/itemListContainer/ItemListContainer.css";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import "./components/pages/itemListContainer/ItemList.css";
import "./components/layout/navBar/NavBar.css";
import NavBar from "./components/layout/navBar/NavBar";
import Counter from "./components/common/counter/Counter";
import "./components/common/counter/Counter.css";

const App = () => {
  return (
    <>
      <NavBar />

      <ItemListContainer greeting={"¡Bienvenidos!"} />
    </>
  );
};

export default App;
