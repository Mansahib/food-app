import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/Storecontext'

const PlaceOrder = () => {
  const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivey Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='firstname' />
          <input type="text"  placeholder='lastname' />
        </div>
        <input type="text" placeholder='email' />
        <input type="text" placeholder='street' />
        <div className="multi-fields">
          <input type="text" placeholder='city' />
          <input type="text"  placeholder='state' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='pincode' />
          <input type="text"  placeholder='location' />
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
            <h2>cart total</h2>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-detail">
              <p>Delivery fee</p>
              <p>${2}</p>
              
            </div>
            <div className="cart-total-detail">
              <p>Total</p>
              <p>${getTotalCartAmount()+2}</p>
            </div>
            <hr></hr>
            <button >payment</button>
          </div>


      </div>
    </form>
  )
}

export default PlaceOrder