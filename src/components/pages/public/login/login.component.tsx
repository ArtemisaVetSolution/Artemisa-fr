import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import { useLoginSubmit } from './hooks/use-login-submit';

import InputField from '../../../UX/atoms/inputs/inputField.component';
import SubmitButton from '../../../UX/atoms/buttons/submitButtonLoginRegister.component';
import axios from 'axios';


const schema = yup.object().shape({
  email: yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
  password: yup.string().required('Contraseña es requerida'),
});

const LoginForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

//   const onSubmit = async (data: any) => {
//     try {
//       const response = await useLoginSubmit(data);
//       console.log("login exitoso", response);
//     } catch (error) {
//       console.error("error en login", error);
//     }
//   };

const onSubmit = async (data: any) => {
    console.log("Datos enviados desde el formulario:", data); // Verifica los datos del formulario

    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      console.log("Respuesta del servidor:", response.data); // Muestra la respuesta del servidor
    } catch (error: any) {
      console.error("Error en la petición:", error.message); // Muestra el error en la consola
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputField
            label="Correo electrónico"
            field={field}
            error={errors.email}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputField
            label="Contraseña"
            type="password"
            field={field}
            error={errors.password}
          />
        )}
      />
      <SubmitButton text= "INICIAR SESIÓN"/>
    </form>
  );
};

export default LoginForm;