import React,{useContext}  from 'react';
import AddContext from '../Context/AppContext';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png';


const OrderItem = ({product}) => {
    const {removeFromCart} = useContext(AddContext);

    const handleRemove = product => {
        removeFromCart(product);
    } 
    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]}  alt= {product.title} />
            </figure>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <img src={close} alt="close" onClick={() => handleRemove(product)}  />
        </div>
    );
}

export default OrderItem;