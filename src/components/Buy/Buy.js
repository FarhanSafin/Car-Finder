import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Buy.css';

const Buy = () => {
    const [cars, setCars] = useState([]);

    const [cart,  setCart] = useState([])


    useEffect( () => {
        fetch('cars.json')
        .then(res=>res.json())
        .then(data => setCars(data));
    }, [])


    const handleAddToCart = (car) => {
        const newCart = [...cart, car];
        if(newCart.length < 5){
            setCart(newCart);
        }
        else{
            alert('Cannot select more than 4 cars.')
        }
    }

    const random = () => {
        const newCart = cart;
        let randomItem = newCart[Math.floor(Math.random()*newCart.length)];
        alert('Selected item is ' + randomItem.name);
    }




    const reset = () => {
        const newCart =[];
        setCart(newCart);
    }


    return (
        <div className='buying-container'>
            <div className="cars-container">
                {
                    cars.map(car=> <Car
                     key={car.id}
                     car={car}
                     handleAddToCart={handleAddToCart}
                     ></Car>)
                }
            </div>

            <div className="cart-container">
                <h2>Order placed</h2>
                <div> <h3>Selected Car:</h3> {
                        cart.map((car) => (
                            <p key={car.id}>{car.name}</p>
                        ))
                    }</div>
                    <button className='button' onClick={reset}>Reset</button>
                    <button className='button' onClick={random}>Choose one for me</button>
            </div>
        </div>
    );
};

export default Buy;