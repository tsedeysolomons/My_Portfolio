const pool = require('./db');

async function listProjects() {
  try {
    const res = await pool.query("SELECT id, title, tags FROM projects");
    console.log("Current Projects and Tags:");
    res.rows.forEach(r => {
      console.log(`${r.id}. ${r.title}: ${JSON.stringify(r.tags)}`);
    });
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
}

listProjects();
