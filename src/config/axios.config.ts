import axios, { AxiosInstance } from 'axios';

export const baseApiUrlUsers = 'http://localhost:3001/api/';

const axiosInstanceUsers: AxiosInstance = axios.create({
    baseURL: baseApiUrlUsers,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
    // withCredentials: true
});

export { axiosInstanceUsers };