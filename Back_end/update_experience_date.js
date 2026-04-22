const pool = require('./db');

async function updateExperienceDate() {
  try {
    // Update the DAF Tech Computer experience start date from 2024 to 2025
    const result = await pool.query(
      "UPDATE experience SET period_start = '2025-12-01' WHERE company = 'DAF Tech Computer' RETURNING *"
    );

    if (result.rows.length > 0) {
      console.log("✅ Successfully updated DAF Tech Computer experience date!");
      console.log("Updated record:", result.rows[0]);
    } else {
      console.log("⚠️ No matching experience found for DAF Tech Computer");
    }
  } catch (err) {
    console.error("❌ Error updating experience:", err);
  } finally {
    process.exit();
  }
}

updateExperienceDate();
