import axios from "axios";

const api = axios.create({
    baseUrl: 'https://pokeapi.co/api/v2/pokemon'
})

export default api;