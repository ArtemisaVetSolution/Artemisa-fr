import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLoginSubmit } from './hooks/use-login-submit';

import InputField from '../../../UX/atoms/inputs/inputField.component';
import SubmitButton from '../../../UX/atoms/buttons/submitButtonLoginRegister.component';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const schema = yup.object().shape({
  email: yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
  password: yup.string().required('Contraseña es requerida'),
});

const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

const onSubmit = async (data: any) => {
    try {
      const response = await useLoginSubmit({...data, dispatch, navigate});
      console.log(response);
    } catch (error: any) {
      console.error("Error en la petición:", error.message); 
    }
  };
  return (
    
    <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex', flexDirection:'column', gap:'10px', width:'50%', marginTop:'50px', marginLeft:'25%'}}>
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
      <Box
        component= 'img'
        src=""
        />
    </form>
  );
};

export default LoginForm;