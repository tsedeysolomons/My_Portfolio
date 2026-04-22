const pool = require('./db');

async function updateEmwaDemoLink() {
  try {
    const result = await pool.query(
      "UPDATE projects SET demo_link = $1 WHERE title = $2 RETURNING *",
      ['http://49.12.194.224:8081/', 'EMwA Trainer Pooling System']
    );

    if (result.rows.length > 0) {
      console.log("✅ Successfully updated EMwA Trainer Pooling System demo link!");
      console.log("New demo link:", result.rows[0].demo_link);
    } else {
      console.log("⚠️ No matching project found for EMwA Trainer Pooling System");
    }
  } catch (err) {
    console.error("❌ Error updating demo link:", err);
  } finally {
    process.exit();
  }
}

updateEmwaDemoLink();
