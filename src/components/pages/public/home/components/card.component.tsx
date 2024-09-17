import { Paper } from "@mui/material"

interface IProps {
  title: string
  subtitle: string
  description: string
}

const Card = ({title, subtitle, description}: IProps) => {
  return (
    <Paper sx={{width:'25%', height:'80%' }} elevation={5}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
    </Paper>
  )
}

export default Card
