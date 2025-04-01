import React from "react";
import { motion } from "framer-motion";
import Title from "../components/Title";
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center px-6 py-12 bg-gray-50"
        >
            {/* Title Section */}
            <motion.div variants={fadeIn} className="text-center mb-10">
                <Title
                    text1={"CONTACT"}
                    text2={" US"}
                    className="text-4xl font-bold text-gray-800"
                />
                <p className="text-gray-600 mt-3 max-w-lg mx-auto">
                    Have questions or need assistance? We’re here to help! Reach out via
                    phone, email, or visit our showroom.
                </p>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
                variants={fadeIn}
                className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Side */}
                    <motion.div variants={fadeIn} className="space-y-6">
                        <ContactInfo icon="📧" label="Email">
                            <ContactLink href="mailto:sales@bhagwaticars.com">sales@bhagwaticars.com</ContactLink>
                        </ContactInfo>

                        <ContactInfo icon="📞" label="Phone">
                            <PhoneLink number="9999226647" />
                            <PhoneLink number="9999806611" />
                            <PhoneLink number="9999706644" />
                            <PhoneLink number="9810020567" />
                        </ContactInfo>

                        <ContactInfo icon="🌐" label="Website">
                            <ContactLink href="http://www.bhagwaticars.com">www.bhagwaticars.com</ContactLink>
                        </ContactInfo>

                        <ContactInfo icon={<FaYoutube className="text-red-600 text-xl" />} label="YouTube">
                            <ContactLink href="https://youtube.com/@bhagwatimotorsregd">youtube.com/@bhagwatimotorsregd</ContactLink>
                        </ContactInfo>

                        <ContactInfo icon="📍" label="Address">
                            <ContactLink href="https://maps.app.goo.gl/Dp5VCVKxRu2CJDQd8">1017, Main Arya Samaj Road, Karol Bagh, New Delhi - 110005</ContactLink>
                        </ContactInfo>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div variants={fadeIn} className="space-y-6">
                        <ContactInfo icon={<FaWhatsapp className="text-green-600 text-xl" />} label="WhatsApp">
                            <PhoneLink number="9999226647" />
                            <PhoneLink number="9999806611" />
                        </ContactInfo>

                        <ContactInfo icon="📅" label="Business Hours">
                            <p className="text-gray-700">
                                <span className="font-semibold">Monday to Saturday:</span> 10:00 AM - 8:00 PM
                                <br />
                                <span className="font-semibold">Sunday:</span> Closed
                            </p>
                        </ContactInfo>

                        <ContactInfo icon={<FaFacebook className="text-blue-600 text-xl" />} label="Facebook">
                            <ContactLink href="https://www.facebook.com/bhagwaticars">facebook.com/bhagwaticars</ContactLink>
                        </ContactInfo>

                        <ContactInfo icon={<FaInstagram className="text-pink-600 text-xl" />} label="Instagram">
                            <ContactLink href="https://www.instagram.com/bhagwaticars">instagram.com/bhagwaticars</ContactLink>
                        </ContactInfo>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Contact Info Component
const ContactInfo = ({ icon, label, children }) => (
    <motion.div variants={fadeIn} className="flex flex-col">
        <p className="text-[#c24be2] font-semibold flex items-center">
            <span className="mr-2">{icon}</span> {label}:
        </p>
        <div className="ml-6">{children}</div>
    </motion.div>
);

// Phone Link Component
const PhoneLink = ({ number }) => (
    <ContactLink href={`https://wa.me/${number}`}>+91 {number}</ContactLink>
);

// Contact Link Component
const ContactLink = ({ href, children }) => (
    <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition duration-200 underline"
    >
        {children}
    </motion.a>
);

export default Contact;
