import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import President from '../President/President';
import './Presidents.css';

const Experts = () => {
    const [presidents, setPresidents] = useState([]);
    const [cart, setCart] = useState([]);
  useEffect(()=>
  {
    fetch('./Experts.json')
    .then(res=>res.json())
    .then(data=>setPresidents(data));
  },[]);

  const handleAddToCart = (president)=>
  {
    const newCart = [...cart, president];
    setCart(newCart);
    console.log(president.president);
  }
    return (
        <div className="body">
           <div className="background">
           {/* <div>
           <h3>Software Experts</h3>
           </div> */}
            {
                presidents.map(president=> <President key={president.number} president={president}
                handleAddToCart={handleAddToCart}></President>)
            }
           </div>
           <div className="cart-container">
           <Cart cart={cart}></Cart>
           </div>
            
        </div>
    );
};

export default Experts;