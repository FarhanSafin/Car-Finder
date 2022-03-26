import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <a href="/"><h2>Car Finder</h2></a>
            <div>
                <a href="/">Home</a>
                <a href="https://www.toyota.com/">Toyota</a>
                <a href="https://www.bmw.com/en/index.html">BMW</a>
                <a href="https://www.honda.com/">Honda</a>
                <a href="https://www.nissan-global.com/EN/index.html">Nissan</a>
            </div>
        </nav>
    );
};

export default Header;