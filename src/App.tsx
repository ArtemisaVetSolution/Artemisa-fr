
import { PublicRoutes } from './models/routes/routes.model';
import { materialTheme } from './state/context/theme';
import LoginForm from './components/pages/public/login/login.component';
import { Route } from "react-router-dom";
import { RoutesPlusNotFound } from "./components/utilities/routes-with-notFound.component";
import Home from "./components/pages/public/home/home.component";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Appointments from './components/pages/private/appointments/appointments.component';


function App() {
  //Logica
  return (
    //Todo lo que retorna el componente App se renderiza en el componente root
    // Todo: - snackbar providers - and guards
    <ThemeProvider theme={materialTheme}>
      <CssBaseline enableColorScheme />
      <RoutesPlusNotFound>
        <Route path="/" element={<Home />} />
          <Route path={PublicRoutes.LOGIN} element={<LoginForm/>}/>
          <Route path="/appointments" element={<Appointments/>}/>
      </RoutesPlusNotFound>
    </ThemeProvider>
  );
}

export default App;
