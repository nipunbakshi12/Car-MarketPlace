import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
            <div className="text-center text-2xl pt-10 border-t border-gray-300 mb-10">
                <Title text1={'CONTACT'} text2={' US'} className="text-3xl md:text-4xl font-bold text-gray-800" />
            </div>

            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                    <p className="text-gray-600 text-center mb-6">
                        Have questions or need assistance? We’re here to help! Reach out to us via phone, email, or visit our showroom.
                    </p>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <ContactInfo icon="📧" label="Email">
                                <a href="mailto:sales@bhagwaticars.com" className="text-blue-600 hover:underline">sales@bhagwaticars.com</a>
                            </ContactInfo>
                            <ContactInfo icon="📞" label="Phone">
                                <div className="flex flex-col items-start space-y-2">
                                    <PhoneLink number="+91 9999226647, +91 9999806611" />
                                    <PhoneLink number="+91 9999706644, +91 9810020567" />
                                </div>
                            </ContactInfo>
                            <ContactInfo icon="🌐" label="Website">
                                <a href="http://www.bhagwaticars.com" className="text-blue-600 hover:underline">www.bhagwaticars.com</a>
                            </ContactInfo>
                        </div>
                        <div className="space-y-4">
                            <ContactInfo icon={<FaWhatsapp className="text-green-600 text-xl" />} label="WhatsApp">
                                <a href="https://wa.me/7777999963" className="text-blue-600 hover:underline">+91 7777999963</a>
                            </ContactInfo>
                            <ContactInfo icon="📅" label="Business Hours">
                                Monday to Saturday: 10:00 AM - 8:00 PM<br />
                                Sunday: Closed
                            </ContactInfo>
                            <ContactInfo icon={<FaFacebook className="text-blue-600 text-xl" />} label="Follow Us on Facebook">
                                <a href="https://www.facebook.com/bhagwaticars" className="text-blue-600 hover:underline">facebook.com/bhagwaticars</a>
                            </ContactInfo>
                        </div>
                    </div>

                    <div className="mt-8 text-lg flex justify-center">
                        <ContactInfo icon="📍" label="Address">
                            <a href="https://maps.app.goo.gl/Dp5VCVKxRu2CJDQd8" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                1017, Main Arya Samaj Road,<br />
                                Karol Bagh, New Delhi - 110005
                            </a>
                        </ContactInfo>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper component for consistent contact information styling
const ContactInfo = ({ icon, label, children }) => (
    <div className="flex flex-col items-start">
        <p className="text-gray-600 mb-1 flex items-center">
            <span className="mr-2">{icon}</span> <span className="font-semibold">{label}:</span>
        </p>
        <div className="ml-6">{children}</div>
    </div>
);

// Helper component for phone number links
const PhoneLink = ({ number }) => (
    <a href="https://wa.me/7777999963" className="text-blue-600 hover:underline">
        {number}
    </a>
);

export default Contact;