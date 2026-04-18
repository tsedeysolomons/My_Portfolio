const pool = require('./db');

async function updateDB() {
  try {
    // 1. Update MongoDB to SQL Server
    await pool.query("UPDATE skills SET name = 'SQL Server' WHERE name = 'MongoDB'");
    
    // 2. Update Mocha to Swagger
    await pool.query("UPDATE skills SET name = 'Swagger' WHERE name = 'Mocha'");
    
    // 3. Add Azure App Service to DevOps & Tools if it doesn't exist
    const checkAzure = await pool.query("SELECT id FROM skills WHERE name = 'Azure App Service'");
    if (checkAzure.rows.length === 0) {
      await pool.query(
        "INSERT INTO skills (category, name, proficiency_level, display_order) VALUES ($1, $2, $3, $4)",
        ['DevOps & Tools', 'Azure App Service', 'Intermediate', 5]
      );
    }
    
    console.log("✅ Database updated successfully!");
  } catch (err) {
    console.error("❌ Error updating database:", err);
  } finally {
    process.exit();
  }
}

updateDB();
