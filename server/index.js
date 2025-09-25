import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-portfolio.vercel.app'] // Replace with your actual Vercel URL
    : ['http://localhost:3000', 'http://localhost:5173']
}));
app.use(express.json());

// MongoDB Connection (optional - for saving messages)
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.log('❌ MongoDB connection error:', err));
}

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Send Email Function
const sendEmail = async (formData) => {
  const transporter = createTransporter();
  const { name, email, company, subject, message, budget, timeline } = formData;

  const emailSubject = subject ? `Portfolio: ${subject}` : `New Portfolio Contact from ${name}`;
  
  const emailBody = `
🌟 NEW PORTFOLIO CONTACT SUBMISSION 🌟

👤 CLIENT DETAILS:
Name: ${name}
Email: ${email}
Company: ${company || 'Not specified'}

📋 PROJECT INFORMATION:
Project Type: ${subject || 'Not specified'}
Budget Range: ${budget || 'Not specified'}
Timeline: ${timeline || 'Not specified'}

💬 MESSAGE:
${message}

📅 Received: ${new Date().toLocaleString()}
  `;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Send to yourself
    replyTo: email,
    subject: emailSubject,
    text: emailBody,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333;">🌟 New Portfolio Contact</h2>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #555;">👤 Client Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Company:</strong> ${company || 'Not specified'}</p>
        </div>
        
        <div style="background: #f0f8ff; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #555;">📋 Project Information</h3>
          <p><strong>Project Type:</strong> ${subject || 'Not specified'}</p>
          <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        </div>
        
        <div style="background: #fff5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
          <h3 style="color: #555;">💬 Message</h3>
          <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <p style="color: #888; font-size: 12px;">
          📅 Received: ${new Date().toLocaleString()}
        </p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio API is running' });
});

// Contact form endpoint with validation
app.post('/api/contact', [
  body('name').notEmpty().withMessage('Name is required').isLength({ min: 2 }),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').notEmpty().withMessage('Message is required').isLength({ min: 10 }),
], async (req, res) => {
  try {
    // Check validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill all required fields correctly',
        errors: errors.array()
      });
    }

    const { name, email, company, subject, message, budget, timeline } = req.body;
    
    console.log('📧 Sending email for contact form submission:', { name, email, subject });

    // Send email
    await sendEmail(req.body);
    
    console.log('✅ Email sent successfully');

    res.json({ 
      success: true, 
      message: 'Message sent successfully! I\'ll get back to you within 24 hours.' 
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again or email me directly.' 
    });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server Error:', error);
  res.status(500).json({ 
    success: false, 
    message: 'Internal server error' 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email configured: ${process.env.EMAIL_USER ? 'YES' : 'NO'}`);
});