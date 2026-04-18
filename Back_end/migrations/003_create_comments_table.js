const pool = require('../db');

async function createCommentsTable() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS blog_comments (
        id SERIAL PRIMARY KEY,
        post_id INTEGER REFERENCES blog_posts(id) ON DELETE CASCADE,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("✅ blog_comments table created or already exists.");

    // Create index for performance
    await pool.query("CREATE INDEX IF NOT EXISTS idx_comments_post_id ON blog_comments(post_id);");
    console.log("✅ Index on post_id created.");

  } catch (error) {
    console.error("❌ Error creating table:", error);
  } finally {
    process.exit();
  }
}

createCommentsTable();
