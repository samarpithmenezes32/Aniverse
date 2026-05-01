# ⚡ Quick Deployment Reference Card

## 🎯 Deploy in 15 Minutes

### 1️⃣ Render Backend (5 min)
```
render.com → New Web Service
├─ Repository: Your GitHub repo
├─ Root: backend
├─ Build: npm install
├─ Start: node server.js
└─ Env Variables: Copy from backend/.env.production
```

### 2️⃣ Vercel Frontend (5 min)
```
vercel.com → Import Project
├─ Repository: Your GitHub repo
├─ Root: frontend
└─ Env Variables: Copy from frontend/.env.production
              Update NEXT_PUBLIC_API_URL with Render URL
```

### 3️⃣ Final Steps (5 min)
```
backend/server.js → Add Vercel URL to allowedOrigins
Render → Set FRONTEND_URL env variable
Render → Redeploy
Test → Visit Vercel URL
```

## 📦 Required Services

| Service | Purpose | Cost | Sign Up |
|---------|---------|------|---------|
| MongoDB Atlas | Database | Free | mongodb.com/atlas |
| Render.com | Backend Host | Free | render.com |
| Vercel | Frontend Host | Free | vercel.com |
| Clerk | Auth (optional) | Free tier | clerk.com |
| GitHub | Code hosting | Free | github.com |

## 🔑 Environment Variables Quick Copy

### Render (Backend)
```bash
MONGODB_URI=mongodb+srv://Aniverseadmin1:Aniverseadmin1@cluster0.se4ujga.mongodb.net/aniverse?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=a9f3c2d17e58b0a4c6d9e3f12b45a67890c1d2e3f4a5b6c7d8e9f00112233445
NODE_ENV=production
CLERK_SECRET_KEY=sk_test_H4zVwM86CtodcekqhKE3zr0oMKLz87T2RuFIOvAy6P
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2F1c2FsLXRyb3V0LTQ0LmNsZXJrLmFjY291bnRzLmRldiQ
EMAIL_SERVICE=gmail
ADMIN_EMAIL=szproduction447@gmail.com
ADMIN_EMAIL_PASSWORD=Szproduction@323
FRONTEND_URL=https://your-app.vercel.app
```

### Vercel (Frontend)
```bash
NEXT_PUBLIC_API_URL=https://guide2anime.onrender.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2F1c2FsLXRyb3V0LTQ0LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_H4zVwM86CtodcekqhKE3zr0oMKLz87T2RuFIOvAy6P
NODE_ENV=production
```

## ⚙️ MongoDB Atlas Quick Setup

1. **Create Cluster** → Free M0 tier
2. **Database Access** → Create user with password
3. **Network Access** → Add IP: `0.0.0.0/0`
4. **Connect** → Copy connection string
5. **Update** → Replace `<password>` and `<dbname>`

## 🚨 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| CORS Error | Add Vercel URL to backend CORS |
| DB Connection Failed | Check MongoDB IP whitelist |
| Build Failed | Check Node version 18.x |
| Backend Sleeping | Free tier - wait 30s on first request |
| 404 on API | Check NEXT_PUBLIC_API_URL includes `/api` |

## 📱 Test Checklist

- [ ] Homepage loads
- [ ] Can sign up/login
- [ ] Browse anime works
- [ ] Search returns results
- [ ] Recommendations load
- [ ] News page shows content
- [ ] Mobile responsive

## 🔗 Important URLs After Deployment

```
Frontend: https://YOUR_APP.vercel.app
Backend:  https://YOUR_BACKEND.onrender.com
Health:   https://YOUR_BACKEND.onrender.com/api/health
DB Health: https://YOUR_BACKEND.onrender.com/api/health/db
```

## 💡 Pro Tips

1. **Keep backend warm:** Use UptimeRobot to ping `/api/health` every 5 min
2. **Monitor logs:** Check Vercel and Render dashboards regularly
3. **Test in incognito:** Clear cache issues
4. **Mobile test:** Use Chrome DevTools device emulation
5. **SSL auto:** Both Vercel and Render provide free SSL

## 📞 Quick Links

- **Render Dashboard:** https://dashboard.render.com
- **Vercel Dashboard:** https://vercel.com/dashboard
- **MongoDB Atlas:** https://cloud.mongodb.com
- **Clerk Dashboard:** https://dashboard.clerk.com

---

**Need detailed instructions? See `DEPLOYMENT_SUMMARY.md` or `DEPLOYMENT_CHECKLIST.md`**
