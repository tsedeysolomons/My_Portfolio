const pool = require('./db');

async function addNewProject() {
  try {
    await pool.query(
      "INSERT INTO projects (title, description, category, image_url, demo_link, repo_link, tags, featured) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        'BGS-Restaurant_Menu',
        'Fully responsive design for mobile and desktop 🍽️ Digital menu with categories (Shawarma, Chicken, Fasting Menu, Drinks) 🛒 Real-time shopping cart with item customization Advanced search and filtering system Complete checkout process with order management Supabase backend with PostgreSQL database Built with Next.js 15 and React Server Components',
        'Web Application',
        '/bgs-restaurant.png',
        'https://example.com',
        'https://github.com/tsedeysolomons/BGS-Restaurant_Menu.git',
        JSON.stringify(['Next.js 15', 'Supabase', 'PostgreSQL', 'React']),
        true
      ]
    );
    console.log("✅ BGS-Restaurant_Menu Added Successfully!");
  } catch (err) {
    console.error("❌ Error adding new project:", err);
  } finally {
    process.exit();
  }
}

addNewProject();
