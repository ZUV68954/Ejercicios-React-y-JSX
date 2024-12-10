import {Button, Form, Input} from "antd";
import {SetStateAction, useState} from "react";

function Formulario() {
    const [nombre, setNombre] = useState('');

    const cambioNombre = (values: { nombre: SetStateAction<string>; }) => {
        // 'values' es un objeto con los valores del formulario
        setNombre(values.nombre);
    };

    return (
        <>
            <Form
                name="formulario"
                style={{maxWidth: 600}}
                onFinish={cambioNombre}
            >
                <Form.Item name="nombre" label="Nombre">
                    <Input/>
                </Form.Item>
                <Button type="primary" htmlType="submit">Enviar</Button>
            </Form>
            {nombre && <p>Hola {nombre}</p>}
        </>
    );
}

export default Formulario;
