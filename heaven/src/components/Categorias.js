import React from "react";
import "../css/estilos.css";
import Cat from "./cat";
import CrearCategoria from "../services/CrearCategoriaService";

const Categorias = () => {
  return (
    <div>
      <main>
        <section class="portada-pc">
          <div class="opciones">
            {/* <input id="productos" name="spc" type="radio" />
            <label for="productos">Productos</label> */}
            <input id="categorias" name="spc" type="radio" />
            <label for="categorias">Categorias</label>
          </div>
          <div class="botonera">
            <button class="botonera__btn">Agregar</button>
            <button class="botonera__btn">Modificar</button>
            <button class="botonera__btn">Eliminar</button>
          </div>
          <div class="form-container">
          {/* <form class="form-productos" action="#">
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
            {/* <label class="file" for="cargar">
                  <span>Subir foto del producto</span>
                  <img src={AgregarImg} alt="" />
                  <input class="file_cargar" type="file" id="cargar" />
                </label> *

            <button class="btn-registrar-producto">
                Registrar producto
            </button>
        </form> */}
            <CrearCategoria></CrearCategoria>
            <div class="tabla">
           <Cat></Cat>
          </div>
          </div>
          {/* <div class="">
            <form class="" action="#">
              <label class="">
                Nombre:
                <input class="" name="nombre" type="text" />
              </label>
              <label class="">
                Descripción:
                <textarea
                  class=""
                  name="descripcion"
                ></textarea>
              </label>
              <button class="">
                Registrar categoría
              </button>
            </form>
          </div> */}

        
        </section>
      </main>
    </div>
  );
};
export default Categorias;
