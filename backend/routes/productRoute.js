import express from 'express'
import { addProduct, removeProduct, singleProduct, listProduct } from '../controllers/productController.js';
import upload from '../middlewares/multer.js';
import adminAuth from '../middlewares/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/add', adminAuth, upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
    { name: 'image5', maxCount: 1 },
    { name: 'image6', maxCount: 1 },
    { name: 'image7', maxCount: 1 },
    { name: 'image8', maxCount: 1 },
    { name: 'image9', maxCount: 1 },
    { name: 'image10', maxCount: 1 },
    { name: 'image11', maxCount: 1 },
    { name: 'image12', maxCount: 1 },
    { name: 'image13', maxCount: 1 },
    { name: 'image14', maxCount: 1 },
    { name: 'image15', maxCount: 1 },

]), addProduct)
productRouter.post('/remove', adminAuth, removeProduct)
productRouter.post('/single', singleProduct)
productRouter.get('/list', listProduct)

export default productRouter;

