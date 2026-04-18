# Portfolio Backend Database - Requirements

## 1. Overview

Create a complete PostgreSQL database schema and Express.js API endpoints for the portfolio website, supporting contact messages, skills, projects, experience, and blog posts.

## 2. User Stories

### 2.1 As a portfolio owner
I want to store contact form submissions in a database so that I can review and respond to inquiries from visitors.

### 2.2 As a portfolio owner
I want to manage my skills, projects, experience, and blog posts in a database so that I can easily update my portfolio content without modifying code.

### 2.3 As a frontend developer
I want RESTful API endpoints that provide all portfolio data so that the React frontend can display dynamic content.

### 2.4 As a developer
I want proper database schema with relationships and constraints so that data integrity is maintained.

### 2.5 As a visitor
I want to submit contact forms, view projects, read blog posts, and see skills/experience so that I can learn about the portfolio owner and get in touch.

## 3. Acceptance Criteria

### 3.1 Database Schema

#### 3.1.1 Contact Table
- [ ] Table name: `contacts`
- [ ] Fields: id (serial primary key), name (varchar 255), email (varchar 255), subject (varchar 255), message (text), created_at (timestamp)
- [ ] Email field has validation format
- [ ] All fields except id and created_at are required

#### 3.1.2 Skills Table
- [ ] Table name: `skills`
- [ ] Fields: id (serial primary key), category (varchar 100), name (varchar 100), proficiency_level (varchar 50), display_order (integer)
- [ ] Category examples: "Frontend Development", "Backend Development", "Database", etc.
- [ ] Proficiency levels: "Beginner", "Intermediate", "Advanced", "Expert"

#### 3.1.3 Projects Table
- [ ] Table name: `projects`
- [ ] Fields: id (serial primary key), title (varchar 255), description (text), category (varchar 100), image_url (varchar 500), demo_link (varchar 500), repo_link (varchar 500), tags (jsonb), featured (boolean default false), created_at (timestamp)
- [ ] Tags stored as JSON array
- [ ] Featured flag for highlighting important projects

#### 3.1.4 Experience Table
- [ ] Table name: `experience`
- [ ] Fields: id (serial primary key), title (varchar 255), company (varchar 255), location (varchar 255), period_start (date), period_end (date nullable), employment_type (varchar 50), description (text), achievements (jsonb), technologies (jsonb), icon (varchar 100), display_order (integer)
- [ ] period_end nullable for current positions
- [ ] achievements and technologies stored as JSON arrays

#### 3.1.5 Blog Posts Table
- [ ] Table name: `blog_posts`
- [ ] Fields: id (serial primary key), title (varchar 255), excerpt (text), content (text), author (varchar 255), published_date (date), read_time (varchar 50), category (varchar 100), tags (jsonb), featured (boolean default false), created_at (timestamp), updated_at (timestamp)
- [ ] Tags stored as JSON array
- [ ] Featured flag for highlighting posts
- [ ] updated_at auto-updates on modification

### 3.2 API Endpoints

#### 3.2.1 Contact Endpoints
- [ ] POST /api/contact - Create new contact message
  - Request body: { name, email, subject, message }
  - Response: 201 Created with created contact object
  - Validation: all fields required, email format validated
- [ ] GET /api/contact - Get all contact messages (admin use)
  - Response: 200 OK with array of contacts

#### 3.2.2 Skills Endpoints
- [ ] GET /api/skills - Get all skills
  - Response: 200 OK with array of skills grouped by category
  - Ordered by display_order

#### 3.2.3 Projects Endpoints
- [ ] GET /api/projects - Get all projects
  - Query params: ?featured=true (optional filter)
  - Response: 200 OK with array of projects
  - Ordered by created_at descending
- [ ] GET /api/projects/:id - Get single project
  - Response: 200 OK with project object or 404 Not Found

#### 3.2.4 Experience Endpoints
- [ ] GET /api/experience - Get all experience entries
  - Response: 200 OK with array of experience
  - Ordered by display_order or period_start descending

#### 3.2.5 Blog Endpoints
- [ ] GET /api/blog - Get all blog posts
  - Query params: ?search=term, ?category=name, ?page=1, ?limit=10
  - Response: 200 OK with paginated blog posts
  - Includes total count for pagination
- [ ] GET /api/blog/:id - Get single blog post
  - Response: 200 OK with blog post object or 404 Not Found
- [ ] GET /api/blog/featured - Get featured blog posts
  - Response: 200 OK with array of featured posts

### 3.3 Database Connection
- [ ] PostgreSQL connection configured using environment variables
- [ ] Connection pool implemented for performance
- [ ] Database credentials stored in .env file
- [ ] Proper error handling for database connection failures

### 3.4 Data Validation
- [ ] Input validation for all POST/PUT endpoints
- [ ] Email format validation
- [ ] Required field validation
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (input sanitization)

### 3.5 Error Handling
- [ ] Consistent error response format: { error: "message", details: {} }
- [ ] Proper HTTP status codes (200, 201, 400, 404, 500)
- [ ] Database error handling with user-friendly messages
- [ ] Validation error messages returned to client

### 3.6 CORS Configuration
- [ ] CORS enabled for frontend origin
- [ ] Proper headers configured (Content-Type, Authorization)
- [ ] Preflight requests handled

### 3.7 Database Migrations
- [ ] SQL migration scripts created for all tables
- [ ] Seed data script for initial testing data
- [ ] Migration script to create database and tables

## 4. Technical Requirements

### 4.1 Technology Stack
- Node.js 18+
- Express.js 5.x
- PostgreSQL 14+
- pg (node-postgres) library
- dotenv for environment variables
- cors middleware
- express-validator for input validation

### 4.2 Environment Variables (.env)
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=portfolio_db
DB_USER=postgres
DB_PASSWORD=your_password
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 4.3 Database Schema SQL
- All tables use serial primary keys
- Timestamps use timezone-aware types
- JSON fields use jsonb for better performance
- Proper indexes on frequently queried fields

### 4.4 API Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Optional message"
}
```

Error format:
```json
{
  "success": false,
  "error": "Error message",
  "details": {}
}
```

## 5. Constraints

### 5.1 Performance
- Database queries should use connection pooling
- Indexes on frequently queried columns
- Pagination for large datasets (blog posts, projects)

### 5.2 Security
- No sensitive data exposed in API responses
- Environment variables for all credentials
- Input validation and sanitization
- Parameterized queries to prevent SQL injection

### 5.3 Compatibility
- API endpoints should work with existing frontend code
- Response formats match frontend expectations
- Typo in existing endpoint (/cotact) should be fixed to /contact

## 6. Out of Scope

- Authentication and authorization
- File upload for images (using URLs for now)
- Email sending for contact form notifications
- Admin dashboard UI
- Rate limiting
- Caching layer
- Full-text search

## 7. Dependencies

- PostgreSQL must be installed and running locally
- Node.js and npm installed
- Database user with create/read/write permissions

## 8. Success Metrics

- All 5 database tables created successfully
- All API endpoints return correct data
- Frontend can fetch and display data from all endpoints
- Contact form submissions saved to database
- No SQL injection vulnerabilities
- Proper error handling for all edge cases
