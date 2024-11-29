const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
  .connect("mongodb://localhost:27017/kaushik", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Route to handle contact form submission
app.post("/contact", async (req, res) => {
  const { name, phone, email, subject, message } = req.body;

  if (!name || !phone || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newUser = new User({ name, phone, email, subject, message });
    await newUser.save();
    console.log("Contact saved:", newUser);
    res.status(201).json({ message: "Contact form submitted!" });
  } catch (error) {
    console.error("Error in saving contact:", error);
    res.status(500).json({ message: "Error in contact submission." });
  }
});

// Server Start
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
