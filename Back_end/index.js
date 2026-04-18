require('dotenv').config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:5174",
  FRONTEND_URL
].filter(Boolean);

// Middleware
app.use(cors({
  origin: ALLOWED_ORIGINS,
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// Rate limiter for contact form (prevent spam)
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 requests per windowMs
  message: { success: false, error: "Too many requests from this IP, please try again after an hour" },
  standardHeaders: true,
  legacyHeaders: false,
});

const { body, validationResult } = require('express-validator');
const pool = require("./db");
const { sendContactNotification } = require("./mailer");

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio Backend API is running!", status: "OK" });
});

// ============================================
// CONTACT ENDPOINTS
// ============================================

// Get all contact messages
app.get("/api/contact", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contacts ORDER BY created_at DESC");
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ success: false, error: "Failed to fetch contacts" });
  }
});

// Create new contact message
app.post(
  "/api/contact",
  contactLimiter,
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('subject').trim().notEmpty().withMessage('Subject is required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array(),
        error: errors.array()[0].msg 
      });
    }

    try {
      const { name, email, subject, message } = req.body;
      
      // Insert into database
      const result = await pool.query(
        "INSERT INTO contacts (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, email, subject, message]
      );
      
      // Send email notification (don't await, let it run in background)
      sendContactNotification({ name, email, subject, message })
        .then(() => console.log("✅ Email sent for contact from:", name))
        .catch((err) => console.error("❌ Email failed for contact from:", name, err));

      res.status(201).json({ 
        success: true, 
        data: result.rows[0],
        message: "Contact message sent successfully" 
      });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(500).json({ success: false, error: "Failed to send message" });
    }
  }
);

// ============================================
// SKILLS ENDPOINTS
// ============================================

// Get all skills
app.get("/api/skills", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM skills ORDER BY category, display_order"
    );
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error("Error fetching skills:", error);
    res.status(500).json({ success: false, error: "Failed to fetch skills" });
  }
});

// ============================================
// PROJECTS ENDPOINTS
// ============================================

// Get all projects (with optional featured filter)
app.get("/api/projects", async (req, res) => {
  try {
    const { featured } = req.query;
    let query = "SELECT * FROM projects";
    let params = [];

    if (featured === "true") {
      query += " WHERE featured = true";
    }

    query += " ORDER BY created_at DESC";

    const result = await pool.query(query, params);
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ success: false, error: "Failed to fetch projects" });
  }
});

// Get single project by ID
app.get("/api/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM projects WHERE id = $1", [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: "Project not found" });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ success: false, error: "Failed to fetch project" });
  }
});

// ============================================
// EXPERIENCE ENDPOINTS
// ============================================

// Get all experience entries
app.get("/api/experience", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM experience ORDER BY display_order, period_start DESC"
    );
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error("Error fetching experience:", error);
    res.status(500).json({ success: false, error: "Failed to fetch experience" });
  }
});

// ============================================
// BLOG ENDPOINTS
// ============================================

// Get all blog posts (with pagination, search, and category filter)
app.get("/api/blog", async (req, res) => {
  try {
    const { search, category, page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    let query = "SELECT * FROM blog_posts WHERE 1=1";
    let countQuery = "SELECT COUNT(*) FROM blog_posts WHERE 1=1";
    let params = [];
    let paramIndex = 1;

    // Search filter
    if (search) {
      query += ` AND (title ILIKE $${paramIndex} OR excerpt ILIKE $${paramIndex} OR content ILIKE $${paramIndex})`;
      countQuery += ` AND (title ILIKE $${paramIndex} OR excerpt ILIKE $${paramIndex} OR content ILIKE $${paramIndex})`;
      params.push(`%${search}%`);
      paramIndex++;
    }

    // Category filter
    if (category && category !== "All") {
      query += ` AND category = $${paramIndex}`;
      countQuery += ` AND category = $${paramIndex}`;
      params.push(category);
      paramIndex++;
    }

    // Get total count
    const countResult = await pool.query(countQuery, params);
    const total = parseInt(countResult.rows[0].count);

    // Add pagination
    query += ` ORDER BY published_date DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
    params.push(limit, offset);

    const result = await pool.query(query, params);

    res.json({ 
      success: true, 
      data: result.rows,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ success: false, error: "Failed to fetch blog posts" });
  }
});

// Get featured blog posts
app.get("/api/blog/featured", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM blog_posts WHERE featured = true ORDER BY published_date DESC"
    );
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error("Error fetching featured blog posts:", error);
    res.status(500).json({ success: false, error: "Failed to fetch featured posts" });
  }
});


// ============================================
// BLOG COMMENTS ENDPOINTS
// ============================================

// Get comments for a blog post (Supports optional trailing slash)
app.get(["/api/blog/:id/comments", "/api/blog/:id/comments/"], async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      "SELECT * FROM blog_comments WHERE post_id = $1 ORDER BY created_at DESC",
      [id]
    );
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ success: false, error: "Failed to fetch comments" });
  }
});

// Post a comment to a blog post (Supports optional trailing slash)
app.post(
  ["/api/blog/:id/comments", "/api/blog/:id/comments/"],
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('content').trim().notEmpty().withMessage('Comment content is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array(),
        error: errors.array()[0].msg 
      });
    }

    try {
      const { id } = req.params;
      const { name, email, content } = req.body;
      
      const result = await pool.query(
        "INSERT INTO blog_comments (post_id, name, email, content) VALUES ($1, $2, $3, $4) RETURNING *",
        [id, name, email, content]
      );

      res.status(201).json({ 
        success: true, 
        data: result.rows[0],
        message: "Comment posted successfully" 
      });
    } catch (error) {
      console.error("Error posting comment:", error);
      res.status(500).json({ success: false, error: "Failed to post comment" });
    }
  }
);

// Get single blog post by ID (Must be below specific routes)
app.get("/api/blog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM blog_posts WHERE id = $1", [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: "Blog post not found" });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res.status(500).json({ success: false, error: "Failed to fetch blog post" });
  }
});

// ============================================
// ERROR HANDLING
// ============================================

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ success: false, error: "Internal server error" });
});

// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📍 API available at http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use. Please close anything on this port.`);
  } else {
    console.error('❌ Server error:', err);
  }
});