export const TUTORS_API_ENDPOINTS = (id?: string) => {
    return {
        GET_ALL: `tutors`,
        GET_BY_ID: `tutors/${id}`,
        GET_BY_USER_ID: `tutors/user/${id}`
    }
}
export type TEndpointKeys = 'GET_ALL' | 'GET_BY_ID' | 'GET_BY_USER_ID';