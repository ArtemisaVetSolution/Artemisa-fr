import { PATIENTS_API_ENDPOINTS, TEndpointKeys } from './patients.endpoints';
import { axiosInstanceVet } from '../../config/axios.config';
import { ICreatePatient } from './interfaces/createPatient.interface';

export interface IPatients {
    id: number;
    name: string;
    specie: string;
    breed: string;
    gender: string;
    dob: string;
    weight: number;
    alimentation: string;
    sterilized: boolean;
    color: string;
} 

const endpoints = (method: TEndpointKeys, id?: string) => {
    return PATIENTS_API_ENDPOINTS(id)[method];
}

export class PatientsService {

    static async getAll(query?: string): Promise<IPatients[]> {
        const endpoint = endpoints('GET_ALL')
        const { data } = await axiosInstanceVet.get(`${endpoint}?${query && query}`);
        return data.data;
    }

    static async create(body: ICreatePatient) {
        const endpoint = endpoints('CREATE')
        const { data } = await axiosInstanceVet.post(endpoint, body);
        return data.data;
    }
}