import { axiosInstanceVet } from "@/config/axios.config";
import { HISTORY_API_ENDPOINTS, TEndpointKeys } from "./medicalHistory.endpoints";

const endpoints = (method: TEndpointKeys, id?: string) => {
    return HISTORY_API_ENDPOINTS(id)[method];
}

export class MedicalHistoryService {

    static async getAllOrFilter(query?: string) {
        const endpoint = endpoints('GET_ALL_OR_FILTER')
        const { data } = await axiosInstanceVet.get(`${endpoint}?${query && query}`);
        return data.data;
    }

    static async getFile(id: string) {
        const endpoint = endpoints('GET_FILE', id);
        const { data } = await axiosInstanceVet.get(endpoint);
        return data.data;
    }

    // static async create(body: ICreatePatient) {
    //     const endpoint = endpoints('CREATE')
    //     const { data } = await axiosInstanceVet.post(endpoint, body);
    //     return data.data;
    // }
}