import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
const List = ({url}) => {
  
  const [list,setList]=useState([]);
  const fetchList=async()=>{
    const response=await axios.get(url+'/api/food/list');
    
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      alert("error");
    }

  }

  useEffect(()=>{
    fetchList();

  },[])

  const removeFood=async(foodId)=>{
   const response=await axios.post(`${url}/api/food/remove`,{id:foodId})
   await fetchList();
   alert("item has been deleted")
  }

  return (
    <div className='list add flex-col'>
      <p>all food list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>image</b>
          <b>name</b>
          <b>category</b>
          <b>price</b>
          <b>action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className="list-table-format">
              <img src={`${url}/images/`+item.image} alt=""/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)}  className='cursor'>X</p>

              </div>
          )
        })}
      </div>
    </div>
  )
}

export default List