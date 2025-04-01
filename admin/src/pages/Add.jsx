import React, { useState } from 'react'
import { assets } from '../assets/assets.js'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {
    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)
    const [image5, setImage5] = useState(false)
    const [image6, setImage6] = useState(false)
    const [image7, setImage7] = useState(false)
    const [image8, setImage8] = useState(false)
    const [image9, setImage9] = useState(false)
    const [image10, setImage10] = useState(false)
    const [image11, setImage11] = useState(false)
    const [image12, setImage12] = useState(false)
    const [image13, setImage13] = useState(false)
    const [image14, setImage14] = useState(false)
    const [image15, setImage15] = useState(false)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [transmission, setTransmission] = useState("")
    const [ownership, setOwnership] = useState("")
    const [carModel, setCarModel] = useState("")
    const [kmsDriven, setKmsDriven] = useState("")
    const [fuel, setFuel] = useState("")

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('description', description)
            formData.append('price', price)
            formData.append('category', category)
            formData.append('transmission', transmission)
            formData.append('fuel', fuel)
            formData.append('ownership', ownership)
            formData.append('kmsDriven', kmsDriven)
            formData.append('carModel', carModel)

            image1 && formData.append('image1', image1)
            image2 && formData.append('image2', image2)
            image3 && formData.append('image3', image3)
            image4 && formData.append('image4', image4)
            image5 && formData.append('image5', image5)
            image6 && formData.append('image6', image6)
            image7 && formData.append('image7', image7)
            image8 && formData.append('image8', image8)
            image9 && formData.append('image9', image9)
            image10 && formData.append('image10', image10)
            image11 && formData.append('image11', image11)
            image12 && formData.append('image12', image12)
            image13 && formData.append('image13', image13)
            image14 && formData.append('image14', image14)
            image15 && formData.append('image15', image15)

            const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } })
            console.log(response.data)

            if (response.data.success) {
                toast.success(response.data.message)
                // Reset all states
                setName("")
                setDescription("")
                setPrice("")
                setCategory("")
                setTransmission("")
                setOwnership("")
                setCarModel("")
                setKmsDriven("")
                setFuel("")
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setImage5(false)
                setImage6(false)
                setImage7(false)
                setImage8(false)
                setImage9(false)
                setImage10(false)
                setImage11(false)
                setImage12(false)
                setImage13(false)
                setImage14(false)
                setImage15(false)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.error(error)
            toast.error("Something went wrong. Please try again.")
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <form onSubmit={onSubmitHandler} className='bg-white shadow-md rounded-lg p-6 space-y-6'>
                {/* Image Upload Section */}
                <div className='mb-6'>
                    <h2 className='text-xl font-semibold mb-4'>Upload Images</h2>
                    <div className='flex space-x-4 overflow-x-auto pb-4'>
                        {[
                            { state: image1, setState: setImage1 },
                            { state: image2, setState: setImage2 },
                            { state: image3, setState: setImage3 },
                            { state: image4, setState: setImage4 },
                            { state: image5, setState: setImage5 },
                            { state: image6, setState: setImage6 },
                            { state: image7, setState: setImage7 },
                            { state: image8, setState: setImage8 },
                            { state: image9, setState: setImage9 },
                            { state: image10, setState: setImage10 },
                            { state: image11, setState: setImage11 },
                            { state: image12, setState: setImage12 },
                            { state: image13, setState: setImage13 },
                            { state: image14, setState: setImage14 },
                            { state: image15, setState: setImage15 },
                        ].map((imageData, index) => (
                            <label
                                key={index}
                                htmlFor={`image${index + 1}`}
                                className='flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity'
                            >
                                <img
                                    className='w-24 h-24 object-cover border rounded-md'
                                    src={!imageData.state ? assets.upload_area : URL.createObjectURL(imageData.state)}
                                    alt={`Upload ${index + 1}`}
                                />
                                <input
                                    onChange={(e) => imageData.setState(e.target.files[0])}
                                    type="file"
                                    id={`image${index + 1}`}
                                    hidden
                                />
                            </label>
                        ))}
                    </div>
                </div>

                {/* Product Details Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* Product Name */}
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Car Name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type='text'
                            placeholder='Enter product name'
                            required
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Product Description */}
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Description</label>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            placeholder='Write product description'
                            required
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24'
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Category</label>
                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value=''>Select Category</option>
                            <option value='Hatchback'>Hatchback</option>
                            <option value='Sedan'>Sedan</option>
                            <option value='SUV'>SUV</option>
                            <option value='Minivan'>Minivan</option>
                            <option value='Convertible'>Convertible</option>
                        </select>
                    </div>

                    {/* Transmission */}
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Transmission</label>
                        <select
                            onChange={(e) => setTransmission(e.target.value)}
                            value={transmission}
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value=''>Select Transmission</option>
                            <option value='Manual'>Manual</option>
                            <option value='AMT'>AMT</option>
                            <option value='IMT'>IMT</option>
                            <option value='CVT'>CVT</option>
                            <option value='DCT'>DCT</option>
                        </select>
                    </div>

                    {/* Fuel Type */}
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Fuel Type</label>
                        <select
                            onChange={(e) => setFuel(e.target.value)}
                            value={fuel}
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value=''>Select Fuel Type</option>
                            <option value='Petrol'>Petrol</option>
                            <option value='Diesel'>Diesel</option>
                            <option value='CNG'>CNG</option>
                            <option value='EV'>EV</option>
                        </select>
                    </div>

                    {/* Ownership */}
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Ownership Type</label>
                        <select
                            onChange={(e) => setOwnership(e.target.value)}
                            value={ownership}
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value=''>Select Ownership Type</option>
                            <option value='First-Owner'>First-Owner</option>
                            <option value='Second-Owner'>Second-Owner</option>
                            <option value='Third-Owner'>Third-Owner</option>
                        </select>
                    </div>

                    {/* Car Model */}
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Car Model</label>
                        <select
                            onChange={(e) => setCarModel(e.target.value)}
                            value={carModel}
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value=''>Select Car Model</option>
                            {Array.from({ length: 16 }, (_, i) => 2010 + i).map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>

                    {/* KMS Driven */}
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>KMS Driven</label>
                        <select
                            onChange={(e) => setKmsDriven(e.target.value)}
                            value={kmsDriven}
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                            <option value=''>Select Kms Range</option>
                            <option value='0-9999'>0-9999</option>
                            <option value='9999-19999'>9999-19999</option>
                            <option value='20000-29999'>20000-29999</option>
                            <option value='30000-39999'>30000-39999</option>
                            <option value='20000-29999'>40000-49999</option>
                            <option value='20000-29999'>50000-59999</option>
                            <option value='20000-29999'>60000-69999</option>
                            <option value='20000-29999'>70000-79999</option>
                            <option value='20000-29999'>80000-89999</option>
                            <option value='20000-29999'>90000-99999</option>
                            <option value='100000+'>100000+</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Price</label>
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            type='text'
                            placeholder='Enter Price'
                            required
                            className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className='mt-6'>
                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors'
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Add