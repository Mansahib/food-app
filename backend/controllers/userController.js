import userModel from '../models/userModel.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


//login user

const loginUser=async(req,res)=>{
   
    const {email,password}=req.body;
   try{
    const user=await userModel.findOne({email});
    if(!user){
        return res.json({success:false,message:"Invalid email or password"});
    } 
       
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.json({success:false,message:"Invalid email or password"});
    } 

    const token=createToken(user._id);
    res.json({success:true,token})
   }
    catch(err){
        console.log(err);
        res.json({success:false,message:"Error"})
    }



   
}

const createToken=(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET);
}



//register user

const registerUser=async(req,res)=>{
    const {name,password,email}=req.body;
    try{
        const exist=await userModel.findOne({email});
        if(exist){
            return res.json({success:false,message:"already exist"});
        }




         if(!validator.isEmail(email)){
            return res.json({success:false,message:"invalid email"});
         } 
         if(password.length<8){
            return res.json({success:false,message:"invalid password"});
            }
 


    // crpt password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);



    //new user
    const newUser = new userModel({
        name: name,
        email: email,
        password: hashedPassword
        });


        const user=await newUser.save();
        const token=createToken(user._id);
        res.json({success:true,token});

    }
     catch(err){
        console.log(err);
        res.json({success:false,message:"error"});

     }


}

export {loginUser,registerUser};