import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Imaginantes</Link>
          </li>
          <li>
            <Link to="/Update">Actualizar</Link>
          </li>
          <li>
            <Link to="/actividades">Actividades</Link>
          </li>
          <li>
            <Link to="/UpdateAct">Actualizar actividades</Link>
          </li>
          <li>
            <Link to="/Asignar">Asignaciones</Link>
          </li>
          <li>
            <Link to="/UpdateA">Actualizar Asignaciones</Link>
          </li>
        </ul> 
      </nav>
      <Outlet />
    </>
  )
};
export default Layout;