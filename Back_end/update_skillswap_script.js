const pool = require('./db');

async function updateSkillSwap() {
  try {
    await pool.query(
      "UPDATE projects SET repo_link = $1, demo_link = $1, image_url = $2 WHERE title = $3",
      ['https://github.com/tsedeysolomons/SkillSwap.git', '/skillswap.png', 'SkillSwap Platform']
    );
    console.log("✅ SkillSwap Platform Updated Successfully!");
  } catch (err) {
    console.error("❌ Error updating SkillSwap:", err);
  } finally {
    process.exit();
  }
}

updateSkillSwap();
