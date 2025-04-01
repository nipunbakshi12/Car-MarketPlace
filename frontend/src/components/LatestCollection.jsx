import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate a delay for demonstration purposes
        const timer = setTimeout(() => {
            setLatestProducts(products.slice(0, 10))
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [products])

    console.log(products)

    return (
        <div className="my-10 rounded-lg">
            <div className="text-center text-3xl py-8">
                <Title
                    text1={'LATEST '}
                    text2={'COLLECTIONS'}
                    className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
                />
                <p className="w-3/4 mx-auto mt-4 text-sm sm:text-base md:text-lg text-gray-300">
                    Explore our latest and greatest cars to find the perfect match for your dreams.
                </p>
            </div>

            {/* RENDERING PRODUCTS */}
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                    {isLoading ? (
                        // Render skeleton cards while loading
                        Array.from({ length: 10 }).map((_, index) => (
                            <div key={index} className="animate-pulse">
                                <div className="bg-gray-700 rounded-lg h-48 sm:h-64 md:h-72 lg:h-80"></div>
                                <div className="mt-2 space-y-2">
                                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Render actual products once loaded
                        latestProducts.map((item, index) => (
                            <ProductItem
                                key={item._id}
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default LatestCollection