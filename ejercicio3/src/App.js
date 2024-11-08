import logo from './logo.svg';
import Contador from './Contador';
import Visibilidad from './Visible';
import './App.css';
import Formulario from './Formulario';
import ListaDeTareas from './ListaDeTareas';
import BuscadorDeProductos from './Buscador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador/>
        <Formulario/>
        <Visibilidad/>
        <ListaDeTareas/>
        <BuscadorDeProductos/>
      </header>
    </div>
  );
}

export default App;
