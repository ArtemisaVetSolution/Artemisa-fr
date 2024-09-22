import axios, { AxiosInstance } from 'axios';

export const baseApiUrlUsers = 'http://localhost:3001/api/';

export const baseApiUrlManagmetAppoitments = 'http://localhost:3002/api/';

const axiosInstanceVet = axios.create({
    baseURL: baseApiUrlManagmetAppoitments,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstanceVet.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const axiosInstanceUsers = axios.create({
    baseURL: baseApiUrlUsers,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstanceUsers.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const axiosInstanceManagmentAppoitments: AxiosInstance = axios.create({
    baseURL: baseApiUrlManagmetAppoitments,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
    // withCredentials: true
});



export {
    axiosInstanceUsers, axiosInstanceManagmentAppoitments
};