const nodemailer = require("nodemailer");

/**
 * Configure the email transporter using process.env credentials.
 * Works with Gmail (App Passwords), Outlook, or SMTP services like Resend/Mailgun.
 */
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_PORT == '465', // true only for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false // Helps with some SMTP servers
  }
});

/**
 * Sends a notification email to the owner when a new message is received.
 */
const sendContactNotification = async (contactData) => {
  const { name, email, subject, message } = contactData;

  console.log("📧 Attempting to send email...");
  console.log("   To:", process.env.EMAIL_TO || process.env.EMAIL_USER);
  console.log("   From:", process.env.EMAIL_USER);
  console.log("   Subject:", `New Portfolio Message: ${subject}`);

  // Configuration for the destination email (owner)
  const mailOptions = {
    from: `"Portfolio Notification" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `New Portfolio Message: ${subject}`,
    text: `You have a new message from ${name} (${email}):\n\nSubject: ${subject}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #333;">New Contact Message Received</h2>
        <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border: 0; border-top: 1px solid #eee;">
        <p style="white-space: pre-wrap;">${message}</p>
        <hr style="border: 0; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #666;">This message was sent directly from your portfolio website contact form.</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Notification email sent successfully!");
    console.log("   Message ID:", info.messageId);
    return true;
  } catch (error) {
    console.error("❌ Email delivery failed!");
    console.error("   Error:", error.message);
    console.error("   Code:", error.code);
    // We don't throw here to ensure the API success response still goes through
    // as the message IS saved in the DB.
    return false;
  }
};

module.exports = { sendContactNotification };
