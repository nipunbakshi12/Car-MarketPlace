import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from './../context/ShopContext';
import { assets } from '../assets/assets';
import Title from './../components/Title';
import ProductItem from './../components/ProductItem';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilters, setShowFilters] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [transmission, setTransmission] = useState([]);
    const [ownership, setOwnership] = useState([]);
    const [carModel, setCarModel] = useState([]);
    const [kmsDriven, setKmsDriven] = useState([]);
    const [fuel, setFuel] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // New state for loading
    const [sortType, setSortType] = useState('relevant');

    // Toggle category selection
    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    const toggleTrans = (e) => {
        const value = e.target.value;
        setTransmission(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    const toggleOwner = (e) => {
        const value = e.target.value;
        setOwnership(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    const toggleCarModel = (e) => {
        const value = e.target.value;
        setCarModel(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    const toggleKmsDriven = (e) => {
        const value = e.target.value;
        setKmsDriven(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    const toggleFuel = (e) => {
        const value = e.target.value;
        setFuel(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    // Apply filters based on search, category, and subCategory
    const applyFilter = () => {
        let productsCopy = [...products];

        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category));
        }

        if (transmission.length > 0) {
            productsCopy = productsCopy.filter(item => transmission.includes(item.transmission));
        }

        if (ownership.length > 0) {
            productsCopy = productsCopy.filter(item => ownership.includes(item.ownership));
        }

        if (carModel.length > 0) {
            productsCopy = productsCopy.filter(item => carModel.includes(item.carModel));
        }

        if (kmsDriven.length > 0) {
            productsCopy = productsCopy.filter(item => kmsDriven.includes(item.kmsDriven));
        }

        if (fuel.length > 0) {
            productsCopy = productsCopy.filter(item => fuel.includes(item.fuel));
        }
        setFilterProducts(productsCopy);
        setIsLoading(false); // Set loading to false after filtering
    };

    // Sort products based on price
    const sortProduct = () => {
        let sortedProducts = [...filterProducts];

        switch (sortType) {
            case 'low-high':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'high-low':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                applyFilter();
                return;
        }

        setFilterProducts(sortedProducts);
    };

    useEffect(() => {
        setFilterProducts(products);
        setIsLoading(true); // Set loading to true when products change
        applyFilter(); // This will set isLoading to false after filtering
    }, [products]);

    useEffect(() => {
        applyFilter();
    }, [category,
        transmission,
        ownership,
        carModel,
        kmsDriven,
        fuel,
        // subCategory,
        search,
        showSearch,
        products]);

    useEffect(() => {
        sortProduct();
    }, [sortType]);

    const renderSkeletonCards = () => {
        return Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="animate-pulse">
                <div className="bg-gray-700 rounded-lg h-48 sm:h-64 md:h-72 lg:h-80"></div>
                <div className="mt-2 space-y-2">
                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                </div>
            </div>
        ));
    };

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* FILTER OPTIONS */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
                    <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`} />
                </p>

                {/* CATEGORY FILTER */}
                <div
                    className={`border border-gray-300 p-5 mt-6 rounded-lg shadow-sm transition-all duration-200 ${showFilters ? 'block' : 'hidden'
                        } sm:block`}
                >
                    <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                    <div className="grid grid-cols-2 gap-4 text-sm font-light">
                        {["Hatchback", "Sedan", "SUV", "Minivan", "Convertible"].map((cat) => (
                            <label key={cat} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    value={cat}
                                    onChange={toggleCategory}
                                />
                                {cat}
                            </label>
                        ))}
                    </div>
                </div>

                <div
                    className={`border border-gray-300 p-5 mt-6 rounded-lg shadow-sm transition-all duration-200 ${showFilters ? 'block' : 'hidden'
                        } sm:block`}
                >
                    <p className="mb-3 text-sm font-medium">Product Model</p>
                    <div className="grid grid-cols-3 gap-4 text-sm font-light">
                        {[
                            "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025",
                        ].map((carModel) => (
                            <label key={carModel} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    value={carModel}
                                    onChange={toggleCarModel}
                                />
                                {carModel}
                            </label>
                        ))}
                    </div>
                </div>

                <div
                    className={`border border-gray-300 p-5 mt-6 rounded-lg shadow-sm transition-all duration-200 ${showFilters ? 'block' : 'hidden'
                        } sm:block`}
                >
                    <p className="mb-3 text-sm font-medium">KMS Range</p>
                    <div className="grid grid-cols-2 gap-4 text-sm font-light">
                        {[
                            "0-9999", "9999-19999", "20000-29999", "30000-39999", "40000-49999",
                            "50000-59999", "60000-69999", "70000-79999", "80000-89999", "90000-99999", "100000+",
                        ].map((kmsDriven) => (
                            <label key={kmsDriven} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    value={kmsDriven}
                                    onChange={toggleKmsDriven}
                                />
                                {kmsDriven}
                            </label>
                        ))}
                    </div>
                </div>

                <div
                    className={`border border-gray-300 p-5 mt-6 rounded-lg shadow-sm transition-all duration-200 ${showFilters ? 'block' : 'hidden'
                        } sm:block`}
                >
                    <p className="mb-3 text-sm font-medium">TRANSMISSION TYPE</p>
                    <div className="grid grid-cols-2 gap-4 text-sm font-light">
                        {["Manual", "AMT", "IMT", "CVT", "DCT"].map((trans) => (
                            <label key={trans} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    value={trans}
                                    onChange={toggleTrans}
                                />
                                {trans}
                            </label>
                        ))}
                    </div>
                </div>

                <div
                    className={`border border-gray-300 p-5 mt-6 rounded-lg shadow-sm transition-all duration-200 ${showFilters ? 'block' : 'hidden'
                        } sm:block`}
                >
                    <p className="mb-3 text-sm font-medium">Fuel TYPE</p>
                    <div className="grid grid-cols-2 gap-4 text-sm font-light">
                        {["Petrol", "Diesel", "CNG", "EV"].map((fuel) => (
                            <label key={fuel} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    value={fuel}
                                    onChange={toggleFuel}
                                />
                                {fuel}
                            </label>
                        ))}
                    </div>
                </div>
                <div
                    className={`border border-gray-300 p-5 mt-6 rounded-lg shadow-sm transition-all duration-200 ${showFilters ? 'block' : 'hidden'
                        } sm:block`}
                >
                    <p className="mb-3 text-sm font-medium">Ownership TYPE</p>
                    <div className="grid grid-cols-2 gap-4 text-sm font-light">
                        {["First-Owner", "Second-Owner", "Third-Owner"].map((owner) => (
                            <label key={owner} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    value={owner}
                                    onChange={toggleOwner}
                                />
                                {owner}
                            </label>
                        ))}
                    </div>
                </div>

                {/* <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Fuel TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {["Petrol", "Diesel", "Petrol + CNG", "EV"].map(fuel => (
                            <p key={fuel} className='flex gap-2'>
                                <input type='checkbox' className='w-3' value={fuel} onChange={toggleFuel} /> {fuel}
                            </p>
                        ))}
                    </div>
                </div> */}


                {/* SUBCATEGORY FILTER */}
                {/* <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {["Petrol", "Diesel", "Petrol + CNG", "EV", "AMT", "Manual", "IMT"].map(sub => (
                            <p key={sub} className='flex gap-2'>
                                <input type='checkbox' className='w-3' value={sub} onChange={toggleSubCategory} /> {sub}
                            </p>
                        ))}
                    </div>
                </div> */}
            </div>

            {/* RIGHT SIDE */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'ALL'} text2={' COLLECTIONS'} />
                    {/* PRODUCT SORT */}
                    <select className='border-2 border-gray-300 text-sm px-2' onChange={(e) => setSortType(e.target.value)}>
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>

                {/* MAP PRODUCTS */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {isLoading ? (
                        renderSkeletonCards()
                    ) : (
                        filterProducts.length > 0 ? (
                            filterProducts.map((item, index) => (
                                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                            ))
                        ) : (
                            <p className="text-center col-span-full">No products found</p>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Collection;
