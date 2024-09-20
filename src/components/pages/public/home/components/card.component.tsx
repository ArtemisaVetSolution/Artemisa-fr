
import { Paper, Typography } from "@mui/material"
import ControlPointIcon from '@mui/icons-material/ControlPoint';


interface IProps {
  name: string
  // subtitle: string
  // description: string
}

const Card = ({ name }: IProps) => {

  const renderIcon = () => {
    switch (name) {
      case "Consulta general":
        return <ControlPointIcon sx={{fontSize:"40px"}}/>;
      case "Servicio 2":
      case "Servicio 3":
        
      default:
        return null;
    }
  };
  return (
    <Paper sx={{
      width: '120px',
      height: '120px',
      borderRadius: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      transition: "all 0.3s ease",  // Suaviza la transición al hacer hover
      '&:hover': {
        boxShadow: 8,  // Aumenta la sombra
        transform: "scale(1.1)",  // Agranda ligeramente el Paper
      }

    }} elevation={5}>
      {renderIcon()      }
      <Typography variant="h6" sx={{ textAlign: "center", fontSize:"16px" }}>{name}</Typography>
    </Paper>
  )
}

export default Card
