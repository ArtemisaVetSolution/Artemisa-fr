import { APPOINTMENTS_API_ENDPOINTS, TEndpointKeys } from './appointments.endpoints';
import { ICreateAppointment } from './interfaces/appointment.interfaces';
import { axiosInstanceManagmentAppoitments } from '../../config/axios.config';

const endpoints = (method: TEndpointKeys, id?: string) => {
    return APPOINTMENTS_API_ENDPOINTS(id)[method];
}

export class AppointmentsService {

    static async getAllOrFilter(query?: string) {
        const endpoint = endpoints('GET_ALL_OR_FILTER');
        const {data} = await axiosInstanceManagmentAppoitments.get(`${endpoint}?${query && query}`);
        return data.data;
    }

    static async getAvailability(query: string) {
        const endpoint = endpoints('GET_AVAILABILITY')
        const {data} = await axiosInstanceManagmentAppoitments.get(`${endpoint}?${query}`)
        return data.data;
    }

    static async create(body: ICreateAppointment) {
        const endpoint = endpoints('CREATE');
        const {data} = await axiosInstanceManagmentAppoitments.post(endpoint, body)
        return data;
    }
}