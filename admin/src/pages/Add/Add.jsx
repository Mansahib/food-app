import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets, url } from '../../assets/assets'
import axios from 'axios'
const Add = ({url}) => {
    
    const [img,setImg]=useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData((data)=>({...data,[name]:value}))
    }
const onSubmitHandler=async(event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', img);
    const response = await axios.post(url + '/api/food/add',formData)
    if(response.data.success){
        alert("Food added successfully");
        setData({
            name:"",
            description:"",
            price:"",
            category:"Salad"

        });
        setImg(false);
    }
    else
    alert("err")
}
  return (
    <div className="add">
      <form onSubmit={onSubmitHandler} className='flex-col'>
        <div className="add-img-upload flex-col">
            <p>upload img</p>
            <label htmlFor='image'>
                <img src={img?URL.createObjectURL(img):assets.upload_area} alt="upload" />
            </label>
            <input  onChange={(e)=>setImg(e.target.files[0])} type="file" id="image" name="image" hidden required/>
        </div>
        <div className="add-product-name flex col">
            <p>product name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="product name" />
        </div>
        <div className="add-product-description flex-col">
            <p>product description</p>
            <textarea onChange={onChangeHandler} value={data.description}  name="description" rows='6' placeholder='write description here' required></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>category</p>
                <select onChange={onChangeHandler}  name="category" id="">
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>price</p>
                <input onChange={onChangeHandler} value={data.price}  type="number" name="price" id="" placeholder='$$' />
            </div>
           
        </div>
        <button  type='submit' className='add-button'>ADD</button>
      </form>
    </div>
  )
}

export default Add