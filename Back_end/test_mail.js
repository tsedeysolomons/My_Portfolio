require('dotenv').config();
const { sendContactNotification } = require("./mailer");
const nodemailer = require("nodemailer");

async function testConnection() {
  console.log("🔍 Testing email configuration...");
  console.log("User:", process.env.EMAIL_USER);
  console.log("Host:", process.env.EMAIL_HOST);
  console.log("Port:", process.env.EMAIL_PORT);

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: parseInt(process.env.EMAIL_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    console.log("⏳ Verifying transporter...");
    await transporter.verify();
    console.log("✅ Transporter is ready to take our messages");

    console.log("⏳ Sending test email...");
    const success = await sendContactNotification({
      name: "Test User",
      email: "test@example.com",
      subject: "Test Diagnostic",
      message: "This is a test message to verify portfolio email notifications."
    });

    if (success) {
      console.log("🚀 Test email sent successfully!");
    } else {
      console.log("❌ Test email failed (check logs above)");
    }
  } catch (error) {
    console.error("❌ Diagnostic failed:", error);
  } finally {
    process.exit();
  }
}

testConnection();
