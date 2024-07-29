import React,{useState} from 'react';
import "./Cart.css";


const Cart = ({item, setCardCount}) => {
    const [status, setStatus]=useState(true);

    const cardAdd = () => {
        setStatus(false);
        setCardCount((val) => val + 1);
      };
    
      const cardRemove = () => {
        setStatus(true);
        setCardCount((val) => val - 1);
      };


    return (
      <div>

<>
<div className='container'>
<div className='card' >

<img  src={item.image} className='img' alt={item.id} /> 


  <div className='card-body'>
      <h5 className='card-text'>{item.id}</h5>
      <h5 className='card-text'>{item.name}</h5>
      <h5 className='card-text'>{item.price}</h5>
      {status ? (
                    <button className='addcard' onClick={cardAdd}>Add to Cart</button>
                ) : (
                    <button className='remove' onClick={cardRemove}>Remove from Cart</button>
                 )}
  </div>

</div>
</div>

</>

            </div>
            
    );
};

export default Cart;