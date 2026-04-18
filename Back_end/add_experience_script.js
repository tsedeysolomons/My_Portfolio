const pool = require('./db');

async function addNewExperience() {
  try {
    // 1. Shift existing experience orders
    await pool.query("UPDATE experience SET display_order = display_order + 1");

    // 2. Add new experience at display_order 1
    const achievements = [
      "Developed and maintained full-stack web applications using HTML, CSS, TypeScript, Angular, and C#",
      "Built and integrated backend services with .NET / ASP.NET",
      "Designed and managed databases using SQL Server Management Studio",
      "Implemented APIs and handled data fetching, improving application performance and reliability",
      "Fixed bugs and optimized system performance",
      "Collaborated with team members to deliver scalable client solutions",
      "Designed modern, user-friendly UI/UX interfaces",
      "Key Project: Bill System Project - Contributed frontend and backend logic",
      "Key Project: EMwA Train Pooling System - Independently developed full-stack Angular/C# application"
    ];

    const technologies = [
      "HTML", "CSS", "TypeScript", "Angular", "C#", ".NET", "ASP.NET", "SQL Server"
    ];

    await pool.query(
      "INSERT INTO experience (title, company, location, period_start, period_end, employment_type, description, achievements, technologies, icon, display_order) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
      [
        'Software Developer',
        'DAF Tech Computer',
        'Addis Ababa',
        '2024-12-01',
        null,
        'Full-time',
        'Leading full-stack development initiatives using modern frameworks like Angular and .NET. Dedicated to building scalable business solutions and optimizing system performance.',
        JSON.stringify(achievements),
        JSON.stringify(technologies),
        'Code',
        1
      ]
    );

    console.log("✅ DAF Tech Computer Experience Added Successfully!");
  } catch (err) {
    console.error("❌ Error adding experience:", err);
  } finally {
    process.exit();
  }
}

addNewExperience();
