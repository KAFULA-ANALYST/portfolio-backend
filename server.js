const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Portfolio Backend API Running 🚀");
});

// Profile API (used by frontend)
app.get("/api/profile", (req, res) => {
    res.json({
        name: "KWANGU M. KAFULA",
        title: "Data Scientist | Cloud Computing Student | Data Analyst",
        email: "mussalazaro57@gmail.com",
        phone: "+255 763247458",
        skills: [
            "Python",
            "JavaScript",
            "Cloud Computing (Vercel & Render)",
            "Networking (Cisco Packet Tracer)",
            "Machine Learning"
        ],
        projects: [
            {
                name: "Crop Disease Detection",
                description: "AI-powered system for detecting cassava and maize diseases offline."
            },
            {
                name: "Office Network Design",
                description: "Network design using Cisco Packet Tracer."
            },
            {
                name: "Portfolio Website",
                description: "Full-stack portfolio deployed using Vercel and Render."
            }
        ],
        social: {
            github: "https://github.com/KAFULA-ANALYST"
        }
    });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});