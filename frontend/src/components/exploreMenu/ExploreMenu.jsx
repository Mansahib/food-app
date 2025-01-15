import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='ExploreMenu' id='ExploreMenu'>
        <h1> Explore our menu</h1>
        <p className='ExploreMenu-Text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et praesentium vitae commodi adipisci vero est. Amet suscipit consequatur blanditiis veritatis facilis, ipsa voluptatem ab ex reiciendis iure quidem, ducimus nihil.</p>
       <div className='ExploreMenu-List'>
        {menu_list.map((item, index) =>{ 
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='ExploreMenu-List-Item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                    </div>
            )
         })}
       </div>
       <hr></hr>
    </div>
  )
}

export default ExploreMenu