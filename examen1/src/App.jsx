import { useEffect, useState } from "react";
import "./App.css";
import Vuelo from "./Vuelo";
import React from "react";
function App() {
  const [vuelos, setVuelos] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      let response = await fetch("./vuelos.json");
      let data = await response.json();
      console.log(data);
      setVuelos(data);
    };
    cargar();
  }, []);
  
  const añadirVuelo = (e) => {
    setVuelos(e);
  };

  const [verFormulario, setVerFormulario] = React.useState(false);

  return (
    <>
      <h1>Vuelos</h1>
      <button onClick={() => setVerFormulario(!verFormulario)}>
        Añadir vuelo
      </button>
      {verFormulario && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            añadirVuelo();
          }}
        >
          <label htmlFor="destination">Destino del vuelo</label>
          <br />
          <input type="text" id="destination" placeholder="Barcelona"></input>
          <br />
          <label htmlFor="number">ID del vuelo</label>
          <br />
          <input type="text" id="number" placeholder="VO123"></input>
          <br />
          <label htmlFor="date">Fecha del vuelo</label>
          <br />
          <input type="date" id="date"></input>
          <br />
          <label htmlFor="time">Hora del vuelo</label>
          <br />
          <input type="time" id="time"></input>
          <br />
          <input type="submit" value="Aceptar" style={{ marginTop: "2%" }} />
        </form>
      )}
      {vuelos.map((vueloItem) => (
        <Vuelo key={vueloItem.destination} vuelo={vueloItem} />
      ))}
    </>
  );
}

export default App;
