import {useEffect, useState} from "react";

function Alumno(){
    const [alumnos, setAlumnos] = useState([]);
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
}