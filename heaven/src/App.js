import Principal from "./components/Principal";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./components/Productos";
import Categorias from "./components/Categorias";
import VistaProductos from "./components/vista-productos";
import React from 'react'


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal/>} exact />
        <Route path="/login" element={<Login/>} />
        <Route path="/productos" element={<Productos/>} />
        <Route path="/categorias" element={<Categorias/>} />
        <Route path="/vista-productos" element={<VistaProductos/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
