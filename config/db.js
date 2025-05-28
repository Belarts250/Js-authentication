import mongoose from "mongoose";

const connectdb = () => {
    mongoose.connect("mongodb://localhost:27017/docdb").then(()=>{
        console.log("Connected to database successfully!")
    }).catch(()=>{
        console.log("Error in connecting the database")
    })
}

export default connectdb
