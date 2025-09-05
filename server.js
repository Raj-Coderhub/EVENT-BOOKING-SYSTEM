const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const eventRoutes = require("./routes/eventRoutes");

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/events", eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
