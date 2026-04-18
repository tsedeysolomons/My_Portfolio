const pool = require('./db');

async function updateProjects() {
  try {
    // 1. Update E-Combinator
    const ecombinatorDesc = "Developed for i-cog labs, E-Combinator is a digital startup accelerator platform that connects Ethiopian innovators and investors, facilitating mentorship and funding opportunities.";
    const ecombinatorTags = ["Postgres", "Node.js", "Next.js", "Tailwind CSS", "React"];
    await pool.query(
      "UPDATE projects SET description = $1, tags = $2, featured = false WHERE title = 'E-Combinator'",
      [ecombinatorDesc, JSON.stringify(ecombinatorTags)]
    );
    console.log("✅ E-Combinator Updated");

    // 2. Update EMwA Trainer Pooling System
    const emwaDesc = "Developed for the Ethiopian Midwifes Association, the EMwA Trainer Pooling System is an enterprise-grade platform designed to manage expert trainers, coordinate deployments, and ensure fair opportunity distribution across Ethiopia.";
    const emwaTags = ["Angular", "Tailwind CSS", "C#", ".Net"];
    await pool.query(
      "UPDATE projects SET description = $1, tags = $2 WHERE title = 'EMwA Trainer Pooling System'",
      [emwaDesc, JSON.stringify(emwaTags)]
    );
    console.log("✅ EMwA Trainer Pooling System Updated");

    // 3. Update SkillSwap Platform
    await pool.query(
      "UPDATE projects SET featured = true WHERE title = 'SkillSwap Platform'"
    );
    console.log("✅ SkillSwap Platform set to Featured");

  } catch (err) {
    console.error("❌ Error updating projects:", err);
  } finally {
    process.exit();
  }
}

updateProjects();
