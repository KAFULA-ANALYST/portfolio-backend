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
            "Machine Learning",
            "Data Science",
            "Data Analysis"
        ],
        projects: [
            {
                name: "Crop Disease Detection",
                description: "AI-powered system for detecting cassava and maize diseases offline using machine learning image classification models.",
                tech: ["Python", "Machine Learning", "AI"],
                link: "https://github.com/KAFULA-ANALYST"
            },
            {
                name: "Office Network Design",
                description: "Professional office network design and simulation using Cisco Packet Tracer, covering routing, switching and IP addressing.",
                tech: ["Networking", "Cisco Packet Tracer"],
                link: "https://github.com/KAFULA-ANALYST"
            },
            {
                name: "Portfolio Website",
                description: "Full-stack personal portfolio with a JavaScript frontend deployed on Vercel and a Node.js/Express backend deployed on Render.",
                tech: ["JavaScript", "Vercel", "Render"],
                link: "https://github.com/KAFULA-ANALYST"
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
