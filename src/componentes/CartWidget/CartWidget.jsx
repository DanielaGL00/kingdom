import './CartWidget.css'

const CartWidget = () => {
    const carrito = <img src="../public/img/iconCompras.png" alt="Carrito de compras" />;
  return (
    <div>
        {carrito}
        <strong>10</strong>
    </div>
  )
}

export default CartWidget