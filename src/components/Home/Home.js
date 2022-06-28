import React from 'react';
import './Home.css';
import Cart from '../Cart/Cart';
import useTshirts from '../../hooks/useTshirts';

const Home = () => {
    const [tShirts, setTShits] = useTshirts();
    return (
        <section className='container'>
            <div className="tshirt-container">

            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </section>
    );
};

export default Home;