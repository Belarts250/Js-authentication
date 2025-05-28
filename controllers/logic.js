import User from "../models/userSchema.js";
import bycrpt from 'bcrypt'
// import validateContent from '../middlewares/validation.js'


const newUser = new User({
  name: 'Igihozo Belise',
  email: 'belise@example.com',
  password: 'securepassword123'
});
const login = async(req,res) => {
    const {username, email, password} = req.body
    try{
    const user = await User.findOne({email});
    if (!user) return res.status(400).json({message: "User not found"});

    const isMatch = await bycrpt.compare(password, user.password);
    if(!isMatch) return res.status(401).json({message: "Password not matching"})

    res.status(200).json({message: "Logged in successfully"})
    await newUser.save();
}
    catch (err){
    res.status(500).json({message: "internal server error"})
    }
}
export default login
