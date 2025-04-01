import { v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel.js'

const addProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            category,
            transmission,
            ownership,
            carModel,
            kmsDriven,
            fuel
        } = req.body
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]
        const image5 = req.files.image5 && req.files.image5[0]
        const image6 = req.files.image5 && req.files.image6[0]
        const image7 = req.files.image5 && req.files.image7[0]
        const image8 = req.files.image5 && req.files.image8[0]
        const image9 = req.files.image5 && req.files.image9[0]
        const image10 = req.files.image5 && req.files.image10[0]
        const image11 = req.files.image5 && req.files.image11[0]
        const image12 = req.files.image5 && req.files.image12[0]
        const image13 = req.files.image5 && req.files.image13[0]
        const image14 = req.files.image5 && req.files.image14[0]
        const image15 = req.files.image5 && req.files.image15[0]

        const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15].filter((item) => item !== undefined)

        const imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' })
                return result.secure_url
            })
        )

        // console.log(name, description, price, category, subCategory)
        // console.log(imagesUrl)

        const productData = {
            name,
            description,
            price: price,
            category,
            transmission,
            ownership,
            carModel,
            kmsDriven,
            fuel,
            image: imagesUrl,
        }
        // console.log(productData)

        const product = new productModel(productData)
        await product.save()

        res.json({
            success: true,
            message: "Product added successfully",
            product,
        })

    } catch (error) {
        console.log("Error adding product:", error)
        res.json({
            success: false,
            message: "Error adding product",
            error: error.message,
        })
    }

}

const listProduct = async (req, res) => {

    try {
        const products = await productModel.find({})
        res.json({
            success: true,
            products
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Server Error in listProducts controller"
        })
    }

}

const removeProduct = async (req, res) => {

    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({
            success: true,
            message: "Product removed successfully"
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Server Error in removeProducts controller"
        })
    }

}

const singleProduct = async (req, res) => {

    try {
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({
            success: true,
            product
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Server Error in singleProduct controller"
        })
    }

}

export { addProduct, removeProduct, singleProduct, listProduct }