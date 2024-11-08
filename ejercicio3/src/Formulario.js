import React, { useState } from 'react';

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [mensajeBienvenida, setMensajeBienvenida] = useState('');

    const setter = (event) => {
        setNombre(event.target.value);
    };

    const envío = (event) => {
        event.preventDefault();
        if (nombre.trim()) {
            setMensajeBienvenida(`Salu2, ${nombre}!`);
        }
    };

    return (
        <div>
            <form onSubmit={envío}>
                <label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={setter}
                        placeholder="Ingresa tu Nombre"
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
            {mensajeBienvenida && <p>{mensajeBienvenida}</p>}
        </div>
    );
}

export default Formulario;