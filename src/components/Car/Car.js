import React from 'react';
import './Car.css'

const Car = (props) => {
    const {name, price, img} = props.car; //destruct
    return (
        <div className='car'>
            <img src={img} alt="car" />
            <h3 className='car-name'>{name}</h3>
            <h5 className='price'>{price}</h5>
        </div>
    );
};

export default Car;