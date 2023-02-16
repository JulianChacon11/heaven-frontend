import React, { useState } from 'react';
import axios from 'axios';

function CrearCategoria() {
    // Definimos los estados para el nombre, descripción y estado de la categoría
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [estado, setEstado] = useState(false);

    // Creamos una función para manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault();

        // Creamos un objeto con los datos de la categoría
        const categoria = {
            nombre,
            descripcion,
            estado
        };

        // Enviamos la categoría al servidor utilizando Axios
        axios.post('http://localhost:8000/api/categorias', categoria)
            .then(response => {
                // Si la creación de la categoría fue exitosa, mostramos un mensaje al usuario
                alert(`La categoría ${response.data.nombre} ha sido creada con éxito`);
            })
            .catch(error => {
                // Si hubo un error al crear la categoría, mostramos un mensaje de error al usuario
                alert(`Hubo un error al crear la categoría: ${error.message}`);
            });

        // Limpiamos los campos del formulario
        setNombre('');
        setDescripcion('');
        setEstado(false);
    };

    return (
        <form class="form-productos" onSubmit={handleSubmit}>
            <label class="">
                Nombre:
                <input class="" value={nombre} onChange={(e) => setNombre(e.target.value)} name="nombre" type="text" />
            </label>

            <label name="descripcion" >
                Descripción:

            </label>
            <textarea
                class=""
                for="descripcion"
                value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>

            <button class="btn-registrar-producto" type='submit'>
                Registrar Categoria
            </button>
        </form>
    );
}

export default CrearCategoria;