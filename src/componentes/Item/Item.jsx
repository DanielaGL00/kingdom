import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({ nombre, precio, img, id }) => {
    return (
        <div className="card">
            <img className="img" alt={nombre} src={img} />
            <div className="text">
                <div className="title">{nombre}</div>
                <p className="p"> ${precio} </p>
                <Link className='enlace' to={`/item/${id}`}> Ver Detalles</Link>
            </div>
        </div>
    );
};

export default Item