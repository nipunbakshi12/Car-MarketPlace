import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { assets } from '../assets/assets';

const Hero = () => {
    const navigate = useNavigate(); // React Router navigation

    const slides = [
        {
            title: "Our Dedicated Team",
            description: "Meet the experts behind our success!",
            gradient: "from-gray-900 to-black",
            image: assets.crew,
            fullImage: true,
        },
        {
            title: "Get a New Car",
            description: "Skip the selection of waiting lists and long delays.",
            buttonText: "Explore New Cars",
            gradient: "from-purple-600 to-pink-500",
            image: assets.p_img2_1,
        },
        {
            title: "Get a Pre-Owned Car",
            description: "Thoroughly inspected and ready for your next step.",
            buttonText: "Browse Pre-Owned",
            gradient: "from-blue-500 to-green-500",
            image: assets.p_img2_2 || assets.heroImg,
        },
        {
            title: "Get Your Dream Car",
            description: "Exclusive options with flexibility and direct ownership.",
            buttonText: "Find Dream Car",
            gradient: "from-red-500 to-orange-500",
            image: assets.p_img2_3 || assets.heroImg,
        }
    ];

    return (
        <div className="relative w-full max-w-7xl mx-auto">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                className="car-carousel"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {slide.fullImage ? (
                            <div className="w-full h-screen flex justify-center items-center bg-black">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                                />
                            </div>
                        ) : (
                            <div className={`flex flex-col md:flex-row items-center p-8 bg-gradient-to-r ${slide.gradient} min-h-[500px] md:min-h-[600px] lg:min-h-[700px] rounded-xl shadow-xl`}>
                                <div className="w-full md:w-1/2 text-white px-10 text-center md:text-left space-y-6">
                                    <h2 className="text-4xl md:text-5xl font-extrabold">{slide.title}</h2>
                                    <p className="text-lg md:text-xl opacity-90">{slide.description}</p>
                                    {slide.buttonText && (
                                        <button
                                            onClick={() => navigate('/collection')}
                                            className="px-6 py-3 bg-white text-black rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
                                        >
                                            {slide.buttonText}
                                        </button>
                                    )}
                                </div>
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg shadow-lg object-cover transition-all duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
