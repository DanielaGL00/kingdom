import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    const logo = <img src="../public/img/Kingdom.png" alt="Logo Kingdom" />;

return (
    <header>
        <Link to={"/"}>
            {logo}
        </Link>

        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}> Todos </NavLink>
                </li>

                <li>
                    <NavLink to={"/categoria/comidas"}> Comidas </NavLink>
                </li>

                <li>
                    <NavLink to={"/categoria/bebidas_alcohol"}> Bebidas alcoholicas </NavLink>
                </li>

                <li>
                    <NavLink to={"/categoria/bebidas_sinalcohol"}> Bebidas sin alcohol </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
)
}

export default NavBar