import axios from 'axios';

const API = 'http://localhost:3000';

export const axiosInstance = axios.create({
    baseURL: API,
});
