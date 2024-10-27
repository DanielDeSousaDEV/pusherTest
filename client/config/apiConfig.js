import 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
import { BASE_BACKEND_URL } from './config.js';

console.log(BASE_BACKEND_URL)

let config = {
    baseURL: BASE_BACKEND_URL,
    // headers: {
    //     'Content-Type': 'application/json; charset=utf-8'//fazer prefilting somente se estiver com os cabeçalhos
    // }
}
let api = axios.create(config)

export default api