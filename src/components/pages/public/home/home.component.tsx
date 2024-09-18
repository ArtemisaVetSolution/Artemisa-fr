import { Box, Button, Typography } from "@mui/material";
import Card from "./components/card.component";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        margin: "0",
      }}
    >
      <Box
        sx={{
          backgroundColor: "dark.main",
          width: "100%",
          height: "60%",
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            height: "90%",
          }}
        >
          <Box
            component="img"
            src="static/assets/lindo-perro-sacando-lengua-ilustracion-icono-dibujos-animados.png"
            ></Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            width: "30%",
            height: "90%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h2" sx={{ color: "ligth.main" }}>
              Artemisa
            </Typography>
            <Typography variant="h3" sx={{ color: "ligth.main" }}>
              Vet solutions
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ color: "ligth.main" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            veritatis, quidem unde in dicta tempora asperiores animi nihil
            molestias velit{" "}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "complementary.main",
              "&:hover": {
                backgroundColor: "#ed411A",
              },
            }}
            onClick={()=>{navigate('/asasa')}}
          >
            Ir a nuestro managment
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "35%",
            height: "90%",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "ligth.main",
          width: "100%",
          height: "40%",
          padding: "1%",
        }}
      >
        <Card
          title="Servicios"
          subtitle="Baño"
          description="Este es una descripcion para un servicio de baño"
        ></Card>
      </Box>
    </Box>
  );
};

export default Home;
