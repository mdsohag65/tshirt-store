import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromCart }) => {
    // conditional rendering options:
    // 1. Element variable
    //2. ternary operator => condition ? true : false
    // && operator (shortHand)
    let command;
    if (cart.length === 0) {
        command = <p>Please add at least one item!!</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more...</p>
    }
    else {
        command = <p>Thanks for adding items</p>
    }
    return (
        <div>
            <h3>Item Selected: {cart.length}</h3>

            {
                cart.map(tShirt => <p>
                    {tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 3 && <div className='orange'>
                <h3>Want some more??</h3>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Clear All</button>} <br />
            {cart.length === 4 && <button className='orange'>Proceed Checkout</button>}
        </div>
    );
};

export default Cart;