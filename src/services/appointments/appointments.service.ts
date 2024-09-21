import { APPOINTMENTS_API_ENDPOINTS, TEndpointKeys } from './appointments.endpoints';
import { ICreateAppointment } from './interfaces/appointment.interfaces';
import { axiosInstanceVet } from '../../config/axios.config';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxM0BlbWFpbC5jb20iLCJpZCI6Ijk2ZjljN2U3LWNiZjItNGUyZi1hYjljLTIxYjdlOTAzNzBjNyIsInBlcm1pc2lvbnMiOlt7ImlkIjo0Nywicm9sZSI6InR1dG9yIiwicGF0aCI6InNlcnZpY2VzIiwiY2FuQ3JlYXRlIjpmYWxzZSwiY2FuVXBkYXRlIjpmYWxzZSwiY2FuRGVsZXRlIjpmYWxzZSwiY2FuUmVhZCI6dHJ1ZSwiY2FuUmVhZE93biI6dHJ1ZX0seyJpZCI6NTIsInJvbGUiOiJ0dXRvciIsInBhdGgiOiJhcHBvaW50bWVudHMiLCJjYW5DcmVhdGUiOnRydWUsImNhblVwZGF0ZSI6dHJ1ZSwiY2FuRGVsZXRlIjpmYWxzZSwiY2FuUmVhZCI6ZmFsc2UsImNhblJlYWRPd24iOnRydWV9LHsiaWQiOjU3LCJyb2xlIjoidHV0b3IiLCJwYXRoIjoicGF0aWVudHMiLCJjYW5DcmVhdGUiOnRydWUsImNhblVwZGF0ZSI6dHJ1ZSwiY2FuRGVsZXRlIjp0cnVlLCJjYW5SZWFkIjpmYWxzZSwiY2FuUmVhZE93biI6dHJ1ZX0seyJpZCI6NjIsInJvbGUiOiJ0dXRvciIsInBhdGgiOiJ0dXRvcnMiLCJjYW5DcmVhdGUiOnRydWUsImNhblVwZGF0ZSI6dHJ1ZSwiY2FuRGVsZXRlIjp0cnVlLCJjYW5SZWFkIjpmYWxzZSwiY2FuUmVhZE93biI6dHJ1ZX0seyJpZCI6NjcsInJvbGUiOiJ0dXRvciIsInBhdGgiOiJjb2xsYWJvcmF0b3JzIiwiY2FuQ3JlYXRlIjpmYWxzZSwiY2FuVXBkYXRlIjpmYWxzZSwiY2FuRGVsZXRlIjpmYWxzZSwiY2FuUmVhZCI6ZmFsc2UsImNhblJlYWRPd24iOmZhbHNlfSx7ImlkIjo3Miwicm9sZSI6InR1dG9yIiwicGF0aCI6Im9yZGVycyIsImNhbkNyZWF0ZSI6dHJ1ZSwiY2FuVXBkYXRlIjpmYWxzZSwiY2FuRGVsZXRlIjpmYWxzZSwiY2FuUmVhZCI6ZmFsc2UsImNhblJlYWRPd24iOnRydWV9LHsiaWQiOjc3LCJyb2xlIjoidHV0b3IiLCJwYXRoIjoiZGlhZ25vc3RpY19haWRzIiwiY2FuQ3JlYXRlIjpmYWxzZSwiY2FuVXBkYXRlIjpmYWxzZSwiY2FuRGVsZXRlIjpmYWxzZSwiY2FuUmVhZCI6ZmFsc2UsImNhblJlYWRPd24iOnRydWV9LHsiaWQiOjgyLCJyb2xlIjoidHV0b3IiLCJwYXRoIjoibWVkaWNhbF9oaXN0b3J5X3JlY29yZCIsImNhbkNyZWF0ZSI6ZmFsc2UsImNhblVwZGF0ZSI6ZmFsc2UsImNhbkRlbGV0ZSI6ZmFsc2UsImNhblJlYWQiOmZhbHNlLCJjYW5SZWFkT3duIjp0cnVlfSx7ImlkIjo4Nywicm9sZSI6InR1dG9yIiwicGF0aCI6InBheW1lbnRzIiwiY2FuQ3JlYXRlIjpmYWxzZSwiY2FuVXBkYXRlIjpmYWxzZSwiY2FuRGVsZXRlIjpmYWxzZSwiY2FuUmVhZCI6ZmFsc2UsImNhblJlYWRPd24iOnRydWV9LHsiaWQiOjkyLCJyb2xlIjoidHV0b3IiLCJwYXRoIjoiaWFfc3VnZ2VzdGlvbnMiLCJjYW5DcmVhdGUiOmZhbHNlLCJjYW5VcGRhdGUiOmZhbHNlLCJjYW5EZWxldGUiOmZhbHNlLCJjYW5SZWFkIjpmYWxzZSwiY2FuUmVhZE93biI6ZmFsc2V9LHsiaWQiOjk3LCJyb2xlIjoidHV0b3IiLCJwYXRoIjoicHJvZHVjdHMiLCJjYW5DcmVhdGUiOmZhbHNlLCJjYW5VcGRhdGUiOmZhbHNlLCJjYW5EZWxldGUiOmZhbHNlLCJjYW5SZWFkIjp0cnVlLCJjYW5SZWFkT3duIjp0cnVlfSx7ImlkIjoxMDIsInJvbGUiOiJ0dXRvciIsInBhdGgiOiJ1c2VycyIsImNhbkNyZWF0ZSI6dHJ1ZSwiY2FuVXBkYXRlIjp0cnVlLCJjYW5EZWxldGUiOnRydWUsImNhblJlYWQiOmZhbHNlLCJjYW5SZWFkT3duIjp0cnVlfV0sInJvbGUiOiJ0dXRvciIsImlhdCI6MTcyNjg5MjI1MSwiZXhwIjoxNzI2ODk1ODUxfQ.huGEHPimE8T9UE_yE8NaKwYiUWYNzdCInMhTuLwpNkQ'


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
        return data.data;
    }
}