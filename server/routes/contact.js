import express from "express";
import { body, validationResult } from "express-validator";
import Message from "../models/message.js";
import { sendEmail } from "../utils/sendEmail.js"; // 👈 import this

const router = express.Router();

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required").isLength({ min: 2 }).withMessage("Name must be at least 2 characters"),
    body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
    body("message").notEmpty().withMessage("Message cannot be empty").isLength({ min: 5 }).withMessage("Message must be at least 5 characters"),
    body("company").optional().trim(),
    body("subject").optional().trim(),
    body("budget").optional().trim(),
    body("timeline").optional().trim(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("❌ Validation Errors:", errors.array());
      console.log("📝 Received Data:", req.body);
      return res.status(400).json({ 
        error: "Validation failed", 
        details: errors.array(),
        received: req.body
      });
    }

    try {
      console.log("✅ Valid data received:", req.body);
      
      // Save to database
      const newMessage = new Message(req.body);
      await newMessage.save();

      // Send email notification
      await sendEmail(req.body);

      res.status(200).json({ 
        message: "Message sent successfully! I'll get back to you within 24 hours.",
        success: true 
      });
    } catch (err) {
      console.error("❌ Server Error:", err.message);
      res.status(500).json({ 
        error: "Failed to send message. Please try again or email me directly.",
        success: false 
      });
    }
  }
);

export default router;
