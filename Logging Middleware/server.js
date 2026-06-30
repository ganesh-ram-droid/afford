 import express from 'express';
 import cors from "cors"
import { router } from './Routes/LogRoute.js';
 const app = express()
 app.use(cors())
 app.use(express.json())
 const PORT=5000
 app.use('/middle',router)
 app.listen(PORT,()=>{
    console.log(`Server runing at${PORT}`);
    
 })