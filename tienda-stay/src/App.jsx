import './Style.css';
import NavBar from "./components/header/NavBar";
import ItemListContainer from './components/header/ItemListContainer/ItemListContainer';

function App() {
  return (

    <div>

      <NavBar/>

      <ItemListContainer greeting={'¡Bienvenidos!'}/>

    </div>
    
  );
}

export default App;
