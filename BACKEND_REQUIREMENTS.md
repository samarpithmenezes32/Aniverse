# AnimeVerse Backend Requirements

## System Requirements
- Node.js 18.0 or higher
- npm 8.0 or higher (or yarn 1.22+)
- MongoDB Atlas account or local MongoDB installation

## Dependencies

### Production Dependencies
```bash
npm install axios@^1.12.2           # HTTP client for making API requests
npm install bcryptjs@^2.4.3         # Password hashing library
npm install cors@^2.8.5             # Cross-Origin Resource Sharing middleware
npm install dotenv@^16.3.1          # Environment variables loader
npm install express@^4.18.2         # Web application framework
npm install google-auth-library@^9.15.1   # Google OAuth authentication
npm install jsonwebtoken@^9.0.2     # JWT token generation and verification
npm install mongoose@^7.5.0         # MongoDB object modeling
npm install nodemailer@^7.0.6       # Email sending library
npm install stripe@^14.0.0          # Stripe payment processing
```

### Development Dependencies
```bash
npm install --save-dev nodemon@^3.0.1   # Auto-restart server during development
```

## Quick Installation

### Option 1: Install all dependencies at once
```bash
cd backend
npm install
```

### Option 2: Install dependencies individually
```bash
cd backend

# Production dependencies
npm install axios bcryptjs cors dotenv express google-auth-library jsonwebtoken mongoose nodemailer stripe

# Development dependencies  
npm install --save-dev nodemon
```

## Environment Variables Required
Create a `.env` file in the backend directory with:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
EMAIL_USER=your_email_for_notifications
EMAIL_PASS=your_email_password_or_app_password
ADMIN_EMAIL=admin_notification_email
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

## Scripts Available
```bash
npm start          # Start production server
npm run dev        # Start development server with auto-reload
npm run seed       # Seed database with sample data
npm test           # Run tests (currently not implemented)
```

## Package Descriptions

- **axios**: HTTP client for external API calls (Jikan, AniList)
- **bcryptjs**: Secure password hashing for user authentication
- **cors**: Enable cross-origin requests from frontend
- **dotenv**: Load environment variables from .env file
- **express**: Main web framework for REST API
- **google-auth-library**: Handle Google OAuth authentication
- **jsonwebtoken**: Create and verify JWT tokens for session management
- **mongoose**: MongoDB ODM for database operations
- **nodemailer**: Send email notifications to admins
- **stripe**: Payment processing integration
- **nodemon**: Development tool for automatic server restart