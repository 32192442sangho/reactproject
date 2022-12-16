import axios from 'axios'
const server = `http://localhost:8000`
export const multiplexMoviesFaces = req => axios.post(`${server}/multiplex/movie/faces`, req)