import { useState } from 'react';
function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador + -1)}>Restar</button>
        </div>
        
    );
}
export default Contador;