import { AuthService } from "@/services/auth.service";
import { emptyUserState, setUser } from "@/state/redux/states";
import { IAppStore } from "@/state/redux/store";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { Group } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const UserLayout = () => {
  const userState = useSelector((state: IAppStore) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    try {
      AuthService.logout();
      dispatch(setUser(emptyUserState));
      sessionStorage.clear();
      navigate("/");
    } catch (error) {}
  };
  const [value, setValue] = useState(0);
  return (
    <Box
      maxWidth={"100vw"}
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "10vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "dark.main",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "20vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" color="ligth.main">
            Coloque su logo aqui
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "60vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ width: "100%", backgroundColor: "dark.main" }}
          >
            <BottomNavigationAction
              label="Recents"
              sx={{
                "& .MuiBottomNavigationAction-label": {
                  color: "ligth.main",
                  "&:hover": {
                    color: "secondary.main", // Cambia el color del label en hover
                  },
                },
                "& .MuiSvgIcon-root": {
                  "&:hover": {
                    color: "secondary.main", // Cambia el color del icono en hover
                  },
                },
              }}
              icon={<Group color="#FFF" />}
            />
          </BottomNavigation>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "20vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {userState.email ? (
            <Button
              onClick={() => {
                handleLogout();
              }}
              sx={{
                backgroundColor: "primary.main",
                color: "ligth.main",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "complementary.main" },
              }}
            >
              {" "}
              Cerrar sesion{" "}
            </Button>
          ) : (
            <Button
              onClick={() => {
                navigate("/login");
              }}
              sx={{
                backgroundColor: "primary.main",
                color: "ligth.main",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "complementary.main" },
              }}
            >
              Iniciar sesion
            </Button>
          )}
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};

export default UserLayout;
