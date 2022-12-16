import axios from "axios";
const server = `http://127.0.0.1:8000`
export const irisapi = req => axios.post(`${server}/shop/products/iris`, req)