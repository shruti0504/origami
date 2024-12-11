const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000; // Backend server port

// Middleware
app.use(cors({ origin: "http://localhost:3000" })); // Allow requests from React frontend
app.use(bodyParser.json());

// Serve static JS files from "src/components"
app.use("/components", express.static(path.join(__dirname, "src", "components")));

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
            res.status(400).json({ error: "Email already exists" });
        } else {
            res.status(500).json({ error: "yeah done !!" });
        }
    }
});

// Default Route
app.get("/", (req, res) => {
    const componentsDir = path.join(__dirname, "src", "components");
    fs.readdir(componentsDir, (err, files) => {
        if (err) {
            console.error("Error reading components directory:", err);
            res.status(500).send("Error reading components directory");
            return;
        }

        // Filter for JavaScript files
        const jsFiles = files.filter(file => file.endsWith(".js"));
        res.send(`<h1>JavaScript Files in Components:</h1><ul>${jsFiles.map(file => `<li>${file}</li>`).join("")}</ul>`);
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
