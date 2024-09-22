import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import PetsSharpIcon from '@mui/icons-material/PetsSharp';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, IconButton, Paper, Typography } from '@mui/material';


import InputField from '../../../../UX/atoms/inputs/inputField.component';
import SubmitButton from '../../../../UX/atoms/buttons/submitButtonLoginRegister.component';
import { useRegisterSubmit } from '../hooks/useRegisterSubmit';
import ReusableModal from '@/components/UX/molecules/modals/modal.component';

interface RegisterFormProps {
    onSwitchToLogin: () => void;
}

const schema = yup.object().shape({
    name: yup.string().required('Nombre es requerido'),
    email: yup.string().email('Correo electrónico inválido').required('Correo electrónico es requerido'),
    password: yup.string()
        .required('Contraseña es requerida')
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .max(50, 'La contraseña debe tener máximo 50 caracteres')
        .matches(
            /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            'La contraseña debe tener una letra mayúscula, una letra minúscula y un número'
        )
    ,
    cellphone: yup.string().required('Número de celular es requerido (ejm: +57 3008552525)'),
    identificationNumber: yup.number()
        .typeError('Debe ser un número')
        .required('Número de identificación es requerido')
        .positive('Debe ser un número positivo')
        .integer('Debe ser un número entero'),
});

const RegisterForm: React.FC<RegisterFormProps> = ({ onSwitchToLogin }) => {
    const [openModal, setOpenModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const handleRegister = async (data: any): Promise<any> => {
        try {
            const cellphone = `+${data.cellphone}`
            const response = await useRegisterSubmit({ ...data, cellphone });
            console.log("Registro exitoso respuesta desde register component", response.data);
            if (response.data !== undefined) {
                setOpenModal(true);
            }
        } catch (error: any) {
            console.error("Error en la petición:", error.message);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
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
                height: '80%',
                borderRadius: '10px',
                padding: '5%',
                backgroundColor: "rgba(115, 178, 182, 0.5)",
            }}>
                <Typography variant="h2" align="center" gutterBottom>
                    Bienvenido
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <img src="static/assets/LsiluetaLogin.png" alt="Perro" style={{ width: '20vw', height: '25vh' }} />
                </Box>
                <Typography variant="body1" align="center" sx={{ marginTop: '10px', marginBottom:'20px', fontWeight: 'bold' }}>
                    ¿Ya tienes una cuenta?{''}
                    <br />
                    <span onClick={onSwitchToLogin} style={{ cursor: "pointer", color: "#293241" }}>
                        Inicia Sesión
                    </span>
                </Typography>
                <form onSubmit={handleSubmit(handleRegister)}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px',
                        width: '100%',
                        height: '100%'
                    }}>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <InputField
                                label="Nombre completo"
                                field={field}
                                error={errors.name}
                                endAdornment={<PetsSharpIcon />} />
                        )} />

                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <InputField
                                label="Correo electrónico"
                                field={field}
                                error={errors.email}
                                endAdornment={<PetsSharpIcon />} />
                        )} />

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
                                )} />
                        )} />

                    <Controller
                        name="identificationNumber"
                        control={control}
                        render={({ field }) => (
                            <InputField
                                label="Número de identificación"
                                field={field}
                                error={errors.identificationNumber}
                                endAdornment={<PetsSharpIcon />} />
                        )} />

                    <Controller
                        name="cellphone"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <>
                                <PhoneInput
                                    country={'co'}
                                    value={field.value}
                                    onChange={field.onChange}
                                    inputProps={{
                                        name: 'cellphone',
                                        required: true,
                                        autoFocus: true,
                                    }}
                                    containerStyle={{ width: '80%' }}
                                    inputStyle={{
                                        width: '100%',
                                        height: '8vh',
                                        borderRadius: '20px',
                                        backgroundColor: '#A8D0D2',
                                        borderColor: '#ffffff',
                                    }}
                                    specialLabel="Número de celular" />
                                {errors.cellphone && (
                                    <Typography variant="body2" color="error">
                                        {errors.cellphone.message}
                                    </Typography>
                                )}
                            </>
                        )} />

                    <SubmitButton text="REGISTRARSE" color='complementary' colorProperties='dark' />
                </form>
            </Paper>
            <ReusableModal
                open={openModal}
                handleClose={handleCloseModal}
                title="Verificación de Correo Electrónico"
                description="Por favor, revisa tu correo electrónico para verificar tu cuenta."
                buttonText="CERRAR"
            />
        </>
    );
};

export default RegisterForm;