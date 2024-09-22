export const TEST_RESULTS_API_ENDPOINTS = (id?: string) => {
    return {
        GET_ALL_OR_FILTER: `tests-results`,
        GET_BY_ID: `tests-results/${id}`,
        GET_FILE: `tests-results/file/${id}`
    }
}
export type TEndpointKeys = 'GET_ALL_OR_FILTER' | 'GET_BY_ID' | 'GET_FILE';