import axios from 'axios';

/// https://.com/r-api/?asujeitoprogramadorpi=filmes/


const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});

export default api;