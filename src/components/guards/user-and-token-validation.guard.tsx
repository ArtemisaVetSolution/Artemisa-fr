import { IUser } from "@/models/interfaces";
import { emptyUserState } from "@/state/redux/states";
import { jwtDecode } from "jwt-decode";
import { useNavigate, Outlet, Navigate } from "react-router-dom"

interface IProps {
  privateValidation?: boolean;
  isForAuth?: boolean,
}
interface IToken {
  email?: string;
  exp: number;
  iat?: number;
  id?: string;
  role?: string;
  permissions?: string[];
}


const Guard = ({isForAuth}: IProps) => {

  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');
  let decodedToken: IToken = { exp: 0 };
  let user: IUser = emptyUserState;

  if (token && token !== '') {
    decodedToken = jwtDecode(token);
    console.log(decodedToken);
    if (decodedToken.exp * 1000 < new Date().getTime()) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      navigate('/login')
    }
  }
  if( !token || sessionStorage.getItem('user') === null){
    navigate('/login')
  }
  user = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user') ?? '') : emptyUserState;
  
  if(isForAuth){
    if(user.id!== '')
      return <Navigate to = {'/'}/>
  }
  

  

  return (
    <Outlet />
  )
}

export default Guard
