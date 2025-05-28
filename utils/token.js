import jwt from 'jsonwebtoken'
const generatetoken = (id) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET,{expiresIn: '30d'})

}