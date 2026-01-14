# Deployment Guide for Aniverse

## Prerequisites

Before deploying, ensure you have:
1. A GitHub account
2. A Vercel account (for frontend)
3. A Render/Railway/Heroku account (for backend)
4. MongoDB Atlas cluster set up
5. Production Clerk API keys

## Step 1: Prepare Your Repository

1. Create a new GitHub repository
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit for deployment"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Step 2: Deploy Backend (Render.com - Free Tier)

1. Go to https://render.com and sign up/login
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: aniverse-backend
   - **Root Directory**: backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Free

5. Add Environment Variables (click "Environment" tab):
   ```
   MONGODB_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_strong_secret_key
   NODE_ENV=production
   PORT=5001
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   EMAIL_SERVICE=gmail
   ADMIN_EMAIL=your_email
   ADMIN_EMAIL_PASSWORD=your_app_password
   ```

6. Click "Create Web Service"
7. Wait for deployment (5-10 minutes)
8. Copy the deployed URL (e.g., `https://aniverse-backend.onrender.com`)

## Step 3: Deploy Frontend (Vercel - Free Tier)

1. Go to https://vercel.com and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: frontend
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

5. Add Environment Variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com/api
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NODE_ENV=production
   ```

6. Click "Deploy"
7. Wait for deployment (3-5 minutes)
8. Your app will be live at `https://your-app.vercel.app`

## Step 4: Update Backend CORS Settings

After frontend is deployed, update backend/server.js:

```javascript
const allowedOrigins = [
  'http://localhost:3000',
  'https://your-app.vercel.app',  // Add your Vercel URL
];
```

Redeploy backend on Render.

## Step 5: Test Your Deployment

1. Visit your Vercel URL
2. Test key features:
   - Homepage loads
   - Authentication works
   - Anime browsing works
   - Search functionality
   - Recommendations page
   - News page

## Alternative Backend Hosting Options

### Railway.app
1. Go to https://railway.app
2. Create new project from GitHub
3. Select backend directory
4. Add environment variables
5. Deploy

### Heroku (Paid)
1. Install Heroku CLI
2. `heroku login`
3. `heroku create aniverse-backend`
4. `git subtree push --prefix backend heroku main`

## Troubleshooting

### Build Errors
- Check build logs in Vercel/Render dashboard
- Ensure all dependencies are in package.json
- Verify environment variables are set correctly

### API Connection Issues
- Check NEXT_PUBLIC_API_URL is correct
- Verify CORS settings in backend
- Check backend is running (visit backend URL/health)

### Database Connection
- Verify MongoDB URI is correct
- Whitelist Render IP (0.0.0.0/0) in MongoDB Atlas
- Check network access settings

## Post-Deployment

1. Set up custom domain (optional)
2. Enable SSL (automatic on Vercel/Render)
3. Set up monitoring (Vercel Analytics, Render Metrics)
4. Configure CDN for assets (optional)
5. Set up error tracking (Sentry, LogRocket)

## Continuous Deployment

Both Vercel and Render support automatic deployments:
- Push to main branch → Auto deploy
- Pull requests → Preview deployments

## Support

For issues, check:
- Vercel docs: https://vercel.com/docs
- Render docs: https://render.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com
