const pool = require('./db');

async function globalUpdate() {
  try {
    const res = await pool.query("SELECT id, title, tags, description FROM projects");
    for (const r of res.rows) {
      let tags = r.tags;
      let description = r.description;
      let updated = false;

      // Handle tags
      if (Array.isArray(tags)) {
        if (tags.some(t => t.toLowerCase() === 'postgresql')) {
          tags = tags.map(t => t.toLowerCase() === 'postgresql' ? 'Prisma (MySQL)' : t);
          updated = true;
        }
      }

      // Handle description
      if (description.toLowerCase().includes('postgresql')) {
        description = description.replace(/postgresql/gi, 'Prisma (MySQL)');
        updated = true;
      }

      if (updated) {
        await pool.query(
          "UPDATE projects SET tags = $1, description = $2 WHERE id = $3",
          [JSON.stringify(tags), description, r.id]
        );
        console.log(`✅ Updated project: ${r.title}`);
      }
    }
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
}

globalUpdate();
