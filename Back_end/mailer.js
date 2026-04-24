const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendContactNotification = async (contactData) => {
  const { name, email, subject, message } = contactData;

  console.log("📧 Attempting to send email via Resend...");
  console.log("   To:", process.env.EMAIL_TO);
  console.log("   Subject:", `New Portfolio Message: ${subject}`);

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO || process.env.EMAIL_USER],
      subject: `New Portfolio Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #333;">New Contact Message Received</h2>
          <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p style="white-space: pre-wrap;">${message}</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">Sent from your portfolio contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return false;
    }

    console.log("✅ Email sent successfully via Resend! ID:", data.id);
    return true;
  } catch (error) {
    console.error("❌ Email delivery failed:", error.message);
    return false;
  }
};

module.exports = { sendContactNotification };
