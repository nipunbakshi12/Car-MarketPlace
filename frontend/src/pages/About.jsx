import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
    return (
        <div className="p-6 md:p-12">
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1={'ABOUT'} text2={' US'} />
            </div>
            <div className="my-10">
                <div className="text-center text-xl text-gray-800 leading-relaxed">
                    <p>
                        Buying a car is not just a transaction, it’s an emotional journey filled with joy and excitement.
                        At <b>Bhagwati Motors (Regd)</b>, we understand this and are committed to making your car-buying experience hassle-free and delightful.
                        Established in 1990, we are one of Delhi's most trusted and largest used car dealerships, offering a wide range of vehicles from regular to luxury and premium classes—all at competitive prices.
                    </p>
                    <br />
                    <p>
                        As an authorized dealer of several prestigious brands, we provide high-quality new and certified pre-owned cars, carefully inspected to ensure the highest standards of safety and performance.
                        Our commitment to quality and customer satisfaction sets us apart, making us the preferred choice for discerning car buyers in Delhi.
                    </p>
                    <br />
                    <b className="text-2xl">Our Mission</b>
                    <p>
                        Our mission is to offer top-notch vehicles that fit your budget without compromising on quality.
                        Each car undergoes a rigorous inspection process, covering over 100 quality checkpoints to guarantee comfort and safety.
                        Additionally, we extend warranty coverage on all sales to give you complete peace of mind.
                    </p>
                    <br />
                    <p>
                        We don’t just sell cars—we build lasting relationships with our customers. Our multi-brand car accessories and servicing facilities are managed by an expert team of certified mechanics who are dedicated to keeping your vehicle in prime condition.
                        Whether it’s routine maintenance or specialized care, you can trust us to deliver excellence.
                    </p>
                    <br />
                    <b className="text-2xl">Why Choose Us?</b>
                    <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
                        <div className="border px-8 py-6 bg-white shadow-lg rounded-lg">
                            <b>🛠️ Quality Assurance</b>
                            <p className="text-gray-600 mt-2">
                                Our vehicles undergo stringent quality checks to ensure reliability and safety, giving you complete peace of mind.
                            </p>
                        </div>
                        <div className="border px-8 py-6 bg-white shadow-lg rounded-lg">
                            <b>💼 Hassle-Free Financing</b>
                            <p className="text-gray-600 mt-2">
                                We offer flexible financing options with low interest rates, making car ownership affordable and easy.
                            </p>
                        </div>
                        <div className="border px-8 py-6 bg-white shadow-lg rounded-lg">
                            <b>🚗 Wide Range of Vehicles</b>
                            <p className="text-gray-600 mt-2">
                                From budget-friendly to premium luxury cars, find your dream vehicle from our vast inventory.
                            </p>
                        </div>
                        <div className="border px-8 py-6 bg-white shadow-lg rounded-lg">
                            <b>🤝 Customer Satisfaction</b>
                            <p className="text-gray-600 mt-2">
                                We prioritize your happiness by delivering transparent, ethical, and friendly service every step of the way.
                            </p>
                        </div>
                    </div>
                    <br />
                    <p>
                        At <b>Bhagwati Motors</b>, we understand the responsibility of dealing not just with cars but with your dreams.
                        Our commitment to transparency, integrity, and exceptional customer service has earned us a reputation as one of the most customer-friendly car dealers in the region.
                    </p>
                    <br />
                    <b>Find your dream car today at Bhagwati Motors!</b>
                </div>
            </div>
        </div>
    );
};

export default About;
