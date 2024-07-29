import React, {useState} from 'react';
import Cart from './Cart';

const AddToCart = ({ cartCount, setCardCount, product, setProduct}) => {
    return (
        <div>
            {product.map((item,index)=>{
            return(
                <>
                <Cart item={item} setCardCount={setCardCount} />

                {/* <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                            <div className="col">
    <div className="card">
      <div>
      <img src="..." className="card-img-top" alt="..."/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{item.id}</h5>
        <p className="card-text">{item.name}</p> 
        <p className="card-text">{item.price}</p>
        
      </div>
    </div>
  </div>
                            </div>
                        </div>
                    </div>
  
 
</div> */}


                </>
        
            )
        })}
        </div>
    );
};

export default AddToCart;