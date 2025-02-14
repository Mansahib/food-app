import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://<your db name>:<your password>@cluster0.5eu9v.mongodb.net/food-del').then(()=>console.log('connected'));
}
