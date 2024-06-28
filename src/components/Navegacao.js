
import { Outlet, Link } from "react-router-dom";

const Navegacao = () => {
  return (
    <>
      <h1>Minha Pokedex</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sobre">Informação</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};
export default Navegacao;