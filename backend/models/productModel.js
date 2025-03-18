import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: Array,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    transmission: {
        type: String,
        required: true
    },
    ownership: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    kmsDriven: {
        type: String,
        required: true
    },
    fuel: {
        type: String,
        required: true
    },
    // fuelType: {
    //     type: String,
    //     required: true
    // }

})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;