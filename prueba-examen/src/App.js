import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [alumnos, setAlumnos] = useState([]);
    const [verNotas, setVerNotas] = useState(false);
    const lanzarPopup = () => setVerNotas(!verNotas);
    const [notas, setNotas] = useState([]);

    useEffect(() => {
        const cargar = async () => {
            let response = await fetch('./alumnos.json');
            let data = await response.json();
            console.log(data);
            setAlumnos(data.alumnos);
            setNotas(data.asignaturas)
        };
        cargar();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h2>Lista de Alumnos</h2>
                {/* Lista de alumnos */}
                <ul>
                    {alumnos.length > 0 && alumnos.map((alumno) => (<li key={alumno.nombre}>
                        <h3>{alumno.nombre}</h3>
                        <button onClick={lanzarPopup}>
                            Ver notas
                        </button>
                    </li>))}
                </ul>


                {/* Pop-up del carrito */}
                {verNotas && (<div style={popupStyle}>
                    <h2>Notas del alumno</h2>
                    <ul>
                        {notas.length > 0 && notas.map((nota) => (<li key={notas.asignaturas}>
                            <h3>Acceso a datos</h3>
                            <p>Primera evaluación: {nota}</p>
                        </li>))}
                    </ul>
                    <button onClick={lanzarPopup}>Cerrar</button>
                </div>)}


            </header>
        </div>
    );
}

// Estilo para el pop-up
const popupStyle = {
    position: 'fixed', top: '40%', left: '40%', padding: '20px', border: '1px solid #ddd',
};

export default App;
