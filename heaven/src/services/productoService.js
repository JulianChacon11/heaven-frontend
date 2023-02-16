import axios from 'axios';

const productoService = {};
const url = 'http://localhost:8000/api/productos/';
productoService.getProductos = () => {
  return axios.get(url).then(response => response.data);
}

export default productoService;