import { IUser } from "./user.interface";

export interface ILoginReq {
    email: string;
    password: string;

}

export interface ILoginResponse {
  data:{
    email: string;
    id: string;
    role: string;
    token: string;
    name: string;
  }  
}  