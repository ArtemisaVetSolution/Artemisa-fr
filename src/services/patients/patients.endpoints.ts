export const PATIENTS_API_ENDPOINTS = (id?: string) => {
    return {
        GET_ALL: `patients`,
        GET_BY_ID: `patients${id}`
    }
}
export type TEndpointKeys = 'GET_ALL' | 'GET_BY_ID';