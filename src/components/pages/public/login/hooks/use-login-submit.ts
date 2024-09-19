
import { AuthService } from "@/services/auth.service";
import { setUser } from "@/state/redux/states";
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from "react-redux";

type IProps = {
	email: string;
	password: string;
  dispatch: ReturnType<typeof useDispatch>;
  navigate?: (path : string) => void;
}

export const useLoginSubmit = async ({ email, password, dispatch, navigate }: IProps) => {
  const response = await AuthService.login({ email, password });
  console.log("Respuesta del servidor:", response); // Muestra la respuesta del servidor
  try {
    storeToken(response.data.token);
    const user = {
      email: response.data.email,
      id: response.data.id,
      role: response.data.role
    }
    dispatch(setUser(user));
    if(navigate){
      user.role === 'admin' ? navigate('/') : navigate('/');
    }

  }
  catch (error: any) {
    console.error("Error en la petición:", error.message);
  }
}

const storeToken = (token: string) => {
	sessionStorage.setItem("token", token);
	const decodedToken = jwtDecode(token);
	sessionStorage.setItem("user", JSON.stringify(decodedToken));
}