const ItemDetail = ({ nombre, precio, img, descripcion }) => {

    return (
        <div>
            <img src={img} alt={nombre} />
            <h2>{nombre} </h2>
            <h3>Precio: ${precio} </h3>
            <p>{descripcion} </p>
        </div>
    )
}

export default ItemDetail