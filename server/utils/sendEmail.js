import nodemailer from "nodemailer";

export const sendEmail = async ({ name, email, company, subject, message, budget, timeline }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Create formatted email content
  const emailSubject = subject ? `Portfolio: ${subject}` : `New Portfolio Contact from ${name}`;
  
  const emailBody = `
🌟 NEW PORTFOLIO CONTACT SUBMISSION 🌟

👤 CLIENT DETAILS:
═══════════════════════════════════════
Name: ${name}
Email: ${email}
Company: ${company || 'Not specified'}

📋 PROJECT INFORMATION:
═══════════════════════════════════════
Project Type: ${subject || 'Not specified'}
Budget Range: ${budget || 'Not specified'}
Timeline: ${timeline || 'Not specified'}

💬 MESSAGE:
═══════════════════════════════════════
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 Received: ${new Date().toLocaleString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit',
    timeZoneName: 'short'
  })}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply directly to this email to respond to ${name}.
  `;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: "sorkhademanthan@gmail.com", // Your Gmail
    replyTo: email, // So you can reply directly to the client
    subject: emailSubject,
    text: emailBody,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 15px; color: white; text-align: center; margin-bottom: 20px;">
          <h1 style="margin: 0; font-size: 24px;">🌟 New Portfolio Contact</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone is interested in working with you!</p>
        </div>
        
        <div style="background: white; border-radius: 15px; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="border-left: 4px solid #667eea; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #2d3748; margin: 0 0 15px 0;">👤 Client Details</h2>
            <p style="margin: 5px 0; color: #4a5568;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0; color: #4a5568;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a></p>
            <p style="margin: 5px 0; color: #4a5568;"><strong>Company:</strong> ${company || 'Not specified'}</p>
          </div>
          
          <div style="border-left: 4px solid #48bb78; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #2d3748; margin: 0 0 15px 0;">📋 Project Information</h2>
            <p style="margin: 5px 0; color: #4a5568;"><strong>Project Type:</strong> ${subject || 'Not specified'}</p>
            <p style="margin: 5px 0; color: #4a5568;"><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
            <p style="margin: 5px 0; color: #4a5568;"><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          </div>
          
          <div style="border-left: 4px solid #ed8936; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #2d3748; margin: 0 0 15px 0;">💬 Message</h2>
            <div style="background: #f7fafc; padding: 20px; border-radius: 10px; color: #2d3748; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; background: #f7fafc; border-radius: 10px; margin-top: 25px;">
            <p style="margin: 0; color: #718096; font-size: 14px;">
              📅 Received on ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric', 
                hour: '2-digit', 
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #718096; font-size: 14px;">
          <p>🚀 Reply directly to this email to respond to ${name}</p>
        </div>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};
