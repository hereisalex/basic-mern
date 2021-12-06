import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://thebasic.herokuapp.com/api/",   
});