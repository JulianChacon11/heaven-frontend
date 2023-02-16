import React from "react";
import "../css/estilos.css";
import Prod from "./prod";
import CrearProducto from "../services/CrearProductoService";

const Productos = () => {
  return (
    <div>
      <main>
        <section class="portada-pc">
          <div class="opciones">
            {/* <input id="productos" name="spc" type="radio" />
            <label for="productos">Productos</label> */}
            <input id="categorias" name="spc" type="radio" />
            <label for="categorias">Productos</label>
          </div>
          <div class="botonera">
            <button class="botonera__btn">Agregar</button>
            <button class="botonera__btn">Modificar</button>
            <button class="botonera__btn">Eliminar</button>
          </div>
          <div class="form-container">
            <CrearProducto></CrearProducto>
        </div>
        </section>
      </main>
    </div>
  );
};
export default Productos;
