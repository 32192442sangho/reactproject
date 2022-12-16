import axios from "axios";
const server = `http://127.0.0.1:8000`
export const fashionapi = testNum => axios.get(`${server}/dlearn/get/fashion?id=${testNum}`)
export const postfashionapi = testNum => axios.post(`${server}/dlearn/post/fashion`, testNum)