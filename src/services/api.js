import axios from 'axios';

const api = axios.create({
    baseURL: 'localhost:3006',
})

export default api;