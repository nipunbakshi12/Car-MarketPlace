import jwt from 'jsonwebtoken'
const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.json({
                success: false,
                message: 'Not Authorized Login Again'
            })
        }
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

        // if (
        //     tokenDecode.email !== process.env.ADMIN_EMAIL ||
        //     tokenDecode.password !== process.env.ADMIN_PASSWORD
        // ) {
        //     return res.json({
        //         success: false,
        //         message: 'Not Authorized. Login Again',
        //     });
        // }

        if (tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({
                success: false,
                message: 'Not Authorized Login Again'
            })
        }
        next()

    } catch (error) {
        console.error(error)
        res.json({
            success: false,
            message: 'Server Error in adminAuth middleware'
        })
    }
}

export default adminAuth