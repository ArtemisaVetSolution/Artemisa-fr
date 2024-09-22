import axios, { AxiosInstance } from 'axios';

export const baseApiUrlUsers = 'http://localhost:3001/api/';

export const baseApiUrlManagmetAppoitments = 'http://localhost:3002/api/';

const axiosInstanceUsers: AxiosInstance = axios.create({
    baseURL: baseApiUrlUsers,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    },
    // withCredentials: true
});

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