const sendContactNotification = async (contactData) => {
  const { name, email, subject, message } = contactData;

  const apiKey = process.env.RESEND_API_KEY;
  const emailTo = "tsedeysolomon91@gmail.com";

  console.log("📧 Attempting to send email via Resend HTTP API...");
  console.log("   API Key exists:", !!apiKey);
  console.log("   To:", emailTo);

  if (!apiKey) {
    console.error("❌ RESEND_API_KEY is not set!");
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("❌ Resend HTTP error:", JSON.stringify(result));
      return false;
    }

    console.log("✅ Email sent successfully! ID:", result.id);
    return true;
  } catch (err) {
    console.error("❌ Email delivery failed:", err.message);
    return false;
  }
};

module.exports = { sendContactNotification };
