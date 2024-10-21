
import 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';

let config = {
    baseURL: 'http://127.0.0.1:1234',
    // headers: {
    //     'Content-Type': 'application/json; charset=utf-8'//fazer prefilting somente se estiver com os cabeçalhos
    // }
}
let api = axios.create(config)

export default api