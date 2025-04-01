import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

const deliveryImages = [
    assets.delivery1,
    assets.delivery2,
    assets.delivery3,
    assets.delivery4,
    assets.delivery5,
    assets.delivery6,
    assets.delivery7,
    assets.delivery8,
    assets.delivery9,
    assets.delivery10,
];

const Reviews = () => {
    const [carName, setCarName] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/api/car-suggestion", {
                carName,
                description,
            });

            if (response.status === 200) {
                setMessage("✅ Thank you! Your car suggestion has been received.");
                setCarName("");
                setDescription("");
            } else {
                setMessage("❌ Failed to submit. Please try again.");
            }
        } catch (error) {
            setMessage("⚠️ An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            className="container mx-auto py-16 px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl font-bold text-center mb-12 text-black">
                Our Delivery Service
            </h2>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="w-full max-w-6xl mx-auto"
            >
                {deliveryImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={image}
                                alt={`Delivery ${index + 1}`}
                                className="w-full h-72 object-cover rounded-2xl"
                            />
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Car Suggestion Form */}
            <div className="mt-12 p-8 bg-white shadow-xl rounded-2xl max-w-xl mx-auto">
                <h3 className="text-3xl font-semibold text-center mb-6 text-gray-900">
                    Suggest Your Favorite Car 🚗
                </h3>
                <form onSubmit={onSubmitHandler} className="space-y-6">
                    <input
                        type="text"
                        placeholder="Enter Car Name"
                        className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:ring-4 focus:ring-blue-400 transition"
                        required
                        value={carName}
                        onChange={(e) => setCarName(e.target.value)}
                    />
                    <textarea
                        placeholder="Why do you like this car?"
                        className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:ring-4 focus:ring-blue-400 transition"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition flex justify-center items-center gap-2"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <svg
                                    className="animate-spin h-5 w-5 mr-2 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8H4z"
                                    ></path>
                                </svg>
                                Submitting...
                            </>
                        ) : (
                            "Submit Suggestion"
                        )}
                    </button>
                </form>
                {message && <p className="text-center mt-4 text-lg font-medium text-green-600">{message}</p>}
            </div>
        </motion.div>
    );
};

export default Reviews;
