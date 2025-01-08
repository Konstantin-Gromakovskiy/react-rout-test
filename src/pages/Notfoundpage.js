import { Link } from "react-router"

const Notfoundpage = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to='/'>Go back to the homepage</Link>
    </div>
  )
}

export default Notfoundpage