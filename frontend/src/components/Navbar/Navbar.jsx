import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/Storecontext'

const Navbar = ({setShowLogin}) => {
  const navigate=useNavigate();
  const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
    const [menu,setMenu]=useState("home")
    const logout=()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
    }
  return (
    <div className='navbar'>
      <Link to="/"> <img src={assets.logo} alt=''className='logo' /></Link>
       
        <ul className='navbar-menu'>
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >home</Link>
            <a href='#ExploreMenu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
            {/* <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li> */}
            <a href="#Footer"onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>
        </ul>
        <div className='navbar-right'>
            <img  src={assets.search_icon} alt=''/>
            <div className='navbar-search-icon'>
               <Link to='/cart'> <img src={assets.basket_icon} alt=''/> </Link>
                <div className={getTotalCartAmount()===0?"":"dot"} ></div>
             </div>
             {!token?<button onClick={()=>setShowLogin(true)}>sign in </button>
             :<div className='navbar-profile'>
               <img src={assets.profile_icon} alt="" />
                <ul className='nav-profile-dropdown'>
                   <li>
                    <img src={assets.bag_icon}></img>
                    <Link to="/myorders"> <p>orders</p></Link>
                   </li>
                   <hr></hr>
               <li>
                <img src={assets.logout_icon}></img>
                <p onClick={logout}>logout</p>
               </li>
                </ul>
               </div> 
               }
             

        </div>

    </div>
  )
}

export default Navbar