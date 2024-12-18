const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // Use dynamic port for Render

// Middleware
app.use(cors({ origin: "https://silly-baklava-14ed5d.netlify.app" })); // Allow requests from your Netlify frontend
app.use(bodyParser.json());

// MongoDB Connection
const MONGO_URI = "mongodb+srv://shrutiprasad0504:Shrutip2004@cluster.qrlmo.mongodb.net/shruti?retryWrites=true&w=majority&appName=Cluster";
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

// Mongoose Schema and Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model("origami", userSchema);

// API Endpoint to Handle Form Submission
app.post("/enroll", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "User enrolled successfully" });
    } catch (error) {
        console.error("Error enrolling user:", error);
        if (error.code === 11000) {
            // MongoDB unique constraint error for duplicate email
            res.status(400).json({ error: "Email already exists" });
        } else {
            res.status(500).json({ error: "Failed to enroll user" });
        }
    }
});

// Default Route
app.get("/", (req, res) => {
    res.send("Server is running...");
});
// Handle preflight requests (OPTIONS)
app.options('*', cors());  // Allow pre-flight OPTIONS requests
// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
