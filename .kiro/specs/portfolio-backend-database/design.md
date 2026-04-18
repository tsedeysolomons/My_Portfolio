# Portfolio Backend Database - Design Document

## 1. Architecture Overview

### 1.1 System Architecture

```
┌─────────────────────┐        HTTP / JSON        ┌──────────────────────────┐        SQL (pg Pool)        ┌──────────────────────┐
│  Frontend (React)   │ ◄────────────────────────► │  Express.js REST API     │ ◄──────────────────────── ► │  PostgreSQL Database  │
│  localhost:5173     │                            │  localhost:5000          │                             │  localhost:5432       │
└─────────────────────┘                            └──────────────────────────┘                             └──────────────────────┘
```

### 1.2 Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Runtime | Node.js | 18+ |
| Framework | Express.js | 5.x |
| Database | PostgreSQL | 14+ |
| DB Driver | pg (node-postgres) | 8.x |
| Environment | dotenv | 17.x |
| CORS | cors | 2.x |
| Validation | express-validator | (planned) |

### 1.3 Project Structure

```
Back_end/
├── .env                        # Environment variables (not committed to git)
├── index.js                    # Main Express app & all API routes
├── db.js                       # PostgreSQL connection pool
├── package.json                # Project dependencies
├── database/                   # (reserved for future db utilities)
└── migrations/
    ├── 001_create_tables.sql   # Schema creation script
    └── 002_seed_data.sql       # Initial seed data
```

---

## 2. Database Design

### 2.1 Entity-Relationship Overview

```
contacts          skills            projects
─────────         ──────            ────────
id (PK)           id (PK)           id (PK)
name              category          title
email             name              description
subject           proficiency_level category
message           display_order     image_url
created_at                          demo_link
                                    repo_link
experience                          tags (jsonb)
──────────        blog_posts        featured
id (PK)           ──────────        created_at
title             id (PK)
company           title
location          excerpt
period_start      content
period_end        author
employment_type   published_date
description       read_time
achievements      category
technologies      tags (jsonb)
icon              featured
display_order     created_at
                  updated_at
```

### 2.2 Table Definitions

#### 2.2.1 `contacts` Table
Stores contact form submissions from portfolio visitors.

| Column | Type | Constraints |
|--------|------|-------------|
| `id` | SERIAL | PRIMARY KEY |
| `name` | VARCHAR(255) | NOT NULL |
| `email` | VARCHAR(255) | NOT NULL, CHECK (email ~* format) |
| `subject` | VARCHAR(255) | NOT NULL |
| `message` | TEXT | NOT NULL |
| `created_at` | TIMESTAMPTZ | DEFAULT NOW() |

#### 2.2.2 `skills` Table
Stores the portfolio owner's technical skills, grouped by category.

| Column | Type | Constraints |
|--------|------|-------------|
| `id` | SERIAL | PRIMARY KEY |
| `category` | VARCHAR(100) | NOT NULL |
| `name` | VARCHAR(100) | NOT NULL |
| `proficiency_level` | VARCHAR(50) | NOT NULL — one of: Beginner, Intermediate, Advanced, Expert |
| `display_order` | INTEGER | DEFAULT 0 |

#### 2.2.3 `projects` Table
Stores portfolio projects with links, tags, and a featured flag.

| Column | Type | Constraints |
|--------|------|-------------|
| `id` | SERIAL | PRIMARY KEY |
| `title` | VARCHAR(255) | NOT NULL |
| `description` | TEXT | NOT NULL |
| `category` | VARCHAR(100) | |
| `image_url` | VARCHAR(500) | |
| `demo_link` | VARCHAR(500) | |
| `repo_link` | VARCHAR(500) | |
| `tags` | JSONB | DEFAULT '[]' |
| `featured` | BOOLEAN | DEFAULT false |
| `created_at` | TIMESTAMPTZ | DEFAULT NOW() |

#### 2.2.4 `experience` Table
Stores professional work experience entries.

| Column | Type | Constraints |
|--------|------|-------------|
| `id` | SERIAL | PRIMARY KEY |
| `title` | VARCHAR(255) | NOT NULL |
| `company` | VARCHAR(255) | NOT NULL |
| `location` | VARCHAR(255) | |
| `period_start` | DATE | NOT NULL |
| `period_end` | DATE | NULLABLE (null = current position) |
| `employment_type` | VARCHAR(50) | e.g., Full-time, Part-time, Contract |
| `description` | TEXT | |
| `achievements` | JSONB | DEFAULT '[]' |
| `technologies` | JSONB | DEFAULT '[]' |
| `icon` | VARCHAR(100) | |
| `display_order` | INTEGER | DEFAULT 0 |

