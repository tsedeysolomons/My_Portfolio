require('dotenv').config();
const { sendContactNotification } = require('./mailer');

// Test data
const testMessage = {
  name: 'Test User',
  email: 'test@example.com',
  subject: 'Test Contact Form',
  message: 'This is a test message to verify the email system is working correctly.'
};

console.log('🧪 Testing email notification system...');
console.log('📧 Email configuration:');
console.log(`   Host: ${process.env.EMAIL_HOST}`);
console.log(`   Port: ${process.env.EMAIL_PORT}`);
console.log(`   From: ${process.env.EMAIL_USER}`);
console.log(`   To: ${process.env.EMAIL_TO}`);
console.log('');

sendContactNotification(testMessage)
  .then((success) => {
    if (success) {
      console.log('✅ Email sent successfully!');
      console.log('📬 Check your inbox at:', process.env.EMAIL_TO);
    } else {
      console.log('❌ Email failed to send. Check the error above.');
    }
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Error:', error.message);
    process.exit(1);
  });
