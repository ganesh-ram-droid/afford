import express from "express"
import cors from "cors"
import { connectDB } from "./Config/db.js"
import dotenv from "dotenv"
import { userRouter } from "./Route/userRoute.js"
dotenv.config()

const PORT =3000
const app = express()
app.use(express.json());
connectDB()
app.use(cors())
app.use('/user',userRouter)
app.listen(PORT,()=>{
    console.log(`Server Running On the port ${PORT}`);
    
})
