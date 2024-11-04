import logo from './logo.svg';
import './App.css';
import Coche from './Coche.js';

function App() {
  let coche1 = new Coche("Matrícula 1", "Modelo 1", "Tipo 1");
  let coche2 = new Coche("Matrícula 1", "Modelo 1", "Tipo 2");
  let coche3 = new Coche("Matrícula 1", "Modelo 1", "Tipo 2");
  const coches = [coche1, coche2, coche3];
  return (
    <div className="App">
      <header className="App-header">
        {coches.map((elemento) => (elemento.mostrar()))}
      </header>
    </div>
  );
}

export default App;
