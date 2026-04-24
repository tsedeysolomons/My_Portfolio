const { Resend } = require("resend");

const sendContactNotification = async (contactData) => {
  const { name, email, subject, message } = contactData;

  const apiKey = process.env.RESEND_API_KEY;
  const emailTo = "tsedeysolomon91@gmail.com"; // Resend free plan: must be account owner email

  console.log("📧 Attempting to send email via Resend...");
  console.log("   API Key exists:", !!apiKey);
  console.log("   API Key prefix:", apiKey ? apiKey.substring(0, 8) : "MISSING");
  console.log("   To:", emailTo);
  console.log("   Subject:", `New Portfolio Message: ${subject}`);

  if (!apiKey) {
    console.error("❌ RESEND_API_KEY is not set!");
    return false;
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [emailTo],
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
      console.error("❌ Resend error:", JSON.stringify(error));
      return false;
    }

    console.log("✅ Email sent successfully via Resend! ID:", data.id);
    return true;
  } catch (err) {
    console.error("❌ Email delivery failed:", err.message);
    return false;
  }
};

module.exports = { sendContactNotification };
