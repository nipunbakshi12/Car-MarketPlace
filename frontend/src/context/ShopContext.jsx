import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";


export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const currency = '₹';
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [products, setProducts] = useState([])

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setProducts(response.data.products)
            }
            else {
                console.error('Failed to fetch products:', error)
            }
            // console.log(response.data)
        } catch (error) {
            console.error('Failed to fetch products:', error)
        }
    }

    useEffect(() => {
        getProductsData()
    }, [])

    const value = {
        products, currency, search, setSearch,
        showSearch, setShowSearch, backendUrl
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;