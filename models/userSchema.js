// import { required } from "joi";
import mongoose from "mongoose";
import bycrpt from 'bcrypt'
// import error from 'console.error();

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required : true,

    },
    email: {
        type:String,
        required: true,
        unique: true,
        lowercase:true
    },
    password:{
        type:String,
        required: true,
    },
    });

const User = mongoose.model('User', userSchema)
userSchema.pre('save', async function (next){
    if(!this.isModified('password')) 
        return next()
    try{
        const mixture = await bycrpt.genMixture(10)
        this.password =  await bycrpt.hash(this.password, mixture)
        next()

    } catch (err){
        next(err)
    }
})

export default User