import express from 'express'
import cors from "cors";
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import "dotenv/config";
import CartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';






//config
const app=express()
const port=4000;


//middleware

app.use(express.json())
app.use(cors())

//db connection 
connectDB();


//api endpoint
app.use("/api/food",foodRouter)


app.use("/images",express.static('uploads'))

app.use("/api/user",userRouter)


app.use("/api/cart",CartRouter);

app.use("/api/order",orderRouter);
app.get("/",(req,res)=>{
  res.send("api working")
})



app.listen(port,()=>{
    console.log(`running at http://localhost:${port}`)
})
