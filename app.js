import connectdb from "./config/db.js";
import express from 'express'
import router from './routes/userRoutes.js'
import dotenv from "dotenv";

dotenv.config();
const app = express()
app.use(express.json())
connectdb()

app.use('/myapp', router);
// app.use('/myapp', register)
const Port = process.env.PORT || 5000
app.listen(Port, ()=>{
    console.log(`Server running on port ${Port}`)
})
