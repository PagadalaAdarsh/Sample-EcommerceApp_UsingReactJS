import React from 'react'

export default function Payment(props) {
  return (
    <div>Payment Details Info
        <h1>Payment Completed Successfully</h1>
        <h1>Your Order is being processed for item <h2>Price : {props.price}</h2></h1>
    </div>
  )
}
