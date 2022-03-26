import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './Buy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCrosshairs } from '@fortawesome/free-solid-svg-icons';

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
        alert('Selected car is ' + randomItem.name);
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
                    <button className='button' onClick={reset}>Remove All
                    <FontAwesomeIcon icon={faTrash} className='icon' /></button>
                    <button className='button' onClick={random}>Choose one for me<FontAwesomeIcon icon={faCrosshairs} className='icon' /></button>
            </div>
            <div className='ques-ans'>
                <h1>Question and Answer</h1>
                <h3>How React works?</h3>
                <h5>React is a user interface library. It is based on the javascript programming language. In React, data flows in a single way. The JSX file format is used by React, and babel is used to transpile code into modern javascript. While working with react, we basically use 6 things. JSX, Components, Props, State, Event handler, and Data load are the things we use. In React every components passes through 3 stages. They are Mounting/Initial Stage, Update and finally Unmounting.</h5>
                <h3>Write down difference between props and state</h3>
                <h5>Props are data that can only be read. They can't be changed or modified. Where-else state can be modified using this.setState. For specific websites, if user changes, the state changes. </h5>
                <h3>How useState works?</h3>
                <h5>useState is a react hook. It is asyncronous. By calling useState we get 2 things: the state which is declared and a dispatch function. It maintains track of the state variables and makes sure they're up to current, or it re-renders them if they change.</h5>
            </div>
        </div>
    );
};

export default Buy;