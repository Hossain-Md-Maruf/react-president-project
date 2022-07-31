import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const president of cart)
    {
        total = parseInt(total + president.value);
    }
    return (
        <div className="cart">
            <h2>All Presidents:</h2>
           <h3>Total selected:{props.cart.length}</h3>
           <h3>Value: ${total}M</h3>
        </div>
    );
};

export default Cart;