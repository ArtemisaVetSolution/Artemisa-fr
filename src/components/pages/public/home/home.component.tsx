import { Box } from "@mui/material"
import Card from "./components/card.component"


const Home = () => {
  
  return (
    <Box sx={{ height: '100vh', width:'100vw', display:'flex', flexDirection:'column', margin: '0' }} >
      <Box sx={{backgroundColor: '#011828', width: '100%', height:'50%'}}></Box>
      <Box sx={{backgroundColor: '#A3C4BC', width: '100%', height:'50%', padding:'1%'}}>
        <Card title="Servicios" subtitle="Baño" description='Este es una descripcion para un servicio de baño'>

        </Card>
      </Box>
    </Box>
  )
}

export default Home
