const pool = require('./db');

async function updateECombinator() {
  try {
    await pool.query(
      "UPDATE projects SET repo_link = $1, image_url = $2 WHERE title = $3",
      ['https://github.com/tsedeysolomons/E-COMBINATOR.git', '/ecombinator.png', 'E-Combinator']
    );
    console.log("✅ E-Combinator Updated Successfully!");
  } catch (err) {
    console.error("❌ Error updating E-Combinator:", err);
  } finally {
    process.exit();
  }
}

updateECombinator();
