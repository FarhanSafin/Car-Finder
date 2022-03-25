import React from 'react';
import './Car.css'

const Car = (props) => {
    const {handleAddToCart, car} = props;
    const {name, price, img} = car;
    
    return (
        <div className='car'>
            <img src={img} alt="car" />
            <div className='info'>
                <h3>{name}</h3>
                <h5>Price: {price}</h5>
            </div>
            <button onClick={() => handleAddToCart(car)} className='cart-button'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Car;