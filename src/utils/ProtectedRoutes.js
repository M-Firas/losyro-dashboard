import { useAuth } from "./AuthContext"
import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes = () => {
  const auth = useAuth()
  
  //checking if the user exists
  if(!auth.user){
     return <Navigate to='/login' />
  }
  return <Outlet />
}

export default ProtectedRoutes