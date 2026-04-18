const pool = require("./db");

async function addSkill() {
  try {
    const check = await pool.query("SELECT * FROM skills WHERE name = 'C#'");
    if (check.rows.length === 0) {
      await pool.query(
        "INSERT INTO skills (category, name, proficiency_level, display_order) VALUES ($1, $2, $3, $4)",
        ['Backend Development', 'C#', 'Intermediate', 4]
      );
      console.log("✅ Added C# to Backend Skills");
    } else {
      console.log("ℹ️ C# already exists in skills");
    }
  } catch (err) {
    console.error("❌ Error adding skill:", err);
  } finally {
    process.exit();
  }
}

addSkill();
