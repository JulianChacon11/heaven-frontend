
import axios from 'axios';

const categoriaService = {};
const url = 'http://localhost:8000/api/categorias/';
categoriaService.getCategorias = () => {
  return axios.get(url).then(response => response.data);
}

export default categoriaService;