#### 2.2.5 `blog_posts` Table
Stores blog articles with full content, metadata, and pagination support.

| Column | Type | Constraints |
|--------|------|-------------|
| `id` | SERIAL | PRIMARY KEY |
| `title` | VARCHAR(255) | NOT NULL |
| `excerpt` | TEXT | |
| `content` | TEXT | NOT NULL |
| `author` | VARCHAR(255) | NOT NULL |
| `published_date` | DATE | DEFAULT CURRENT_DATE |
| `read_time` | VARCHAR(50) | e.g., "5 min read" |
| `category` | VARCHAR(100) | |
| `tags` | JSONB | DEFAULT '[]' |
| `featured` | BOOLEAN | DEFAULT false |
| `created_at` | TIMESTAMPTZ | DEFAULT NOW() |
| `updated_at` | TIMESTAMPTZ | DEFAULT NOW(), auto-updated via trigger |

### 2.3 Indexes

```sql
-- Contacts: sort by creation time
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);

-- Skills: grouped & ordered display
CREATE INDEX idx_skills_category ON skills(category);
CREATE INDEX idx_skills_display_order ON skills(display_order);

-- Projects: featured filter & sort
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_projects_created_at ON projects(created_at DESC);

-- Experience: ordered display
CREATE INDEX idx_experience_display_order ON experience(display_order);
CREATE INDEX idx_experience_period_start ON experience(period_start DESC);

-- Blog: search, category filter, featured, sort
CREATE INDEX idx_blog_category ON blog_posts(category);
CREATE INDEX idx_blog_featured ON blog_posts(featured);
CREATE INDEX idx_blog_published_date ON blog_posts(published_date DESC);
```

---

## 3. API Design

### 3.1 Base URL & Standard Response Format

**Base URL:** `http://localhost:5000`

**Success Response:**
```json
{
  "success": true,
  "data": {},
  "message": "Optional message"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Human-readable error message",
  "details": {}
}
```

### 3.2 Endpoint Reference

#### Contact Endpoints

| Method | Path | Description | Status Codes |
|--------|------|-------------|--------------|
| `POST` | `/api/contact` | Submit a new contact message | 201, 400, 500 |
| `GET` | `/api/contact` | Retrieve all contact messages | 200, 500 |

**POST /api/contact — Request Body:**
```json
{
  "name": "Tsedey Alemu",
  "email": "tsedey@example.com",
  "subject": "Collaboration Inquiry",
  "message": "Hi, I'd love to work together..."
}
```

#### Skills Endpoints

| Method | Path | Description | Status Codes |
|--------|------|-------------|--------------|
| `GET` | `/api/skills` | Get all skills ordered by category & display_order | 200, 500 |

#### Projects Endpoints

| Method | Path | Description | Status Codes |
|--------|------|-------------|--------------|
| `GET` | `/api/projects` | Get all projects (supports `?featured=true`) | 200, 500 |
| `GET` | `/api/projects/:id` | Get a single project by ID | 200, 404, 500 |

#### Experience Endpoints

| Method | Path | Description | Status Codes |
|--------|------|-------------|--------------|
| `GET` | `/api/experience` | Get all experience entries | 200, 500 |

#### Blog Endpoints

| Method | Path | Description | Status Codes |
|--------|------|-------------|--------------|
| `GET` | `/api/blog` | Get blog posts with search/filter/pagination | 200, 500 |
| `GET` | `/api/blog/featured` | Get featured blog posts | 200, 500 |
| `GET` | `/api/blog/:id` | Get a single blog post by ID | 200, 404, 500 |

**GET /api/blog — Query Parameters:**

| Param | Type | Description | Example |
|-------|------|-------------|---------|
| `search` | string | Full-text search on title, excerpt, content | `?search=react` |
| `category` | string | Filter by category | `?category=Design` |
| `page` | integer | Page number (default: 1) | `?page=2` |
| `limit` | integer | Items per page (default: 10) | `?limit=5` |

