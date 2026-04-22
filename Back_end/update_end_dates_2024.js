const pool = require('./db');

async function updateEndDates() {
  try {
    // 1. Update Microprocessor Systems Developer: end date 2022 -> 2024
    const microprocessor = await pool.query(
      "UPDATE experience SET period_end = '2024-12-31' WHERE company = 'Academic & Personal Projects' RETURNING *"
    );
    console.log("✅ Updated Microprocessor Systems Developer: JAN 2023 — DEC 2024");

    // 2. Update ICT Support Intern: end date 2022 -> 2024
    const ictIntern = await pool.query(
      "UPDATE experience SET period_end = '2024-12-31' WHERE company = 'PEDS (Point of Sale Systems)' RETURNING *"
    );
    console.log("✅ Updated ICT Support Intern: JAN 2024 — DEC 2024");

    console.log("\n📋 All end dates updated to 2024 successfully!");
    
  } catch (err) {
    console.error("❌ Error updating end dates:", err);
  } finally {
    process.exit();
  }
}

updateEndDates();
