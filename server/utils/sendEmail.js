import nodemailer from "nodemailer";

export const sendEmail = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // You receive the mail
    subject: `Portfolio Message from ${name}`,
    text: `You got a message from ${name} (${email}):\n\n${message}`,
  };

  await transporter.sendMail(mailOptions);
};
