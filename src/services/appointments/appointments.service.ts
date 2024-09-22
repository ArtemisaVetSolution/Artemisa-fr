import { APPOINTMENTS_API_ENDPOINTS, TEndpointKeys } from './appointments.endpoints';
import { ICreateAppointment } from './interfaces/appointment.interfaces';
import { axiosInstanceVet } from '../../config/axios.config';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFydGVtaXNhX3R1dG9yX3VzZXJAZ21haWwuY29tIiwiaWQiOiIxZjdjNGMxZS0yNTA3LTRjMjItOTM0My1iZDAxZmMwZWEzY2MiLCJwZXJtaXNpb25zIjpbeyJpZCI6NDcsInJvbGUiOiJ0dXRvciIsInBhdGgiOiJzZXJ2aWNlcyIsImNhbkNyZWF0ZSI6ZmFsc2UsImNhblVwZGF0ZSI6ZmFsc2UsImNhbkRlbGV0ZSI6ZmFsc2UsImNhblJlYWQiOnRydWUsImNhblJlYWRPd24iOnRydWV9LHsiaWQiOjUyLCJyb2xlIjoidHV0b3IiLCJwYXRoIjoiYXBwb2ludG1lbnRzIiwiY2FuQ3JlYXRlIjp0cnVlLCJjYW5VcGRhdGUiOnRydWUsImNhbkRlbGV0ZSI6ZmFsc2UsImNhblJlYWQiOmZhbHNlLCJjYW5SZWFkT3duIjp0cnVlfSx7ImlkIjo1Nywicm9sZSI6InR1dG9yIiwicGF0aCI6InBhdGllbnRzIiwiY2FuQ3JlYXRlIjp0cnVlLCJjYW5VcGRhdGUiOnRydWUsImNhbkRlbGV0ZSI6dHJ1ZSwiY2FuUmVhZCI6ZmFsc2UsImNhblJlYWRPd24iOnRydWV9LHsiaWQiOjYyLCJyb2xlIjoidHV0b3IiLCJwYXRoIjoidHV0b3JzIiwiY2FuQ3JlYXRlIjp0cnVlLCJjYW5VcGRhdGUiOnRydWUsImNhbkRlbGV0ZSI6dHJ1ZSwiY2FuUmVhZCI6ZmFsc2UsImNhblJlYWRPd24iOnRydWV9LHsiaWQiOjY3LCJyb2xlIjoidHV0b3IiLCJwYXRoIjoiY29sbGFib3JhdG9ycyIsImNhbkNyZWF0ZSI6ZmFsc2UsImNhblVwZGF0ZSI6ZmFsc2UsImNhbkRlbGV0ZSI6ZmFsc2UsImNhblJlYWQiOmZhbHNlLCJjYW5SZWFkT3duIjpmYWxzZX0seyJpZCI6NzIsInJvbGUiOiJ0dXRvciIsInBhdGgiOiJvcmRlcnMiLCJjYW5DcmVhdGUiOnRydWUsImNhblVwZGF0ZSI6ZmFsc2UsImNhbkRlbGV0ZSI6ZmFsc2UsImNhblJlYWQiOmZhbHNlLCJjYW5SZWFkT3duIjp0cnVlfSx7ImlkIjo3Nywicm9sZSI6InR1dG9yIiwicGF0aCI6ImRpYWdub3N0aWNfYWlkcyIsImNhbkNyZWF0ZSI6ZmFsc2UsImNhblVwZGF0ZSI6ZmFsc2UsImNhbkRlbGV0ZSI6ZmFsc2UsImNhblJlYWQiOmZhbHNlLCJjYW5SZWFkT3duIjp0cnVlfSx7ImlkIjo4Miwicm9sZSI6InR1dG9yIiwicGF0aCI6Im1lZGljYWxfaGlzdG9yeV9yZWNvcmQiLCJjYW5DcmVhdGUiOmZhbHNlLCJjYW5VcGRhdGUiOmZhbHNlLCJjYW5EZWxldGUiOmZhbHNlLCJjYW5SZWFkIjpmYWxzZSwiY2FuUmVhZE93biI6dHJ1ZX0seyJpZCI6ODcsInJvbGUiOiJ0dXRvciIsInBhdGgiOiJwYXltZW50cyIsImNhbkNyZWF0ZSI6ZmFsc2UsImNhblVwZGF0ZSI6ZmFsc2UsImNhbkRlbGV0ZSI6ZmFsc2UsImNhblJlYWQiOmZhbHNlLCJjYW5SZWFkT3duIjp0cnVlfSx7ImlkIjo5Miwicm9sZSI6InR1dG9yIiwicGF0aCI6ImlhX3N1Z2dlc3Rpb25zIiwiY2FuQ3JlYXRlIjpmYWxzZSwiY2FuVXBkYXRlIjpmYWxzZSwiY2FuRGVsZXRlIjpmYWxzZSwiY2FuUmVhZCI6ZmFsc2UsImNhblJlYWRPd24iOmZhbHNlfSx7ImlkIjo5Nywicm9sZSI6InR1dG9yIiwicGF0aCI6InByb2R1Y3RzIiwiY2FuQ3JlYXRlIjpmYWxzZSwiY2FuVXBkYXRlIjpmYWxzZSwiY2FuRGVsZXRlIjpmYWxzZSwiY2FuUmVhZCI6dHJ1ZSwiY2FuUmVhZE93biI6dHJ1ZX0seyJpZCI6MTAyLCJyb2xlIjoidHV0b3IiLCJwYXRoIjoidXNlcnMiLCJjYW5DcmVhdGUiOnRydWUsImNhblVwZGF0ZSI6dHJ1ZSwiY2FuRGVsZXRlIjp0cnVlLCJjYW5SZWFkIjpmYWxzZSwiY2FuUmVhZE93biI6dHJ1ZX1dLCJyb2xlIjoidHV0b3IiLCJpYXQiOjE3MjY5NjYyOTYsImV4cCI6MTcyNjk2OTg5Nn0.jH1j5fyaE8fnR7cH7IdiDqI9pt-7OKKW_msVvp2zsC0'


const endpoints = (method: TEndpointKeys, id?: string) => {
    return APPOINTMENTS_API_ENDPOINTS(id)[method];
}

export class AppointmentsService {

    static async getAllOrFilter(query?: string) {
        const endpoint = endpoints('GET_ALL_OR_FILTER');
        const {data} = await axiosInstanceVet.get(`${endpoint}?${query && query}`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        });
        return data.data;
    }

    static async getAvailability(query: string) {
        const endpoint = endpoints('GET_AVAILABILITY')
        const {data} = await axiosInstanceVet.get(`${endpoint}?${query}`)
        return data.data;
    }

    static async create(body: ICreateAppointment) {
        const endpoint = endpoints('CREATE');
        const {data} = await axiosInstanceVet.post(endpoint, body, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return data;
    }
}