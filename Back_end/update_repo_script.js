const pool = require('./db');

async function updateProjectRepo() {
  try {
    await pool.query(
      "UPDATE projects SET repo_link = $1 WHERE title = $2",
      ['https://github.com/tsedeysolomons/EMBE-T.git', 'Ethiopian Midr Babur E-Ticket System']
    );
    console.log("✅ EMBE-T Repository Link Updated Successfully!");
  } catch (err) {
    console.error("❌ Error updating project repo:", err);
  } finally {
    process.exit();
  }
}

updateProjectRepo();
