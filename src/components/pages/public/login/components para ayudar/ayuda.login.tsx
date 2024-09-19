// import React, { useState } from 'react';
// import { Box, Card, CardContent, Typography, Container, Button, TextField } from '@mui/material';

// import { ImageCard, InputField } from './components';
// import Grid from '@mui/material/Grid2';
// import { useLoginSubmit } from './hooks/use-login-submit'; 


// const Login: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Holad");
    
//     // Llamas a tu hook para hacer el login
//     // try {
//     //   const response = await useLoginSubmit({ email, password });
//     //   console.log('Login successful:', response);
//     //   // Aquí podrías redirigir al usuario o manejar el éxito
//     // } catch (error) {
//     //   console.error('Login failed:', error);
//     //   // Aquí puedes manejar los errores de autenticación
//     // }
//   };

//   return (
//     <form onSubmit={e=> {e.preventDefault()}}>
//       <Container
//         maxWidth={false}
//         sx={{
//           marginTop: '0',
//           width: '100vw',
//           height: '100vh',
//           padding: 0,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: 'green',
//           margin: 0,
//         }}
//       >
//         <Grid container spacing={2} justifyContent="center" alignItems="stretch" sx={{ backgroundColor: 'yellow', width: '100%' }}>
//           <Grid size={6}>
//             <Card sx={{ height: '100%' }}>
//               <Box sx={{ height: '100%', backgroundColor: 'blue' }}>
//                 <ImageCard image="path/to/your/image.jpg" />
//               </Box>
//             </Card>
//           </Grid>

//           <Grid size={6} sx={{ backgroundColor: 'blue' }}>
//             <Card sx={{ height: '70vh' }}>
//               <CardContent>
//                 <Typography variant="h5" component="div" gutterBottom>
//                   Login
//                 </Typography>
//                 <Box
//                   component="form"
//                   onSubmit={handleSubmit}
//                   sx={{ height: '100%', backgroundColor: 'red' }}
//                 >
//                   <InputField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                   <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                   <Button type='submit'>Login</Button>
//                   {/* <SubmitButton submitfunct={handleSubmit} text="Login" /> */}
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </form>
//   );
// };

// export default Login;

import React, { useEffect } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextField, Button, Box, Card, CardContent, Typography, Container } from '@mui/material';
import { useLoginSubmit } from '../hooks/use-login-submit';
import Grid from '@mui/material/Grid2';
// import { ImageCard } from './components';

interface ILoginForm {
  email: string;
  password: string;
}
const preloadImage = (url: string) => {
  const img = new Image();
  img.src = url;
};

const Login: React.FC = () => {
  const { control, register, handleSubmit, formState: { errors } } = useForm<ILoginForm>();
  const onSubmit: SubmitHandler<ILoginForm> = async ({ email, password }) => {
    const response = await useLoginSubmit({ email, password });
    console.log(response);
  };
  useEffect(() => {
    preloadImage('artemisa-fr\src\assets\img\Login.png');
  }, []);

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" alignItems="stretch" sx={{ backgroundColor: 'yellow', width: '100%' }}>

        <Grid size={6}>
          <Card>
            <Box sx={{ height: '100%', backgroundColor: 'blue' }}
            >
                <img src="artemisa-fr\src\assets\img\Login.png" alt="Descripción" style={{ width: '100%', height: 'auto' }} />
            </Box>
          </Card>
        </Grid>

        <Grid size={6}>
          Login
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                {...register('email', { required: 'Email is required' })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
              />
             
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                {...register('password', { required: 'Password is required' })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ''}
              />
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Box>
          </form>
        </Grid>

      </Grid>
    </Container>
  );
};

export default Login;


