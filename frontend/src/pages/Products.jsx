import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import RelatedProducts from "../components/RelatedProducts";

const Products = () => {
    const { productId } = useParams();
    const { products, currency } = useContext(ShopContext);
    const [productsData, setProductsData] = useState(null);
    const [image, setImage] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: "", contact: "" });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false); // Loader state

    useEffect(() => {
        const fetchProductData = () => {
            const product = products.find(item => item._id === productId);
            if (product) {
                setProductsData(product);
                setImage(product.image[0]);
            }
        };
        fetchProductData();
    }, [productId, products]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/api/enquiry", {
                name: formData.name,
                contact: formData.contact,
                productName: productsData.name,
            });
            setMessage(response.data.message);
            setTimeout(() => {
                setShowForm(false);
                setMessage("");
            }, 3000);
        } catch (error) {
            setMessage("Failed to send enquiry. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return productsData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="w-full sm:w-[90%]">
                        <img src={image} alt="" className="w-full h-auto" />
                        <hr className="mt-8 p-2 sm:w-full" />
                        <div className="flex sm:flex-row overflow-x-auto sm:overflow-y-scroll justify-start sm:justify-start sm:w-full w-full">
                            {productsData.image.map((item, index) => (
                                <img
                                    onClick={() => setImage(item)}
                                    src={item}
                                    key={index}
                                    className="w-[24%] sm:w-[100px] sm:mb-3 flex-shrink-0 cursor-pointer mr-2"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2">{productsData.name}</h1>
                    <p className="mt-5 text-3xl font-medium">{currency}{productsData.price}</p>
                    <p className="mt-5 text-gray-500 md:w-4/5">{productsData.description}</p>

                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-[30px]"
                    >
                        ENQUIRY NOW
                    </button>

                    {showForm && (
                        <div className="mt-5 p-4 border rounded-lg bg-gray-100 shadow-md">
                            <h2 className="text-lg font-semibold mb-2">Enquiry Form</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="p-2 border rounded"
                                />
                                <input
                                    type="tel"
                                    name="contact"
                                    placeholder="Your Contact Number"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required
                                    className="p-2 border rounded"
                                />
                                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded flex items-center justify-center">
                                    {loading ? (
                                        <svg className="animate-spin h-5 w-5 mr-2 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                                    ) : "Submit Enquiry"}
                                </button>
                            </form>
                            {message && <p className="mt-2 text-green-600">{message}</p>}
                        </div>
                    )}

                    <hr className="mt-8 sm:w-4/5" />
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>Easy Return and Exchange policy in 7 days</p>
                    </div>
                </div>
            </div>
            <RelatedProducts
                category={productsData.category}
                transmission={productsData.transmission}
                ownership={productsData.ownership}
                carModel={productsData.carModel}
                kmsDriven={productsData.kmsDriven}
                fuel={productsData.fuel}

            />
        </div>
    ) : (
        <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
        </div>
    );
};

export default Products;































































// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets'
// import axios from "axios";
// import RelatedProducts from '../components/RelatedProducts'

// const Products = () => {
//     const { productId } = useParams()
//     // console.log(productId)
//     const { products, currency } = useContext(ShopContext)
//     const [productsData, setProductsData] = useState(false)
//     const [image, setImage] = useState('')

//     const [showForm, setShowForm] = useState(false); // State for form visibility
//     const [formData, setFormData] = useState({ name: "", contact: "" }); // State for form inputs
//     const [message, setMessage] = useState(""); // Message for response

//     const fetchProductData = async () => {
//         products.map((item) => {
//             if (item._id === productId) {
//                 setProductsData(item)
//                 setImage(item.image[0])
//                 // console.log(item)
//                 return null
//             }
//         })
//     }
//     useEffect(() => {
//         fetchProductData()
//     }, [productId, products])

//     return productsData ? (
//         <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//             {/* PRODUCTS DATA */}
//             <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//                 {/* PRODUCT IMAGES */}
//                 <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//                     <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>

//                         {productsData.image.map((item, index) => (
//                             <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
//                         ))}

//                     </div>

//                     <div className='w-full sm:w-[80%]'>
//                         <img src={image} alt='' className='w-full h-auto' />
//                     </div>

//                 </div>
//                 {/* PRODUCT INFO */}
//                 <div className='flex-1'>
//                     <h1 className='font-medium text-2xl mt-2'>{productsData.name}</h1>
//                     {/* <div className='flex items-center gap-1 mt-2'>
//                         <img src={assets.star_icon} alt='' className='w-3.5' />
//                         <img src={assets.star_icon} alt='' className='w-3.5' />
//                         <img src={assets.star_icon} alt='' className='w-3.5' />
//                         <img src={assets.star_icon} alt='' className='w-3.5' />
//                         <img src={assets.star_icon} alt='' className='w-3.5' />
//                     </div> */}
//                     <p className='mt-5 text-3xl font-medium'>{currency}{productsData.price}</p>
//                     <p className='mt-5 text-gray-500 md:w-4/5'>{productsData.description}</p>

//                     <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 mt-[30px]'>ENQUIRY NOW</button>
//                     <hr className='mt-8 sm:w-4/5' />
//                     <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//                         <p>Easy Return and Exhange policy in 7 days</p>
//                     </div>
//                 </div>
//             </div>
//             <RelatedProducts category={productsData.category} subcategory={productsData.subcategory} />

//         </div>
//     ) :
//         <div className='opacity-0'>

//         </div>
// }

// export default Products