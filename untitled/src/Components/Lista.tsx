import {Checkbox} from "antd";

function Lista() {
    const tareas = ["Compra", "Guardería", "Aspiradora", "Comida"];
    return (
        <>
            <ul>
                {tareas.map((tarea)=>
                    <Checkbox><li>{tarea}</li></Checkbox>
                )}
            </ul>
        </>
    )
}

export default Lista;