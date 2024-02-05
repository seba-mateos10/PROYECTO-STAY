import "./Style.css";
import "./components/layout/navBar/NavBar.css";
import NavBar from "./components/layout/navBar/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />

      <ItemListContainer greeting={"¡Bienvenidos!"} />
    </div>
  );
}

export default App;
