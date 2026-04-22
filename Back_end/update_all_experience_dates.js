const pool = require('./db');

async function updateAllExperienceDates() {
  try {
    // 1. Update Web Developer: 2020 -> 2024
    const webDev = await pool.query(
      "UPDATE experience SET period_start = '2024-01-01' WHERE company = 'Freelance & Personal Projects' RETURNING *"
    );
    console.log("✅ Updated Web Developer (Freelance) start date to 2024");

    // 2. Update Microprocessor Systems Developer: 2019 -> 2023, end date 2023 -> 2022
    const microprocessor = await pool.query(
      "UPDATE experience SET period_start = '2023-01-01', period_end = '2022-12-31' WHERE company = 'Academic & Personal Projects' RETURNING *"
    );
    console.log("✅ Updated Microprocessor Systems Developer: Jan 2023 — Dec 2022");

    // 3. Update ICT Support Intern: Jan 2021 — Dec 2024 -> Jan 2024 — Dec 2022
    const ictIntern = await pool.query(
      "UPDATE experience SET period_start = '2024-01-01', period_end = '2022-12-31' WHERE company = 'PEDS (Point of Sale Systems)' RETURNING *"
    );
    console.log("✅ Updated ICT Support Intern: Jan 2024 — Dec 2022");

    console.log("\n📋 All updates completed successfully!");
    
  } catch (err) {
    console.error("❌ Error updating experience dates:", err);
  } finally {
    process.exit();
  }
}

updateAllExperienceDates();