**Paginated Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "total": 42,
    "page": 1,
    "limit": 10,
    "totalPages": 5
  }
}
```

### 3.3 HTTP Status Code Usage

| Code | Meaning | When Used |
|------|---------|-----------|
| `200` | OK | Successful GET requests |
| `201` | Created | Successful POST (new resource created) |
| `400` | Bad Request | Validation errors (missing/invalid fields) |
| `404` | Not Found | Resource with given ID does not exist |
| `500` | Internal Server Error | Unexpected database or server errors |

---

## 4. Database Connection Design

### 4.1 Connection Pool (`db.js`)

```
┌──────────────────────────────────────────────────┐
│              pg.Pool (Connection Pool)            │
│                                                  │
│   max: 10 connections                            │
│   connectionString: process.env.DATABASE_URL     │
│   ssl: false in development                      │
│        { rejectUnauthorized: false } in prod     │
└──────────────────────────────────────────────────┘
```

- Uses `pg.Pool` for connection reuse and performance
- `DATABASE_URL` format: `postgres://user:password@host:port/dbname`
- Pool events: `connect` logs success, `error` logs and exits process

### 4.2 Environment Variables

```env
DATABASE_URL=postgres://postgres:2124newpassword@localhost:5432/portfolio
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

> **Security Note:** The `.env` file must never be committed to version control. Add it to `.gitignore`.

---

## 5. Security Design

### 5.1 SQL Injection Prevention
All database queries use **parameterized queries** via the `pg` library:
```js
// ✅ Safe — parameterized
pool.query('SELECT * FROM contacts WHERE id = $1', [id]);

// ❌ Unsafe — string concatenation (never used)
pool.query(`SELECT * FROM contacts WHERE id = ${id}`);
```

### 5.2 Input Validation
- All required fields validated before database insertion
- Email format validated with regex or `express-validator`
- Unknown fields are ignored (not passed to queries)

### 5.3 CORS Configuration
- CORS middleware enabled via the `cors` package
- In production, restricted to `FRONTEND_URL` origin only:
```js
app.use(cors({ origin: process.env.FRONTEND_URL }));
```

### 5.4 Error Messages
- Database errors are never returned raw to the client
- Generic `"Internal server error"` returned on 500s
- Detailed errors logged server-side only

---

## 6. Data Flow Diagrams

### 6.1 Contact Form Submission
```
Visitor fills form
      │
      ▼
React Frontend sends POST /api/contact
      │
      ▼
Express validates { name, email, subject, message }
      │
   ┌──┴──────────────────────┐
   │ Valid?                  │
   Yes                       No
   │                         │
   ▼                         ▼
INSERT into contacts     Return 400
   │                    { success: false, error: "..." }
   ▼
Return 201
{ success: true, data: { id, name, ... } }
```

### 6.2 Blog Post Fetch with Pagination
```
React Frontend sends GET /api/blog?page=2&limit=5&category=Design
      │
      ▼
Express parses query params
      │
      ▼
Dynamic SQL query built with category filter + LIMIT + OFFSET
      │
      ▼
pg Pool executes COUNT query + data query
      │
      ▼
Return 200
{
  success: true,
  data: [...5 posts...],
  pagination: { total, page, limit, totalPages }
}
```

---

## 7. Migration Strategy

### 7.1 Migration Files

| File | Purpose |
|------|---------|
| `migrations/001_create_tables.sql` | Creates all 5 tables with constraints and indexes |
| `migrations/002_seed_data.sql` | Inserts initial sample data for development/testing |

### 7.2 Running Migrations

```bash
# Step 1: Create the database (first time only)
psql -U postgres -c "CREATE DATABASE portfolio;"

# Step 2: Run schema migration
psql -U postgres -d portfolio -f migrations/001_create_tables.sql

# Step 3: Run seed data
psql -U postgres -d portfolio -f migrations/002_seed_data.sql
```

### 7.3 blog_posts `updated_at` Trigger

To auto-update `updated_at` on row modification:
```sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

---

## 8. Future Enhancements (Out of Scope for v1)

| Feature | Notes |
|---------|-------|
| Authentication | JWT-based admin auth for POST/PUT/DELETE |
| Rate Limiting | `express-rate-limit` to prevent abuse |
| File Uploads | Multer + cloud storage for project images |
| Email Notifications | Nodemailer on contact form submission |
| Caching | Redis for frequently-read endpoints |
| Full-text Search | PostgreSQL `tsvector` / `tsquery` for blog |
| Admin Dashboard UI | React-based admin panel |