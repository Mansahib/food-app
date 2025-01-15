import React, { useContext } from 'react'
import  './Cart.css'
import {useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/Storecontext';
const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext );
  const navigate=useNavigate();
  return (
    <div>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>items</p>
            <p>title</p>
            <p>price</p>
            <p>quantity</p>
            <p>total</p>
            <p>remove</p>
            </div> 
            <br></br>
            <hr></hr>   
            
         {food_list.map((item,index)=>{
            if(cartItems[item._id]>0)
            {
              return(
                <>
                <div className='cart-items-title cart-items-item'> 
                   <img src={item.image} alt="" />  
                   <p>{item.name}</p>
                   <p>{item.price}</p>
                   <p>${cartItems[item._id]}</p>
                   <p>${cartItems[item._id]*item.price}</p>
                   <p className='cross' onClick={()=>removeFromCart(item._id)} >x</p>
                </div>
                <hr />
                </>
              )      
          }
  } )} 
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2></h2>
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
            <button onClick={()=>navigate('/order')}>checkout </button>
          </div>
          
        </div>
        <div className="cart-promocode">
          <div>
            <p>Enter discount code</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder="Enter promo code" />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart