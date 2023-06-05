import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    const logo = <img src="../public/img/Kingdom.png" alt="Logo Kingdom" />;
    return (
        <header>
            {logo}
            <nav>
                <ul>
                    <li>Recomendaciones</li>
                    <li>Bebidas alcoholicos</li>
                    <li>Bebidas sin alcohol</li>
                    <li>Comidas</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar