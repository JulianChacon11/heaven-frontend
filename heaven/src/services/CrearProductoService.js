import React, { useState } from 'react';
import axios from 'axios';

function CrearProducto() {
    // Definimos los estados para el nombre, descripción y estado de la categoría
    const [nombre, setNombre] = useState('');
    const [marca, setMarca] = useState('');
    const [presentacion, setPresentacion] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [ruta_img, setRuta_img] = useState('');
    const [activo, setActivo] = useState(false);

    // Creamos una función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();

        // Creamos un objeto con los datos de la categoría
        const producto = {
            nombre,
            marca,
            presentacion,
            precio,
            categoria,
            ruta_img,
            activo
        };

        // Enviamos la categoría al servidor utilizando Axios
        axios.post('http://localhost:8000/api/productos', producto)
            .then(response => {
                // Si la creación de la categoría fue exitosa, mostramos un mensaje al usuario
                alert(`El producto ${response.data.nombre} ha sido creada con éxito`);
            })
            .catch(error => {
                // Si hubo un error al crear la categoría, mostramos un mensaje de error al usuario
                alert(`Hubo un error al crear el producto: ${error.message}`);
            });

        // Limpiamos los campos del formulario
        setNombre('');
        setMarca('');
        setPresentacion('');
        setPrecio('');
        setCategoria('');
        setRuta_img('');
        setActivo(false);

    };

    return (
        <form class="form-productos" onSubmit={handleSubmit}>
            <label class="">
                Nombre:
                <input class="" name="nombre" type="text" />
            </label>
            <label class="" for="marca">
                Marca:
                <input
                    class=""
                    name="marca"
                    type="text"
                    id="marca"
                />
            </label>

            <label class="" for="precio">
                Precio:
                <input
                    class=""
                    name="precio"
                    type="number"
                    id="precio"
                />
            </label>

            <label class="" for="cantidad">
                Cantidad:
                <input
                    class=""
                    name="cantidad"
                    type="number"
                    id="cantidad"
                />
            </label>

            <label class="" for="categoria">
                Categoría:
                <input
                    class=""
                    name="categoria"
                    type="text"
                    id="categoria"
                />
            </label>
            <label class="">
                Descripción:

            </label>
            <textarea
                class=""
                for="descripcion"
                name="descripcion"
            ></textarea>

            <br />

            <button class="btn-registrar-producto">
                Registrar producto
            </button>
        </form>
    );
}

export default CrearProducto;