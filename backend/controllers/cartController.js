import userModel from '../models/userModel.js';


//add item to user cart

const addToCart= async(req,res)=>{
    try{
        let userData= await userModel.findOne({_id:req.body.userId});
        let cartData=await userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId]=1;
        }
        else
        {
            cartData[req.body.itemId]=cartData[req.body.itemId]+1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"added to cart"});
        }
        catch(err)
        {
            res.json({success:false,message:err});
            }
            

}


//remove from user cart
const removeFromCart= async(req,res)=>{
 try{
    let userData= await userModel.findOne({_id:req.body.userId});
    let cartData=await userData.cartData;
    if(cartData[req.body.itemId])
        {
            if(cartData[req.body.itemId]==1)
                {
                    delete cartData[req.body.itemId];
                    }
                    else
                    {
                        cartData[req.body.itemId]=cartData[req.body.itemId]-1;
                        }
                        }
                        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
                        res.json({success:true,message:"removed from cart"});
                        }
                        catch(err)
                        {
                            res.json({success:false,message:err});
                            }
            
            
}

// get/fetch user cart data

const getCart= async(req,res)=>{
    try{
        let userData= await userModel.findOne({_id:req.body.userId});
        let cartData=await userData.cartData;
        res.json({success:true,cartData});
        }
        catch(err)
        {
            res.json({success:false,message:err});
            }
            

}


export {addToCart, removeFromCart, getCart};