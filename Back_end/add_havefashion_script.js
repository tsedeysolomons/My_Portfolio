const pool = require('./db');

async function addHaveFashion() {
  try {
    await pool.query(
      "INSERT INTO projects (title, description, category, image_url, demo_link, repo_link, tags, featured) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        'Have Fashion Inventory Management System',
        'A modern web-based inventory management system for a men’s clothing store called Have Fashion. This project helps shop owners track stock, manage suppliers, handle sales, and view reports — all from a clean and intuitive admin dashboard.',
        'Web Application',
        '/havefashion.png',
        'https://example.com',
        'https://github.com/tsedeysolomons/have-fashi-inventory-system.git',
        JSON.stringify(['React', 'Inventory', 'Dashboard', 'Tailwind CSS']),
        true
      ]
    );
    console.log("✅ Have Fashion Inventory System Added Successfully!");
  } catch (err) {
    console.error("❌ Error adding project:", err);
  } finally {
    process.exit();
  }
}

addHaveFashion();
