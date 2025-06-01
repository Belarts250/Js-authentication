import jwt from 'jsonwebtoken'
const generatetoken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,{expiresIn: '30d'})
}
export default generatetoken