const pool = require('./db');

async function updateTags() {
  try {
    const res = await pool.query("SELECT id, tags FROM projects WHERE title = 'Ethiopian Midr Babur E-Ticket System'");
    if (res.rows.length > 0) {
      let tags = res.rows[0].tags;
      // Ensure tags is handled correctly (array or string)
      if (typeof tags === 'string') {
        try {
          tags = JSON.parse(tags);
        } catch (e) {
          // If not JSON, handle as regular string split if needed, 
          // but our seed data uses JSON strings/arrays.
        }
      }
      
      const updatedTags = tags.map(t => (t === 'PostgreSQL' || t === 'postgresql') ? 'Prisma (MySQL)' : t);
      
      await pool.query(
        "UPDATE projects SET tags = $1 WHERE id = $2",
        [JSON.stringify(updatedTags), res.rows[0].id]
      );
      console.log("✅ Tags updated successfully in project ID:", res.rows[0].id);
    } else {
      console.log("ℹ️ Project not found");
    }
  } catch (err) {
    console.error("❌ Error updating tags:", err);
  } finally {
    process.exit();
  }
}

updateTags();
