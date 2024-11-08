import React, { useState } from 'react';

function ListaDeTareas() {
    const [tareas, setTareas] = useState([
        { id: 1, nombre: 'Tarea 1', completada: false },
        { id: 2, nombre: 'Tarea 2', completada: false },
        { id: 3, nombre: 'Tarea 3', completada: false }
    ]);

    const manejarCambio = (id) => {
        setTareas(tareas.map(tarea => tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
        ));
    };

    return (
        <div>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={tarea.completada}
                                onChange={() => manejarCambio(tarea.id)}
                            />
                            {tarea.nombre}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDeTareas;
