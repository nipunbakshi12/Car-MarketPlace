import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

console.log("Enquiry route file is loaded ✅");
router.post("/enquiry", async (req, res) => {
    console.log("Enquiry POST request received ✅", req.body);  // Debugging
    const { name, contact, productName } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,  // Fetch from .env
            pass: process.env.EMAIL_PASS,  // Fetch from .env
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Send to company email
        subject: `New Enquiry for ${productName}`,
        text: `User Name: ${name}\nContact: ${contact}\nInterested in: ${productName}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Enquiry sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send enquiry." });
    }
});

export default router;