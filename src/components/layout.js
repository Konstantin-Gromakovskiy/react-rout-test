import { NavLink, Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to = '/'>Home</NavLink>
        <NavLink to ='/posts'>Posts</NavLink>
        <NavLink to ='/about'>About</NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">My footer 2024</footer>
    </>
  );
}

export default Layout;