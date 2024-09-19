import { axiosInstanceUsers } from "../config/axios.config";
import { ILoginReq, ILoginResponse } from "../interfaces/auth.interface";
import { TEndpoitKeys, USERS_API_ENDPOINTS } from "./auth/auth-endpoints";

const getEndpoint = (method: TEndpoitKeys) : string => {

    return USERS_API_ENDPOINTS()[method];

}

export class AuthService{
    static login = async (req: ILoginReq) : Promise <ILoginResponse> => {
        const endpoint = getEndpoint('LOGIN');
            try {
                const loginResponse = await axiosInstanceUsers.post(endpoint, req);
                return loginResponse.data;
            } catch (error: any) {
                throw new Error(error.message);
            }
        }
    }
