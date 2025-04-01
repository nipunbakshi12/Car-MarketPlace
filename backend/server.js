import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import carSuggestionRoutes from "./routes/carSuggestionRoutes.js";
import connectCloudinary from "./config/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";


dotenv.config();

const app = express();
connectDB()
connectCloudinary()

// Middleware
app.use(express.json());
app.use(cors());

// Import and use enquiry route
console.log("Enquiry routes loaded ✅");  // Add this line
app.use("/api", enquiryRoutes);

app.use("/api", carSuggestionRoutes)

app.use('/api/product', productRouter)
app.use('/api/user', userRouter)


// Default Route
app.get("/", (req, res) => {
    res.send("Car Marketplace Backend is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
