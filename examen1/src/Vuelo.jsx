/* eslint-disable react/prop-types */
import React, { useEffect } from "react";

const Vuelo = ({ vuelo }) => {
  const [visible, setVisible] = React.useState(false);
  const [plazasVuelo, setPlazasVuelo] = React.useState([]);
  const [pocasPlazas, setPocasPlazas] = React.useState([]);

  // Inicializa las plazas y el estado de pocasPlazas
  useEffect(() => {
    if (vuelo && vuelo.flights) {
      const plazas = vuelo.flights.map((flight) => flight.seats);
      setPlazasVuelo(plazas);
      setPocasPlazas(plazas.map((plaza) => plaza < 3));
    }
  }, [vuelo]);

  const hayPocasPlazas = (plazas, índice) => {
    setPocasPlazas((prevPocas) => {
      const nuevasPocas = [...prevPocas];
      nuevasPocas[índice] = plazas < 3; // Actualiza solo el índice correspondiente
      return nuevasPocas;
    });
  };

  const reservarPlaza = (plazas, índice) => {
    setPlazasVuelo((prevPlazas) => {
      const nuevasPlazas = [...prevPlazas];
      if (nuevasPlazas[índice] > 0) {
        nuevasPlazas[índice] -= 1;
        hayPocasPlazas(nuevasPlazas[índice], índice); // Verifica si hay pocas plazas
      }
      return nuevasPlazas;
    });
  };

  const liberarPlaza = (plazas, índice) => {
    setPlazasVuelo((prevPlazas) => {
      const nuevasPlazas = [...prevPlazas];
      nuevasPlazas[índice] += 1;
      hayPocasPlazas(nuevasPlazas[índice], índice); // Verifica si ya no hay pocas plazas
      return nuevasPlazas;
    });
  };

  return (
    <>
      <h2>{vuelo.destination}</h2>
      <button onClick={() => setVisible(!visible)}>
        Ver detalles de los vuelos
      </button>
      {visible &&
        vuelo.flights.map((flight, índice) => (
          <div key={índice}>
            <h3>Detalles del vuelo:</h3>
            <p>
              Vuelo <strong>{flight.number}</strong> con salida el{" "}
              <strong>{flight.date}</strong> a las{" "}
              <strong>{flight.time}</strong>
            </p>
            <p>
              Quedan <strong>{plazasVuelo[índice]}</strong> plazas disponibles.
            </p>
            {pocasPlazas[índice] && (
              <p>
                <strong>QUEDAN POCAS PLAZAS</strong>
              </p>
            )}
            <div>
              <button
                onClick={() => {
                  reservarPlaza(plazasVuelo[índice], índice);
                }}
              >
                Reservar plaza
              </button>
              <button
                onClick={() => {
                  liberarPlaza(plazasVuelo[índice], índice);
                }}
              >
                Liberar plaza
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default Vuelo;
