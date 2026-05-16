import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ─── MongoDB Connection ───────────────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// ─── Schema ──────────────────────────────────────────────────────────────────
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    service: String,
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

// ─── Routes ──────────────────────────────────────────────────────────────────

// POST /api/contact — save a new submission
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }
    const entry = await Contact.create({ name, email, phone, service, message });
    res.status(201).json({ success: true, id: entry._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error. Try again later." });
  }
});

// GET /api/admin/contacts — fetch all submissions (password protected)
app.get("/api/admin/contacts", async (req, res) => {
  const { password } = req.headers;
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// DELETE /api/admin/contacts/:id — delete one submission
app.delete("/api/admin/contacts/:id", async (req, res) => {
  const { password } = req.headers;
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ─── Start ────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
