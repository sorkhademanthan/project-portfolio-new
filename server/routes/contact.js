import express from "express";
import { body, validationResult } from "express-validator";
import Message from "../models/message.js";
import { sendEmail } from "../utils/sendEmail.js"; // 👈 import this

const router = express.Router();

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message").notEmpty().withMessage("Message cannot be empty"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newMessage = new Message(req.body);
      await newMessage.save();

      await sendEmail(req.body); // ✅ send email

      res.status(200).json({ message: "Message sent and saved successfully" });
    } catch (err) {
      console.error("❌ Email Error:", err.message);
      res.status(500).json({ error: "Server error" });
    }
  }
);

export default router;
