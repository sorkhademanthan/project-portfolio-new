# Portfolio Website - Setup Instructions

## 🚀 Quick Start

### Backend Setup (Email Configuration)

1. **Gmail App Password Setup:**

   - Go to your Google Account settings
   - Enable 2-Factor Authentication
   - Generate an App Password for "Mail"
   - Copy the 16-character password

2. **Environment Variables:**

   ```bash
   cd server
   # Update .env file with your app password
   EMAIL_PASS=your_16_character_app_password_here
   ```

3. **Install Dependencies & Start Server:**
   ```bash
   cd server
   npm install
   npm run dev
   ```

### Frontend Setup

1. **Install Dependencies & Start Client:**
   ```bash
   cd client
   npm install
   npm run dev
   ```

## 📧 Email Features

When users submit the contact form, you'll receive a beautifully formatted email with:

- **Client Details:** Name, Email, Company
- **Project Information:** Type, Budget Range, Timeline
- **Message:** Full project description
- **Formatted HTML:** Professional email design
- **Reply-To:** Direct reply to client's email

## 🎨 UI Optimizations

- ✅ Reduced vertical spacing throughout
- ✅ Minimal animations for better performance
- ✅ Clean, professional design
- ✅ Industry-grade form validation
- ✅ Responsive layout

## 📊 Form Fields

- Full Name (required)
- Email Address (required)
- Company/Organization (optional)
- Project Type (required)
- Budget Range (optional)
- Timeline (optional)
- Project Description (required)

## 🔧 Backend Features

- Input validation & sanitization
- MongoDB data storage
- Professional email templates
- Error handling & logging
- Industry-grade security practices

Emails will be sent to: **sorkhademanthan@gmail.com**
