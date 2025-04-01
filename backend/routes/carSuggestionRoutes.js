import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

console.log("Car Suggestion route file is loaded ✅");

router.post("/car-suggestion", async (req, res) => {
    console.log("Car Suggestion POST request received ✅", req.body);  // Debugging
    const { carName, description } = req.body;

    // Get the current date and time
    const submissionTime = new Date().toLocaleString();

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
        to: process.env.EMAIL_USER, // Send to admin/company email
        subject: `New Car Suggestion: ${carName}`,
        html: `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        color: #333;
                        background-color: #f4f4f4;
                        padding: 20px;
                    }
                    .container {
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    }
                    .heading {
                        font-size: 24px;
                        font-weight: bold;
                        color: #4CAF50;
                    }
                    .content {
                        margin-top: 15px;
                    }
                    .label {
                        font-weight: bold;
                        color: #333;
                    }
                    .value {
                        margin-left: 10px;
                    }
                    .footer {
                        margin-top: 20px;
                        font-size: 12px;
                        color: #777;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="heading">New Car Suggestion Submission</div>
                    <div class="content">
                        <p><span class="label">Car Name:</span><span class="value">${carName}</span></p>
                        <p><span class="label">Description:</span><span class="value">${description}</span></p>
                        <p><span class="label">Submission Time:</span><span class="value">${submissionTime}</span></p>
                    </div>
                    <div class="footer">
                        <p>Thank you for your contribution!</p>
                    </div>
                </div>
            </body>
            </html>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Car suggestion sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send car suggestion." });
    }
});

export default router;
