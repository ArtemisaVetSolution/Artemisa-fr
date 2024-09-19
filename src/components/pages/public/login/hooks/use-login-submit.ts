import { useEffect, useState } from "react";
import { AuthService } from "../../../../../services/auth.service";

type IProps = {
	email: string;
	password: string;
}

export const useLoginSubmit = async ({ email, password }: IProps) => {
	// const[response, setResponse] = useState<any>(null);
  const response = await AuthService.login({ email, password });
  console.log("Respuesta del servidor:", response); // Muestra la respuesta del servidor
  
  // useEffect(() => {
  //   console.log("Datos enviados desde el formulario:", email, password); // Verifica los datos del formulario
  //   const fetchData = async () => {
  //     try {
  //       const response = await AuthService.login({ email, password });
  //       console.log("Respuesta del servidor:", response); // Muestra la respuesta del servidor
  //       setResponse(response);
  //     } catch (error: any) {
  //       console.error("Error en la petición:", error.message); // Muestra el error en la consola
  //     }
  //   }
  //   fetchData();
  // }
  // , [email, password]);

	// return response;
}