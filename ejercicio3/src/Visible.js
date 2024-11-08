import React, { useState } from 'react';

function Visibilidad() {
    const [visible, setVisible] = useState(false);
    const cambiar = () => {
        setVisible(!visible);
    };
    
    return (
        <div>
            <button onClick={cambiar}>Mostrar / Ocultar</button>
            {
                visible && (
                    <div id='contenido'>
                        <p>Salu2</p>
                    </div>
                )}
        </div>
    );
}
export default Visibilidad