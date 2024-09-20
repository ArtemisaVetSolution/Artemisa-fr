import { useNavigate, Outlet } from "react-router-dom"


const Guard = () => {

  const navigate = useNavigate();

  if(sessionStorage.getItem('token') === null || sessionStorage.getItem('user') === null){
    navigate('/login')
  }

  

  return (
    <div>
      
    </div>
  )
}

export default Guard
