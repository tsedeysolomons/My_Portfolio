-- Seed Data for Portfolio Database

-- Insert Skills
INSERT INTO skills (category, name, proficiency_level, display_order) VALUES
('Frontend Development', 'React', 'Advanced', 1),
('Frontend Development', 'Next.js', 'Advanced', 2),
('Frontend Development', 'TypeScript', 'Intermediate', 3),
('Frontend Development', 'HTML/CSS', 'Advanced', 4),
('Frontend Development', 'JavaScript', 'Advanced', 5),
('Backend Development', 'Node.js', 'Intermediate', 1),
('Backend Development', 'Express', 'Intermediate', 2),
('Backend Development', 'Python', 'Intermediate', 3),
('Database', 'SQL Server', 'Intermediate', 1),
('Database', 'PostgreSQL', 'Intermediate', 2),
('Database', 'MySQL', 'Intermediate', 3),
('Database', 'Firebase', 'Intermediate', 4),
('DevOps & Tools', 'Git', 'Advanced', 1),
('DevOps & Tools', 'Docker', 'Beginner', 2),
('DevOps & Tools', 'Azure App Service', 'Intermediate', 3),
('UI/UX', 'Tailwind CSS', 'Advanced', 1),
('UI/UX', 'Material UI', 'Intermediate', 2),
('UI/UX', 'Figma', 'Intermediate', 3),
('UI/UX', 'Responsive Design', 'Advanced', 4),
('Testing', 'Jest', 'Intermediate', 1),
('Testing', 'React Testing Library', 'Intermediate', 2),
('Testing', 'Cypress', 'Beginner', 3),
('Testing', 'Swagger', 'Beginner', 4),
('Mobile', 'React Native', 'Intermediate', 1),
('Mobile', 'iOS', 'Beginner', 2),
('Mobile', 'Android', 'Beginner', 3),
('Other', 'REST APIs', 'Advanced', 1),
('Other', 'WebSockets', 'Intermediate', 2),
('Other', 'Microservices', 'Beginner', 3);

-- Insert Projects
INSERT INTO projects (title, description, category, image_url, demo_link, repo_link, tags, featured) VALUES
(
    'Ethiopian Midr Babur E-Ticket System',
    'EMBE-T (Ethiopian Midr Babur E-Ticket) is a digital ticketing system designed to modernize public transportation in Ethiopia. The platform allows passengers to easily buy, store, and validate bus or train tickets using their mobile phones',
    'Web Application',
    '/image.png',
    'https://example.com',
    'https://github.com/tsedeysolomons/EMBE-T.git',
    '["React", "Node.js", "Prisma (MySQL)", "Mobile"]',
    false
),
(
    'E-Combinator',
    'Developed for i-cog labs, E-Combinator is a digital startup accelerator platform that connects Ethiopian innovators and investors, facilitating mentorship and funding opportunities.',
    'Web Application',
    '/ecombinator.png',
    'https://example.com',
    'https://github.com/tsedeysolomons/E-COMBINATOR.git',
    '["Postgres", "Node.js", "Next.js", "Tailwind CSS", "React"]',
    false
),
(
    'EMwA Trainer Pooling System',
    'Streamlining professional trainer mobilization for the Ethiopian Midwifes Association with a centralized, data-driven management platform. The system optimizes nationwide allocation across Ethiopia''s healthcare education network.',
    'Web Application',
    '/trainerpooling.png',
    'https://example.com',
    'https://github.com/tsedeysolomons/Trainer-pooling.git',
    '["Angular", "Tailwind CSS", "C#", ".Net"]',
    true
),
(
    'SkillSwap Platform',
    'A skill-sharing platform built with React Native, allowing users to exchange skills and services through profiles, chat, and scheduling features.',
    'Mobile Application',
    '/skillswap.png',
    'https://github.com/tsedeysolomons/SkillSwap.git',
    'https://github.com/tsedeysolomons/SkillSwap.git',
    '["React Native", "Firebase", "Chat", "Scheduling"]',
    true
),
(
    'BGS-Restaurant_Menu',
    'Fully responsive design for mobile and desktop 🍽️ Digital menu with categories (Shawarma, Chicken, Fasting Menu, Drinks) 🛒 Real-time shopping cart with item customization Advanced search and filtering system Complete checkout process with order management Supabase backend with Prisma (MySQL) database Built with Next.js 15 and React Server Components',
    'Web Application',
    '/bgs-restaurant.png',
    'https://example.com',
    'https://github.com/tsedeysolomons/BGS-Restaurant_Menu.git',
    '["Next.js 15", "Supabase", "Prisma (MySQL)", "React"]',
    true
),
(
    'Have Fashion Inventory Management System',
    'A modern web-based inventory management system for a men’s clothing store called Have Fashion. This project helps shop owners track stock, manage suppliers, handle sales, and view reports — all from a clean and intuitive admin dashboard.',
    'Web Application',
    '/havefashion.png',
    'https://example.com',
    'https://github.com/tsedeysolomons/have-fashi-inventory-system.git',
    '["React", "Inventory", "Dashboard", "Tailwind CSS"]',
    true
);

