import axios from "axios";

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFydGVtaXNhX3R1dG9yX3VzZXJAZ21haWwuY29tIiwiaWQiOiIxZjdjNGMxZS0yNTA3LTRjMjItOTM0My1iZDAxZmMwZWEzY2MiLCJwZXJtaXNpb25zIjpbeyJpZCI6Mywicm9sZSI6InR1dG9yIiwicGF0aCI6InNlcnZpY2VzIiwiY2FuQ3JlYXRlIjpmYWxzZSwiY2FuVXBkYXRlIjpmYWxzZSwiY2FuRGVsZXRlIjpmYWxzZSwiY2FuUmVhZCI6dHJ1ZSwiY2FuUmVhZE93biI6dHJ1ZX0seyJpZCI6Nywicm9sZSI6InR1dG9yIiwicGF0aCI6ImFwcG9pbnRtZW50cyIsImNhbkNyZWF0ZSI6dHJ1ZSwiY2FuVXBkYXRlIjp0cnVlLCJjYW5EZWxldGUiOmZhbHNlLCJjYW5SZWFkIjpmYWxzZSwiY2FuUmVhZE93biI6dHJ1ZX0seyJpZCI6MTEsInJvbGUiOiJ0dXRvciIsInBhdGgiOiJwYXRpZW50cyIsImNhbkNyZWF0ZSI6dHJ1ZSwiY2FuVXBkYXRlIjp0cnVlLCJjYW5EZWxldGUiOnRydWUsImNhblJlYWQiOmZhbHNlLCJjYW5SZWFkT3duIjp0cnVlfSx7ImlkIjoxNSwicm9sZSI6InR1dG9yIiwicGF0aCI6InR1dG9ycyIsImNhbkNyZWF0ZSI6dHJ1ZSwiY2FuVXBkYXRlIjp0cnVlLCJjYW5EZWxldGUiOnRydWUsImNhblJlYWQiOmZhbHNlLCJjYW5SZWFkT3duIjp0cnVlfSx7ImlkIjoxOSwicm9sZSI6InR1dG9yIiwicGF0aCI6ImNvbGxhYm9yYXRvciIsImNhbkNyZWF0ZSI6ZmFsc2UsImNhblVwZGF0ZSI6ZmFsc2UsImNhbkRlbGV0ZSI6ZmFsc2UsImNhblJlYWQiOmZhbHNlLCJjYW5SZWFkT3duIjpmYWxzZX0seyJpZCI6MjMsInJvbGUiOiJ0dXRvciIsInBhdGgiOiJvcmRlcnMiLCJjYW5DcmVhdGUiOnRydWUsImNhblVwZGF0ZSI6ZmFsc2UsImNhbkRlbGV0ZSI6ZmFsc2UsImNhblJlYWQiOmZhbHNlLCJjYW5SZWFkT3duIjp0cnVlfSx7ImlkIjoyNywicm9sZSI6InR1dG9yIiwicGF0aCI6ImRpYWdub3N0aWNfYWlkcyIsImNhbkNyZWF0ZSI6ZmFsc2UsImNhblVwZGF0ZSI6ZmFsc2UsImNhbkRlbGV0ZSI6ZmFsc2UsImNhblJlYWQiOmZhbHNlLCJjYW5SZWFkT3duIjp0cnVlfSx7ImlkIjozMSwicm9sZSI6InR1dG9yIiwicGF0aCI6Im1lZGljYWxfaGlzdG9yeV9yZWNvcmQiLCJjYW5DcmVhdGUiOmZhbHNlLCJjYW5VcGRhdGUiOmZhbHNlLCJjYW5EZWxldGUiOmZhbHNlLCJjYW5SZWFkIjpmYWxzZSwiY2FuUmVhZE93biI6dHJ1ZX0seyJpZCI6MzUsInJvbGUiOiJ0dXRvciIsInBhdGgiOiJwYXltZW50cyIsImNhbkNyZWF0ZSI6ZmFsc2UsImNhblVwZGF0ZSI6ZmFsc2UsImNhbkRlbGV0ZSI6ZmFsc2UsImNhblJlYWQiOmZhbHNlLCJjYW5SZWFkT3duIjp0cnVlfSx7ImlkIjozOSwicm9sZSI6InR1dG9yIiwicGF0aCI6IklBX3N1Z2dlc3Rpb25zIiwiY2FuQ3JlYXRlIjpmYWxzZSwiY2FuVXBkYXRlIjpmYWxzZSwiY2FuRGVsZXRlIjpmYWxzZSwiY2FuUmVhZCI6ZmFsc2UsImNhblJlYWRPd24iOmZhbHNlfSx7ImlkIjo0Mywicm9sZSI6InR1dG9yIiwicGF0aCI6InByb2R1Y3RzIiwiY2FuQ3JlYXRlIjpmYWxzZSwiY2FuVXBkYXRlIjpmYWxzZSwiY2FuRGVsZXRlIjpmYWxzZSwiY2FuUmVhZCI6dHJ1ZSwiY2FuUmVhZE93biI6dHJ1ZX1dLCJpYXQiOjE3MjY2OTY0MjYsImV4cCI6MTcyNjcwMDAyNn0.As8YoFozys2hFBtz3znoSDxVuDuoT_dvK_uZRfeLE2k'

const urlVet = 'http://localhost:3002/api/'
const urlUser =  'http://localhost:3001/api/'

const axiosInstanceVet = axios.create({
    baseURL: urlVet,
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
    baseURL: urlUser,
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

export { axiosInstanceVet, axiosInstanceUsers }