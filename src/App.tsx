import { Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { PublicRoutes } from './models/routes/routes.model';
import { materialTheme } from './state/context/theme';
import { RoutesPlusNotFound } from "./components/utilities/routes-with-notFound.component";
import Home from "./components/pages/public/home/home.component";
import Auth from "./components/pages/public/auth/auth.component";
import RecoverPasswordEmail from "./components/pages/public/auth/recover-password/recoverPasswordEmail.component";
import RecoverPasswordNewPassword from "./components/pages/public/auth/recover-password/recoverPasswordNewPass.component";


function App() {
  //Logica
  return (
    //Todo lo que retorna el componente App se renderiza en el componente root
    // Todo: - snackbar providers - and guards
    <ThemeProvider theme={materialTheme}>
      <CssBaseline enableColorScheme />
      <RoutesPlusNotFound>
        <Route path="/" element={<Home />} />
        <Route path={PublicRoutes.LOGIN} element={<Auth initialView="login" />} />
        <Route path={PublicRoutes.REGISTER} element={<Auth initialView="register" />} />
        <Route path={PublicRoutes.RECOVER_PASSWORD} element={<RecoverPasswordEmail/>}></Route>
        <Route path={PublicRoutes.RECOVER_PASSWORD_NEW_PASS} element={<RecoverPasswordNewPassword/>}></Route>
      </RoutesPlusNotFound>
    </ThemeProvider>
  );
}

export default App;
