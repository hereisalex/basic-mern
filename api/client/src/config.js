import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://basicnetwork.herokuapp.com/api/",   
});