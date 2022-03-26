import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Car.css';

const Car = ({handleAddToCart, car}) => {
    const {name, price, img} = car;
    
    return (
        <div className='car'>
            <img src={img} alt="car" />
            <div className='info'>
                <h3>{name}</h3>
                <h5>Price: {price}</h5>
            </div>
            <button onClick={() => handleAddToCart(car)} className='cart-button'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Car;