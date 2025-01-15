import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/Storecontext'
import axios from 'axios'
const LoginPopup = ({setShowLogin}) => {
  const[currState,setCurrState]=useState("sign up")
  const[data,setData]=useState({
    name:"",
    email: "",
    password: "",
  })


  const {url,setToken}=useContext(StoreContext);

  const onchangeHandler=(event)=>{
const name=event.target.name
const value=event.target.value
setData((data)=>({...data,[name]:value}))


}

const onLogin=async(event)=>{
event.preventDefault();
    let newurl=url;
    if(currState=="login")
        newurl=url+"/api/user/login"
   else
       newurl=url+"/api/user/register"

       const response=await axios.post(newurl,data);

       if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem("token",response.data.token);
        setShowLogin(false)
       }
       else{
        alert(response.data.message)
       }
}



    return (
    <div className='login-popup'>
        <form onSubmit={onLogin} action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState=="login"?<></>:<input name='name' onChange={onchangeHandler} value={data.name} type="text" placeholder="name" /> }
                
                <input name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder="Email" />
                <input name='password' onChange={onchangeHandler} value={data.password} type="password" placeholder="Password" />
            </div>
            <button type='submit'>{currState=="sign up"?'create account':'login'}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required="true" />
                <p>terms and condition</p>
            </div>
            {currState=='login'?
         <p>create new account<span onClick={()=>setCurrState("sign up")}> click here</span></p>:
         <p> already have an account <span onClick={()=>setCurrState("login")}>login here</span></p>
        }
        
         
        </form>
        </div>
  )
}

export default LoginPopup