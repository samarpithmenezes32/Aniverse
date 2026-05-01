# AnimeVerse Project Setup Guide

## Prerequisites
- Node.js 18.0 or higher
- npm 8.0 or higher
- Git
- MongoDB Atlas account (or local MongoDB)
- Google OAuth credentials
- Stripe account (for payments)

## Quick Setup Commands

### 1. Clone Repository
```bash
git clone https://github.com/samarpithmenezes32/Aniverse.git
cd Aniverse
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install all dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your actual credentials

# Start development server
npm run dev
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory (open new terminal)
cd frontend

# Install all dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your actual credentials

# Start development server
npm run dev
```

## Complete Dependency Installation

### Backend Dependencies (10 packages)
```bash
cd backend
npm install axios@^1.12.2 bcryptjs@^2.4.3 cors@^2.8.5 dotenv@^16.3.1 express@^4.18.2 google-auth-library@^9.15.1 jsonwebtoken@^9.0.2 mongoose@^7.5.0 nodemailer@^7.0.6 stripe@^14.0.0
npm install --save-dev nodemon@^3.0.1
```

### Frontend Dependencies (9 packages)
```bash
cd frontend
npm install next@^14.0.0 react@^18.2.0 react-dom@^18.2.0 gsap@^3.12.2 axios@^1.5.0 swr@^2.2.0 animejs@^3.2.1 @stripe/stripe-js@^2.2.0 three@^0.161.0
npm install --save-dev eslint@^8.50.0 eslint-config-next@^14.0.0
```

## Environment Configuration

### Backend (.env)
```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/aniverse

# Authentication
JWT_SECRET=your-super-secret-jwt-key

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@yoursite.com

# Stripe
STRIPE_SECRET_KEY=sk_test_your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5001/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
```

## Running the Application

### Development Mode
```bash
# Terminal 1 - Backend (runs on port 5001)
cd backend
npm run dev

# Terminal 2 - Frontend (runs on port 3000)
cd frontend
npm run dev
```

### Production Mode
```bash
# Backend
cd backend
npm start

# Frontend
cd frontend
npm run build
npm start
```

## Application URLs
- Frontend: http://localhost:3000
- Backend API: http://localhost:5001/api
- Admin Dashboard: http://localhost:3000/admin/dashboard

## Features Included
✅ Google OAuth Authentication  
✅ Email Notifications to Admin  
✅ User Verification System  
✅ Stripe Payment Integration  
✅ Anime Recommendations API  
✅ Admin Dashboard  
✅ Responsive UI with Animations  
✅ 3D Background Effects  

## Troubleshooting

### Common Issues
1. **Port already in use**: Change ports in package.json scripts
2. **MongoDB connection failed**: Check MONGODB_URI in .env
3. **Google OAuth not working**: Verify client ID and secret
4. **Email not sending**: Check EMAIL_USER and EMAIL_PASS
5. **Stripe errors**: Verify API keys are correct

### Dependency Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Additional Commands

### Database Seeding
```bash
cd backend
npm run seed
```

### Code Quality
```bash
cd frontend
npm run lint
```

### Build for Production
```bash
cd frontend
npm run build
```