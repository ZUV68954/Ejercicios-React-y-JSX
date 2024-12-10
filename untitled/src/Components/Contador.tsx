import {Button} from "antd";
import {useState} from "react";

function Contador() {
    const [valor, setValor] = useState(0);
    return (
        <>
            <p>{valor}</p>
            <Button type="primary" onClick={() => setValor(valor + 1)}>Incrementar</Button>
            <Button style={{ margin: "5%" }} type={"primary"} onClick={() => setValor(valor - 1)}>Disminuir</Button>
        </>
    )
}

export default Contador;