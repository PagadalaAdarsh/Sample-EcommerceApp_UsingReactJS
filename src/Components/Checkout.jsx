import Payment from "./Payment";
import {useState} from 'react'

function Checkout(props) {

  const [clicked, setClicked] = useState(false)

  function gotoPayment() {
    setClicked(true)
  }

  if(clicked === true)
    return <Payment price = {props.price}/>

  return (
    <>
       <h3>Checkout Your Item and Payment Details</h3>
       <h2>Price : {props.price}</h2>
       <button onClick = {gotoPayment}>
        Go to Payment
        </button>
       
    </>
  );
}

export default Checkout;
