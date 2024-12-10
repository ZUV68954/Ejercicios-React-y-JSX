import {useState} from "react";

const productos = [
    {id: 1, nombre: 'Madera'},
    {id: 2, nombre: 'Martillo'},
    {id: 3, nombre: 'Antonio'},
    {id: 4, nombre: 'Amar'},
    {id: 5, nombre: 'Pingüino'}
];

const Buscador = () => {
    const [búsqueda, setBúsqueda] = useState('');
    const [productosFiltrados, setProductosFiltrados] = useState(productos);

    const manejarBúsqueda = (e: { target: { value: any; }; }) => {
        const valorBúsqueda = e.target.value;
        setBúsqueda(valorBúsqueda);

        const productosFiltrados = productos.filter((producto) =>
            producto.nombre.toLowerCase().includes(valorBúsqueda.toLowerCase())
        );
        setProductosFiltrados(productosFiltrados);
    };

    return (
        <div>
            <h2>Buscador de productos</h2>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={búsqueda}
                onChange={manejarBúsqueda}
            />
            <ul>
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((producto) => (
                        <li key={producto.id}>{producto.nombre}</li>
                    ))
                ) : (
                    <p>No hay nada.</p>
                )}
            </ul>
        </div>
    );
};

export default Buscador;