import { useLocation, useNavigate } from "react-router";
import useAuth from "../hook/useAuth.js";


const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {signin} = useAuth();

  const fromPage = location.state?.from?.pathname || '/';
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.name.value;
    signin(user, () => {
      navigate(fromPage, {replace: true});
    })
  }


  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="name" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;