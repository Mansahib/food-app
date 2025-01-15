import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext=createContext(null)
const StoreContextProvider=(props)=>{

const [cartItems,SetCartItems]=useState({});
const addtoCart=(itemId)=>{
    if(!cartItems[itemId]){
        SetCartItems((prev=>({...prev,[itemId]:1})))
    }
    else
    {
        SetCartItems((prev=>({...prev,[itemId]:prev[itemId]+1})))
    }
}
const removeFromCart=(itemid)=>{
    SetCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
}

const url="http://localhost:4000"

const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for (const item in cartItems) {  
    if (cartItems[item]>0) {
    let itemInfo = food_list.find((product)=>product._id===item); 
    totalAmount+= itemInfo.price * cartItems[item];
    }
 }
    
    return totalAmount;
}

const [token,setToken]=useState('');
useEffect(()=>{
if(localStorage.getItem("token"))
    setToken(localStorage.getItem("token"));
},[])
// useEffect(()=>{
// console.log(cartItems);
// },[cartItems])
    const contextValue={
            food_list,
            cartItems,
            SetCartItems,
            addtoCart,
            removeFromCart,
            getTotalCartAmount,
            url,
            token,
            setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;