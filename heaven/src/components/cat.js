import React, { useState, useEffect } from 'react';
import categoriaService from '../services/categoriaService';

function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriaService.getCategorias().then(categorias => {
      setCategorias(categorias);
    });
  }, []);

  return (
    <table className="tabla-categorias">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {categorias.map(categoria => (
          <tr key={categoria.nombre}>
            <td>{categoria.nombre}</td>
            <td>{categoria.descripcion}</td>
            <td>{categoria.estado ? "Activo" : "Inactivo"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Categorias;