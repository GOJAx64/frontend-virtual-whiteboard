import axios from "axios";

export const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
});

export const axiosClientFlask = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_FLASK_URL}/`
});
