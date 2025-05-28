import connectdb from "./config/db.js";
import express from 'express'
import User from "./models/userSchema.js"; 
import router from './routes/userRoutes.js'
const app = express()
connectdb()

app.use(express.json())
const Port = process.env.PORT || 5000
app.listen(Port, ()=>{
    console.log(`Server running on port ${Port}`)
})
