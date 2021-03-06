import { Navigate } from "react-router-dom"


const PrivateRoute = ({ children , isLogged}) => {
  
  if (!isLogged){
    return <Navigate to="/login" replace />
  }

  return children;
}

export default PrivateRoute