-- Insert Experience
INSERT INTO experience (title, company, location, period_start, period_end, employment_type, description, achievements, technologies, icon, display_order) VALUES
(
    'Software Developer',
    'DAF Tech Computer',
    'Addis Ababa',
    '2024-12-01',
    null,
    'Full-time',
    'Leading full-stack development initiatives using modern frameworks like Angular and .NET. Dedicated to building scalable business solutions and optimizing system performance.',
    '["Developed and maintained full-stack web applications using HTML, CSS, TypeScript, Angular, and C#", "Built and integrated backend services with .NET / ASP.NET", "Designed and managed databases using SQL Server Management Studio", "Implemented APIs and handled data fetching, improving application performance and reliability", "Fixed bugs and optimized system performance", "Collaborated with team members to deliver scalable client solutions", "Designed modern, user-friendly UI/UX interfaces", "Key Project: Bill System Project - Contributed frontend and backend logic", "Key Project: EMwA Train Pooling System - Independently developed full-stack Angular/C# application"]',
    '["HTML", "CSS", "TypeScript", "Angular", "C#", ".NET", "ASP.NET", "SQL Server"]',
    'Code',
    1
),
(
    'Web Developer',
    'Freelance & Personal Projects',
    'Remote',
    '2020-01-01',
    NULL,
    'Full-time',
    'Developed and maintained responsive web applications using modern technologies. Created user-friendly interfaces and implemented robust backend solutions for various clients and personal projects.',
    '["Built 15+ responsive websites and web applications", "Implemented modern frontend frameworks (React, Next.js)", "Developed RESTful APIs and database integrations", "Optimized website performance and SEO", "Collaborated with clients to deliver custom solutions"]',
    '["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "HTML/CSS", "MongoDB", "PostgreSQL"]',
    'Code',
    2
),
(
    'Microprocessor Systems Developer',
    'Academic & Personal Projects',
    'University Lab',
    '2019-01-01',
    '2022-12-31',
    'Academic',
    'Gained extensive hands-on experience with microprocessor systems, embedded programming, and hardware-software integration through coursework and independent projects.',
    '["Programmed 8051 and ARM microcontrollers", "Designed and implemented embedded systems", "Developed assembly language programs", "Created interfacing circuits for sensors and actuators", "Built real-time control systems"]',
    '["Assembly Language", "C Programming", "8051 Microcontroller", "ARM Cortex", "Circuit Design", "Embedded C", "Hardware Debugging"]',
    'Cpu',
    3
),
(
    'ICT Support Intern',
    'PEDS (Point of Sale Systems)',
    'On-site',
    '2021-01-01',
    '2022-12-31',
    'Internship',
    'Provided technical support for cash register machines and point-of-sale systems. Gained valuable experience in troubleshooting hardware issues, software configuration, and customer support in a retail technology environment.',
    '["Troubleshot and repaired cash register systems", "Configured POS software for various retail clients", "Provided technical support to store operators", "Maintained and updated system databases", "Documented common issues and solutions", "Assisted in system installations and upgrades"]',
    '["POS Systems", "Cash Register Software", "Hardware Troubleshooting", "Database Management", "Customer Support", "System Configuration"]',
    'Wrench',
    4
);

-- Insert Blog Posts
INSERT INTO blog_posts (title, excerpt, content, author, published_date, read_time, category, tags, featured) VALUES
(
    'Getting Started with React and Next.js: A Beginner''s Guide',
    'Learn the fundamentals of React and Next.js to build modern web applications. This comprehensive guide covers everything from setup to deployment.',
    'React and Next.js have revolutionized the way we build web applications. In this comprehensive guide, we''ll explore the fundamentals and get you started on your journey.',
    'Tsedey Solomon',
    '2025-01-15',
    '8 min read',
    'Web Development',
    '["React", "Next.js", "JavaScript", "Frontend"]',
    true
),
(
    'Understanding Microcontrollers: 8051 vs ARM Architecture',
    'A deep dive into microcontroller architectures, comparing the classic 8051 with modern ARM processors and their use cases in embedded systems.',
    'Microcontrollers are the heart of embedded systems. Let''s explore two popular architectures and understand their differences.',
    'Tsedey Solomon',
    '2024-01-10',
    '12 min read',
    'Embedded Systems',
    '["8051", "ARM", "Microcontrollers", "Embedded"]',
    false
),
(
    'My Experience with POS Systems: Lessons from PEDS Internship',
    'Insights and lessons learned during my internship at PEDS, working with cash register systems and providing ICT support to retail clients.',
    'During my internship at PEDS, I gained valuable hands-on experience with point-of-sale systems and learned about the challenges of retail technology.',
    'Tsedey Solomon',
    '2024-01-05',
    '6 min read',
    'Career',
    '["POS", "Internship", "Career", "Technical Support"]',
    false
);
