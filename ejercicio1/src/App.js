import logo from './logo.svg';
import './App.css';
import Saludo from './saludo';
import Despedida from './despedida';

function App() {
  const actitud = true;
  if (actitud) {
    return (
      <div className="App">
        <header className="App-header">
          <Saludo nombre="Eustaquio" apellido="Salvà"></Saludo>
        </header>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <header className="App-header">
          <Despedida nombre="Eustaquio" apellido="Salvà"></Despedida>
        </header>
      </div>
    )
  }
}

export default App;
