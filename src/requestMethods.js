import axios from "axios";



const BASE_URL = 'https://thedm-api.herokuapp.com';

export const api = axios.create({
    baseURL: BASE_URL
});


