# Vercel Deployment Guide for Your Portfolio

## Overview
Your project has two parts:
- **Frontend**: React Router app (deployed to Vercel)
- **Backend**: Express.js API (can be deployed to Vercel or Railway/Render)

## Part 1: Deploy Frontend to Vercel

### Step 1: Prepare Your Frontend

1. **Create a `vercel.json` file** in the Frontend folder:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build/client",
  "framework": "react-router"
}
```

2. **Update Frontend/.env for production**:
```
VITE_SANITY_READ_TOKEN=your_token_here
```

### Step 2: Push to GitHub

1. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Portfolio with scroll animations"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. **Make sure both Frontend and Back_end folders are in the repo**

### Step 3: Deploy Frontend to Vercel

1. **Go to https://vercel.com**
2. **Sign up/Login** with GitHub
3. **Click "New Project"**
4. **Select your portfolio repository**
5. **Configure the project**:
   - **Framework Preset**: React Router
   - **Root Directory**: `Frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build/client`
   - **Install Command**: `npm install`

6. **Add Environment Variables**:
   - Click "Environment Variables"
   - Add: `VITE_SANITY_READ_TOKEN` = your_sanity_token
   - Add: `VITE_SANITY_PROJECT_ID` = n5ba2mep
   - Add: `VITE_SANITY_DATASET` = production

7. **Click "Deploy"**

✅ Your frontend will be live at: `https://your-project.vercel.app`

---

## Part 2: Deploy Backend to Vercel (Serverless Functions)

### Option A: Deploy Backend to Vercel (Recommended for small projects)

1. **Create `vercel.json` in Back_end folder**:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ],
  "env": {
    "DATABASE_URL": "@database_url",
    "EMAIL_USER": "@email_user",
    "EMAIL_PASS": "@email_pass",
    "EMAIL_TO": "@email_to",
    "EMAIL_HOST": "@email_host",
    "EMAIL_PORT": "@email_port",
    "NODE_ENV": "production"
  }
}
```

2. **Update Back_end/index.js** - Add this at the top:

```javascript
require('dotenv').config();
const express = require("express");
const cors = require("cors");
// ... rest of your code
```

3. **Deploy to Vercel**:
   - Go to Vercel dashboard
   - Click "New Project"
   - Select your repository
   - **Root Directory**: `Back_end`
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
   - **Install Command**: `npm install`

4. **Add Environment Variables in Vercel**:
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `EMAIL_USER` - tsedeys19@gmail.com
   - `EMAIL_PASS` - Your Gmail app password
   - `EMAIL_TO` - tsedeys19@gmail.com
   - `EMAIL_HOST` - smtp.gmail.com
   - `EMAIL_PORT` - 465
   - `FRONTEND_URL` - https://your-project.vercel.app

5. **Click Deploy**

✅ Your backend will be at: `https://your-backend.vercel.app`

---

## Part 3: Connect Frontend to Backend

### Update Frontend API URLs

1. **Create `Frontend/.env.production`**:

```
VITE_API_URL=https://your-backend.vercel.app
VITE_SANITY_READ_TOKEN=your_token
```

2. **Update all API calls in Frontend**:

In `Frontend/app/routes/Contact.tsx`:
```typescript
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const response = await fetch(`${API_URL}/api/contact`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

In `Frontend/app/routes/blog.tsx`:
```typescript
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

fetch(`${API_URL}/api/blog/featured`)
  .then((res) => res.json())
  .then((json) => setFeaturedPosts(json.data || []))
```

3. **Update Backend CORS** in `Back_end/index.js`:

```javascript
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://your-project.vercel.app"  // Add your Vercel URL
  ],
  methods: ["GET", "POST"],
  credentials: true
}));
```

---

## Part 4: Database Setup

### Option A: Use Vercel Postgres (Easiest)

1. **Go to Vercel Dashboard**
2. **Select your backend project**
3. **Go to Storage tab**
4. **Click "Create Database"**
5. **Select "Postgres"**
6. **Copy the connection string**
7. **Add to environment variables**: `DATABASE_URL`

### Option B: Use External Database (Railway, Render, etc.)

1. **Create account on Railway.app or Render.com**
2. **Create PostgreSQL database**
3. **Copy connection string**
4. **Add to Vercel environment variables**

---

## Part 5: Verify Deployment

### Test Frontend:
- Visit `https://your-project.vercel.app`
- Check if all pages load
- Test scroll animations
- Verify Sanity blog posts load

### Test Backend:
- Visit `https://your-backend.vercel.app`
- Should see: `{"message": "Portfolio Backend API is running!", "status": "OK"}`

### Test API Endpoints:
```bash
# Test contact form
curl -X POST https://your-backend.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'

# Test blog
curl https://your-backend.vercel.app/api/blog/featured
```

---

## Troubleshooting

### Frontend won't build:
- Check `npm run build` works locally
- Verify all environment variables are set
- Check for TypeScript errors: `npm run typecheck`

### Backend API not responding:
- Check environment variables in Vercel
- Verify database connection string
- Check logs in Vercel dashboard

### CORS errors:
- Add your Vercel URL to CORS origins in backend
- Redeploy backend after changes

### Email not sending:
- Verify Gmail app password is correct
- Check email credentials in Vercel env vars
- Verify 2FA is enabled on Gmail account

---

## Final Checklist

- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Vercel
- [ ] Environment variables set in both projects
- [ ] Database connected
- [ ] Frontend can call backend API
- [ ] Contact form sends emails
- [ ] Blog posts load from Sanity
- [ ] Scroll animations work
- [ ] Mobile responsive
- [ ] Custom domain configured (optional)

---

## Custom Domain (Optional)

1. **In Vercel Dashboard**:
   - Select your project
   - Go to Settings → Domains
   - Add your custom domain
   - Follow DNS instructions

2. **Update Backend CORS** with your custom domain

---

## Next Steps

1. Follow the steps above
2. Test everything thoroughly
3. Monitor Vercel logs for errors
4. Set up automatic deployments (Vercel does this by default)
5. Consider adding monitoring/analytics

Your portfolio will be live and accessible worldwide! 🚀
