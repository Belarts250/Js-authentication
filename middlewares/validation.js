import joi from "joi";
const validateContent = (data) =>{
    const generalSchema = joi.object({
        name:joi.string().min(3).max(30).required(),
        email:joi.string().email().required(),
        password: joi.string()
        .min(6)
        .max(12)
        .required()
        .pattern(new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$`))
        .messages({'string.pattern.base':'Password must include uppercase, lowercase, number, and special character'})

    })
    const {error,value} = generalSchema.validate(data);
    if (error) {
        throw new Error("error");
        
    }
    return value;
}
export default validateContent