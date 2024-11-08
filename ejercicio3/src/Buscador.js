import React, { useState } from 'react';

const productos = [
    { id: 1, nombre: 'Madera' },
    { id: 2, nombre: 'Martillo' },
    { id: 3, nombre: 'Antonio' },
    { id: 4, nombre: 'Amar' },
    { id: 5, nombre: 'Pingüino' }
];

const BuscadorDeProductos = () => {
    const [busqueda, setBusqueda] = useState('');
    const [productosFiltrados, setProductosFiltrados] = useState(productos);

    const manejarBusqueda = (e) => {
        const valorBusqueda = e.target.value;
        setBusqueda(valorBusqueda);

        const productosFiltrados = productos.filter((producto) =>
            producto.nombre.toLowerCase().includes(valorBusqueda.toLowerCase())
        );
        setProductosFiltrados(productosFiltrados);
    };

    return (
        <div>
            <h2>Buscador de productos</h2>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={busqueda}
                onChange={manejarBusqueda}
            />

            <ul>
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((producto) => (
                        <li key={producto.id}>{producto.nombre}</li>
                    ))
                ) : (
                    <p>No se encontraron productos.</p>
                )}
            </ul>
        </div>
    );
};

export default BuscadorDeProductos;
