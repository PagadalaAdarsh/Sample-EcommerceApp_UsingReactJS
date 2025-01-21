import Checkout from "./Checkout";
import {useState} from 'react'

function Cart(props) {

  const [clicked, setClicked] = useState(false)

  function gotoCheckout() {
    setClicked(true)
  }

  if(clicked === true)
    return <Checkout price = {props.price}/>

  return (
    <>
       <h3>Add To Cart</h3>
       <h2>Price : {props.price}</h2>
       <button onClick = {gotoCheckout}>
        Go to Checkout
        </button>
       
    </>
  );
}

export default Cart;
