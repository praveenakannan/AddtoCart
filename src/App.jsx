import {useState} from 'react';
import Navbar from './components/Navbar';
import AddToCart from './components/AddToCart';

function App  ()  {
  const [cartCount, setCardCount] = useState(0);
  let data=[
    {
         "Image": "https://m.media-amazon.com/images/I/61km-4ZNJpL.jpg",  
         "id": "1",
         "name": "Beats Headphone",
         "price": "999"
     },
     {
         "Image": "https://www.boat-lifestyle.com/products/rockerz-450.jpg",
        "id": "2",
        "name": "Boat Headphone",
        "price": "899"
     },
     {
         "Image": "https://www.maplestore.in/cdn/shop/files/121.jpg?v=1702900140&width=493.jpg" ,
        "id": "3",
        "name": "Sennheiser",
        "price": "799"
     },
     {
         "Image": "https://cliktodeal.com/wp-content/uploads/2020/08/apple-iphone-x-a1901-256gb-silver.jpg" ,
        "id": "4",
        "name": "Iphone X",
        "price": "1999"
     },
     {
      "Image": "https://m.media-amazon.com/images/I/61pp1qRRtpL._SL1500_.jpg" ,
        "id": "5",
        "name": "Samsung Galaxy 23 Ultra",
        "price": "1099"
     },
     {
        "Image": "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_UF1000,1000_QL80_.jpg" ,  
        "id": "6",
        "name": "OnePlus",
        "price": "1299"
     },
     {
        "Image": "https://m.media-amazon.com/images/I/61bX2AoGj2L._SX466_.jpg",
        "id": "7",
        "name": "Macbook Pro",
        "price": "2999"
     },
     {
         "Image": "https://m.media-amazon.com/images/I/51xWDDagD8L._SX300_SY300_QL70_FMwebp_.jpg" ,
         "id": "8",
        "name": "Acar Laptop",
        "price": "1299"
     }
   ];
   const [product, setProduct] = useState(data);
  return (
    <div>
      {/* <Navbar/> */}
      <AddToCart  cartCount={cartCount} setCardCount={setCardCount} product={product} setProduct={setProduct}  />
    </div>
  );
};

export default App;