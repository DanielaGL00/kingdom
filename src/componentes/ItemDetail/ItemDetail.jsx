import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({ id, nombre, precio, img, descripcion, stock }) => {

    //Cantidad de productos agregados
    const [agregarCantidad, setAgregarCantidad] = useState(0);

    ///useContext
    const { agregarProducto } = useContext(CarritoContext);

    //Función manejadora de la cantidad: 
    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }

    
    return (
        <div className='agregarProducto'>
            <img src={img} alt={nombre} />
            <h2>{nombre} </h2>
            <h3>Precio: ${precio} </h3>
            <p>{descripcion} </p>
            {agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)}
        </div>
    )
}

export default ItemDetail