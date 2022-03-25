import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Buy.css';

const Buy = () => {
    const [cars, setCars] = useState([]);


    useEffect( () => {
        fetch('cars.json')
        .then(res=>res.json())
        .then(data => setCars(data));
    }, [])



    return (
        <div className='buying-container'>
            <div className="cars-container">
                {
                    cars.map(car=> <Car
                     key={car.id}
                     car={car}
                     ></Car>)
                }
            </div>

            <div className="cart-container">
                <h2>Order placed</h2>
            </div>
        </div>
    );
};

export default Buy;