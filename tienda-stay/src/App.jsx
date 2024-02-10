import "./Style.css";
import "./components/pages/itemListContainer/ItemListContainer.css";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import "./components/pages/itemListContainer/ItemList.css";
import "./components/layout/navBar/NavBar.css";
import NavBar from "./components/layout/navBar/NavBar";
import Counter from "./components/common/counter/Counter";

const App = () => {
  return (
    <>
      <NavBar />

      <ItemListContainer greeting={"¡Bienvenidos!"} />

      <Counter
        initial={1}
        stock={10}
        onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}
      />
    </>
  );
};

export default App;
