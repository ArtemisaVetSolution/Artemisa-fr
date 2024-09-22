import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';
import PetsSharpIcon from '@mui/icons-material/PetsSharp';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import InputField from '../../../../UX/atoms/inputs/inputField.component';
import SubmitButton from '../../../../UX/atoms/buttons/submitButtonLoginRegister.component';
import { useLoginSubmit } from '../hooks/useLoginSubmit';
import { Box, IconButton, Link, Paper, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../../../../models/routes/routes.model';
import ReusableModal from '@/components/UX/molecules/modals/modal.component';

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

const schema = yup.object().shape({
  email: yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
  password: yup.string()
    .required('Contraseña es requerida')
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .max(50, 'La contraseña debe tener máximo 50 caracteres')
    .matches(
      /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      'La contraseña debe tener una letra mayúscula, una letra minúscula y un número'
    )
});

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCloseErrorModal = () => setOpenErrorModal(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await useLoginSubmit({ ...data, dispatch, navigate });
      if (response.includes(400) || response.includes(401)) {
        setErrorMessage('Credenciales inválidas');
        setOpenErrorModal(true);
      } else {
        setErrorMessage('Error en el servidor');
        setOpenErrorModal(true);
      }
    } catch (error: any) {
      console.error("Error en la petición:", error.message);
    }
  };

  return (
    <>
      <Paper elevation={10} sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        width: '100%',
        height: '65%',
        borderRadius: '10px',
        padding: '5%',
        backgroundColor: "rgba(115, 178, 182, 0.5)",
      }}>
        <Typography variant="h1" align="center" gutterBottom>
          Iniciar Sesión
        </Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src="static/assets/LsiluetaLogin.png" alt="Perro" style={{ width: '20vw', height: '25vh' }} />
        </Box>
        <Typography variant="body1" align="center" sx={{ fontWeight: 'bold', marginBottom:'20px' }}>
          ¿No tienes una cuenta?{' '}
          <br />
          <span onClick={onSwitchToRegister} style={{ cursor: "pointer", color: "#293241" }}>
            Regístrate aquí
          </span>
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}
          style={
            {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10%',
              width: '100%',
              height: '100%'
            }
          }>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                label="Correo electrónico"
                field={field}
                error={errors.email}
                endAdornment={<PetsSharpIcon />}
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
                type={showPassword ? 'text' : 'password'}
                field={field}
                error={errors.password}
                endAdornment={(
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}
              />
            )}
          />
          <SubmitButton text="INGRESAR" color='complementary' colorProperties='dark' />
        </form>
        <Link
          component={RouterLink}
          to={PublicRoutes.RECOVER_PASSWORD}
          sx={{ cursor: 'pointer', color: 'dark.main', marginTop: '20px', fontSize: '1.3rem', fontWeight: '500' }}
        >
          Olvidaste tu contraseña?
        </Link>
      </Paper>
      <ReusableModal
        open={openErrorModal}
        handleClose={handleCloseErrorModal}
        title="Error"
        description={errorMessage}
        buttonText="CERRAR"
      />
    </>
  );
};

export default LoginForm;