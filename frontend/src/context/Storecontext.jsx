import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const StoreContext=createContext(null)
const StoreContextProvider=(props)=>{

const [cartItems,SetCartItems]=useState({});
const addtoCart = async (itemId)=>{
    if(!cartItems[itemId]){
        SetCartItems((prev=>({...prev,[itemId]:1})))
    }
    else
    {
        SetCartItems((prev=>({...prev,[itemId]:prev[itemId]+1})))
    }
    if(token)
    {
        await axios.post(url+'/api/cart/add',{itemId},{headers:{token}})
    }
}

const[food_list,setFoodList]=useState([]);


const fetchFoodList=async()=>{
const response=await axios.get(url+"/api/food/list");
setFoodList(response.data.data);

}
const removeFromCart=async (itemid)=>{
    SetCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))

    if(token)
    {
        await axios.post(url+'/api/cart/remove',{itemid},{headers:{token}})
    }
}


   const loadCartData=async (token)=>{
     const response=await axios.post(url+"/api/cart/get",{},{headers:{token}})
    SetCartItems(response.data.cartData)
}

const url="http://localhost:4000";

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
   async function loadData() {
await fetchFoodList(); 

if(localStorage.getItem("token")){
    setToken(localStorage.getItem("token"));
  await loadCartData(localStorage.getItem("token"))
   }
}

 loadData();  
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