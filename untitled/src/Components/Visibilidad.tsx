import {Button} from "antd";
import React from "react";

function Visibilidad() {
    const [visible, setVisible] = React.useState(false);
    return (
        <>
            <Button type="dashed" onClick={() => setVisible(!visible)}>¿Me ves?</Button>
            {visible && (
                <div>
                    <p>Hola</p>
                </div>
            )}
        </>
    )
}

export default Visibilidad;