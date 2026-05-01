# Pre-Deployment Checklist

## ✅ Backend Preparation

- [ ] Update `backend/.env.production` with production values
- [ ] Set strong JWT_SECRET (minimum 32 characters)
- [ ] Configure MongoDB Atlas:
  - [ ] Whitelist IP: `0.0.0.0/0` (or specific Render IPs)
  - [ ] Create database user with read/write permissions
  - [ ] Test connection string
- [ ] Update CORS origins in `backend/server.js` with production frontend URL
- [ ] Set production Clerk API keys
- [ ] Configure email service (Gmail App Password or SMTP)
- [ ] Test all API endpoints locally

## ✅ Frontend Preparation

- [ ] Update `frontend/.env.production` with:
  - [ ] `NEXT_PUBLIC_API_URL` = your backend URL
  - [ ] Production Clerk keys
- [ ] Test production build locally:
  ```bash
  cd frontend
  npm run build
  npm start
  ```
- [ ] Verify all pages load without errors
- [ ] Check browser console for errors
- [ ] Test responsive design on mobile

## ✅ Git Repository Setup

- [ ] Create GitHub repository
- [ ] Add `.gitignore` (already exists)
- [ ] Ensure `.env` files are NOT committed
- [ ] Push code to GitHub:
  ```bash
  git init
  git add .
  git commit -m "Initial commit - ready for deployment"
  git branch -M main
  git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
  git push -u origin main
  ```

## ✅ Backend Deployment (Render.com)

1. **Sign up at render.com**
   - [ ] Create account
   - [ ] Connect GitHub

2. **Create Web Service**
   - [ ] Click "New +" → "Web Service"
   - [ ] Select your repository
   - [ ] Configure:
     - Name: `aniverse-backend`
     - Root Directory: `backend`
     - Environment: `Node`
     - Build Command: `npm install`
     - Start Command: `node server.js`
     - Instance Type: `Free`

3. **Add Environment Variables**
   Copy from `backend/.env.production`:
   - [ ] MONGODB_URI
   - [ ] JWT_SECRET
   - [ ] NODE_ENV=production
   - [ ] PORT=5001 (or leave empty, Render sets it)
   - [ ] CLERK_SECRET_KEY
   - [ ] NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
   - [ ] EMAIL_SERVICE
   - [ ] ADMIN_EMAIL
   - [ ] ADMIN_EMAIL_PASSWORD
   - [ ] FRONTEND_URL (your Vercel URL)

4. **Deploy**
   - [ ] Click "Create Web Service"
   - [ ] Wait for build (5-10 minutes)
   - [ ] Check logs for errors
   - [ ] Test health endpoint: `https://your-app.onrender.com/api/health`
   - [ ] Copy deployed URL

## ✅ Frontend Deployment (Vercel)

1. **Sign up at vercel.com**
   - [ ] Create account with GitHub
   - [ ] Import repository

2. **Configure Project**
   - [ ] Framework: Next.js (auto-detected)
   - [ ] Root Directory: `frontend`
   - [ ] Build Command: `npm run build` (default)
   - [ ] Output Directory: `.next` (default)

3. **Add Environment Variables**
   - [ ] `NEXT_PUBLIC_API_URL` = `https://your-backend.onrender.com/api`
   - [ ] `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - [ ] `CLERK_SECRET_KEY`
   - [ ] `NODE_ENV` = `production`

4. **Deploy**
   - [ ] Click "Deploy"
   - [ ] Wait for build (3-5 minutes)
   - [ ] Copy Vercel URL

## ✅ Post-Deployment Configuration

1. **Update Backend CORS**
   - [ ] Add Vercel URL to `allowedOrigins` in `backend/server.js`
   - [ ] Set `FRONTEND_URL` env variable in Render
   - [ ] Redeploy backend

2. **Test Production Site**
   - [ ] Visit Vercel URL
   - [ ] Test authentication (signup/login)
   - [ ] Browse anime catalog
   - [ ] Test search functionality
   - [ ] Check recommendations page
   - [ ] Verify news page loads
   - [ ] Test on mobile device

3. **Monitor for Errors**
   - [ ] Check Vercel logs
   - [ ] Check Render logs
   - [ ] Monitor MongoDB Atlas metrics
   - [ ] Test all critical features

## ✅ Optional Enhancements

- [ ] Set up custom domain in Vercel
- [ ] Enable Vercel Analytics
- [ ] Set up error tracking (Sentry)
- [ ] Configure CDN for static assets
- [ ] Set up database backups in MongoDB Atlas
- [ ] Enable 2FA on all service accounts
- [ ] Document API endpoints

## 🚨 Troubleshooting Common Issues

### Build Failures
- Check Node version (use 18.x)
- Verify all dependencies in package.json
- Review build logs

### CORS Errors
- Ensure FRONTEND_URL is set in backend env
- Check allowedOrigins array
- Verify Vercel URL is added

### Database Connection
- Whitelist 0.0.0.0/0 in MongoDB Atlas
- Check connection string format
- Verify database user permissions

### API Not Responding
- Check Render service is running
- Verify environment variables are set
- Check health endpoint

## 📝 Important Notes

1. **Free Tier Limitations:**
   - Render: Service spins down after 15 min inactivity
   - First request after sleep: 30-50 seconds
   - Consider paid tier for production

2. **Security:**
   - Never commit .env files
   - Use strong JWT secrets
   - Keep API keys secure
   - Enable rate limiting for production

3. **Performance:**
   - Frontend cached by Vercel CDN
   - Backend may need warming up (free tier)
   - Consider Redis for caching (paid)

## 📞 Support Resources

- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- MongoDB Atlas: https://docs.atlas.mongodb.com
- Next.js: https://nextjs.org/docs
- Express: https://expressjs.com

---

**Ready to deploy? Follow this checklist step by step!**
