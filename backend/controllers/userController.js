import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}


// Route for Admin Login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({
                success: true,
                message: "Admin Logged in successfully",
                token
            })
        }
        else {
            res.json({
                success: false,
                message: "Invalid Credentials"
            })
        }
    } catch (error) {
        console.error(error)
        res.json({
            success: false,
            message: "Server Error in adminLogin controller"
        })
    }

}

export { adminLogin }