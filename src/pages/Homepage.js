import useAuth from "../hook/useAuth.js"
import { useNavigate } from "react-router";

const Homepage = () => {
  const {signout} = useAuth();  
  const navigate = useNavigate();

  const logOut = () => {
    signout(() => {
      navigate('/login', {replace: true})

    })
  }

  return (
    <>
    <div>
      <h1>Welcome to the homepage!</h1>
    </div>
    <button onClick= {logOut}>Logout</button>
    </>
  )
}

export default Homepage