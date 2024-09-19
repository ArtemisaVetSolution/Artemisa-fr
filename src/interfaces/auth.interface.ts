import { IUser } from "./user.interface";

export interface ILoginReq {
    email: string;
    password: string;

}

export interface ILoginResponse {
    user: IUser;
    token: string;
}  