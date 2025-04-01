import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
    return (
        <div className="p-6 md:p-12">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl text-center pt-8 border-t"
            >
                <Title text1={'ABOUT US - Bhagwati Motors (Regd.)'} />
            </motion.div>

            <div className="my-10 text-center text-xl leading-relaxed">
                <motion.b className="text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Our Legacy</motion.b>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    Founded in 1990 by Mr. Anil Gupta, Bhagwati Motors (Regd.) has grown into one of the most trusted names in the automobile industry in Delhi. Located in Karol Bagh, we started with a simple yet powerful vision—to make quality cars accessible to everyone. Over the past three decades, we have helped thousands of customers find their perfect vehicle, making car ownership a seamless and reliable experience.
                </motion.p>
                <br />

                <motion.b className="text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>Our Growth Story</motion.b>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                    What began as a small dealership has evolved into a renowned car trading hub, known for its integrity, transparency, and customer-first approach. Through dedication and hard work, we have expanded our inventory, offering a diverse range of certified pre-owned cars, from budget-friendly options to premium luxury vehicles. Our strong network, customer referrals, and commitment to service have fueled our growth, establishing Bhagwati Motors as a household name in Delhi's automobile market.
                </motion.p>
                <br />

                <motion.b className="text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>Our Vision</motion.b>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                    We aim to be the most trusted and customer-centric pre-owned car dealership in India, providing quality cars with honest pricing and a seamless buying experience. Our focus is to make car ownership easy, accessible, and affordable for everyone.
                </motion.p>
                <br />

                <motion.b className="text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>Our Mission</motion.b>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                    To provide high-quality, certified pre-owned cars with complete transparency.

                    To build lasting relationships with our customers by offering trust-driven services.

                    To simplify the car buying experience with hassle-free financing, RC transfers, and expert guidance.

                    To continuously expand and innovate, ensuring our customers get the best deals and service.

                    At Bhagwati Motors (Regd.), we don’t just sell cars—we build trust, relationships, and lifetime experiences. Visit us today and drive home your dream car with confidence!
                </motion.p>
                <br />
            </div>

            <h1 className="text-2xl text-center">Why Choose Us?</h1>
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
                {[{
                    title: "🛠️ Quality Assurance",
                    text: "Our vehicles undergo stringent quality checks to ensure reliability and safety."
                }, {
                    title: "💼 Hassle-Free Financing",
                    text: "We offer flexible financing options with low interest rates."
                }, {
                    title: "🚗 Wide Range of Vehicles",
                    text: "Find your dream vehicle from our vast inventory."
                }, {
                    title: "🤝 Customer Satisfaction",
                    text: "We prioritize your happiness with transparent service."
                }].map((item, index) => (
                    <motion.div
                        key={index}
                        className="border px-8 py-6 shadow-lg rounded-lg w-full md:w-1/4"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <b>{item.title}</b>
                        <p className="mt-2">{item.text}</p>
                    </motion.div>
                ))}
            </div>

            {/* Awards Section */}
            <div className="mt-12">
                <h2 className="text-center text-3xl font-bold mb-6">🏆 Our Awards</h2>
                <Swiper slidesPerView={1} spaceBetween={30} pagination={{ clickable: true }} modules={[Pagination]} className="w-full max-w-3xl mx-auto">
                    {[assets.awards1, assets.awards2].map((award, index) => (
                        <SwiperSlide key={index}>
                            <img src={award} alt={`Award ${index + 1}`} className="rounded-lg shadow-lg w-full" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Team Section */}
            <div className="mt-12">
                <h2 className="text-center text-3xl font-bold mb-6">👨‍💼 Meet Our Team</h2>
                <Swiper slidesPerView={3} spaceBetween={20} pagination={{ clickable: true }} modules={[Pagination]} className="w-full max-w-5xl mx-auto">
                    {[assets.team1, assets.team2, assets.team3, assets.team4, assets.team5, assets.team6, assets.team7, assets.team8, assets.team9, assets.team10, assets.team11, assets.team12].map((team, index) => (
                        <SwiperSlide key={index}>
                            <img src={team} alt={`Team Member ${index + 1}`} className="rounded-lg shadow-lg w-full" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default About;