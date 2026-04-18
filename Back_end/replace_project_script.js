const pool = require('./db');

async function replaceMoodApp() {
  try {
    await pool.query(
      "UPDATE projects SET title = $1, description = $2, repo_link = $3, image_url = $4, category = $5, tags = $6 WHERE title = $7",
      [
        'EMwA Trainer Pooling System', 
        'The EMWA Trainer Pooling System is an enterprise-grade platform designed to manage expert trainers, coordinate training deployments, and ensure fair distribution of opportunities across Ethiopia. The system features real-time updates, automated fairness algorithms, digital certificate generation, and comprehensive audit trails.',
        'https://github.com/tsedeysolomons/Trainer-pooling.git',
        '/trainerpooling.png',
        'Web Application',
        JSON.stringify(['React', 'Enterprise', 'PostgreSQL', 'Deployment']),
        'MoodApp'
      ]
    );
    console.log("✅ MoodApp Replaced with EMwA Trainer Pooling System Successfully!");
  } catch (err) {
    console.error("❌ Error replacing project:", err);
  } finally {
    process.exit();
  }
}

replaceMoodApp();
