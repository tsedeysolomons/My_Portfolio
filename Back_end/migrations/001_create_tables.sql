-- Portfolio Database Schema
-- Run this file to create all necessary tables

-- Drop tables if they exist (for clean setup)
DROP TABLE IF EXISTS contacts CASCADE;
DROP TABLE IF EXISTS skills CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS experience CASCADE;
DROP TABLE IF EXISTS blog_posts CASCADE;

-- 1. Contacts Table
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Skills Table
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    proficiency_level VARCHAR(50),
    display_order INTEGER DEFAULT 0
);

-- 3. Projects Table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100),
    image_url VARCHAR(500),
    demo_link VARCHAR(500),
    repo_link VARCHAR(500),
    tags JSONB DEFAULT '[]',
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Experience Table
CREATE TABLE experience (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    period_start DATE,
    period_end DATE,
    employment_type VARCHAR(50),
    description TEXT,
    achievements JSONB DEFAULT '[]',
    technologies JSONB DEFAULT '[]',
    icon VARCHAR(100),
    display_order INTEGER DEFAULT 0
);

-- 5. Blog Posts Table
CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    author VARCHAR(255) DEFAULT 'Tsedey Solomon',
    published_date DATE DEFAULT CURRENT_DATE,
    read_time VARCHAR(50),
    category VARCHAR(100),
    tags JSONB DEFAULT '[]',
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX idx_skills_category ON skills(category);
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX idx_experience_display_order ON experience(display_order);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_featured ON blog_posts(featured);
CREATE INDEX idx_blog_posts_published_date ON blog_posts(published_date DESC);

-- Create trigger to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
