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

  if(!userState.email){
    sessionStorage.clear()
  }

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
          padding: "15px"
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="ligth.main"
            onClick={() => {
              navigate("/");
            }
          }
          sx={{
            width: "100%",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": { color: "complementary.main" },
          }}
          >
            Coloque su logo aqui
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100%",
            width: "60%",
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
              label="Tu espacio"
              sx={{
                "& .MuiBottomNavigationAction-label": {
                  color: "ligth.main",
                  fontSize: "1rem",
                  fontWeight: "600",
                  transition: " all 0.3s ease",
                  "&:hover": {
                    color: "complementary.main", // Cambia el color del label en hover
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
            width: "20%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {userState.id ? (
            <Box 
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" color="ligth.main"
                sx={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  width: "50%",
                }
                }
              >
                {userState.name}
              </Typography>
              <Button
                onClick={() => {
                  handleLogout();
                }}
                sx={{
                  backgroundColor: "primary.main",
                  color: "ligth.main",
                  transition: "all 0.3s ease",
                  width: "50%",
                  "&:hover": { backgroundColor: "complementary.main" },
                }}
              >
                {" "}
                Cerrar sesion{" "}
              </Button>
            </Box>
          ) : (
            <Button
              onClick={() => {
                navigate("/login");
              }}
              sx={{
                backgroundColor: "primary.main",
                color: "ligth.main",
                transition: "all 0.3s ease",
                width: "50%",
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
