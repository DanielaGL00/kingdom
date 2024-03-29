import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "../public/img/iconCompras.png";

  return (
    <div>
      <Link to="/cart">
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        {
          cantidadTotal > 0 && <strong className='enlaceCarrito'>  {cantidadTotal} </strong> 
        }
      </Link>
    </div>
  )
}

export default CartWidget