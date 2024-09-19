export const USERS_API_ENDPOINTS = (token?: string) => {
    const resource = 'auth/';

    return{
        LOGIN: `${resource}login`,
        REGISTER: `${resource}register`        
    }
};

export type TEndpoitKeys = keyof ReturnType<typeof USERS_API_ENDPOINTS>;