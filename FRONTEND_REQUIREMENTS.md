# AnimeVerse Frontend Requirements

## System Requirements
- Node.js 18.0 or higher
- npm 8.0 or higher (or yarn 1.22+)
- Modern web browser with ES6+ support

## Dependencies

### Production Dependencies
```bash
npm install next@^14.0.0                    # React framework with SSR/SSG
npm install react@^18.2.0                   # React library
npm install react-dom@^18.2.0               # React DOM renderer
npm install gsap@^3.12.2                    # Animation library for UI effects
npm install axios@^1.5.0                    # HTTP client for API requests
npm install swr@^2.2.0                      # Data fetching library with caching
npm install animejs@^3.2.1                  # Lightweight animation library
npm install @stripe/stripe-js@^2.2.0        # Stripe payment integration
npm install three@^0.161.0                  # 3D graphics library for backgrounds
```

### Development Dependencies
```bash
npm install --save-dev eslint@^8.50.0                # JavaScript linting
npm install --save-dev eslint-config-next@^14.0.0    # Next.js ESLint configuration
```

## Quick Installation

### Option 1: Install all dependencies at once
```bash
cd frontend
npm install
```

### Option 2: Install dependencies individually
```bash
cd frontend

# Production dependencies
npm install next react react-dom gsap axios swr animejs @stripe/stripe-js three

# Development dependencies
npm install --save-dev eslint eslint-config-next
```

## Environment Variables Required
Create a `.env.local` file in the frontend directory with:
```env
NEXT_PUBLIC_API_URL=http://localhost:5001/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

## Scripts Available
```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint for code quality
```

## Package Descriptions

- **next**: React framework providing SSR, SSG, routing, and optimization
- **react**: Core React library for building user interfaces
- **react-dom**: React DOM renderer for web applications
- **gsap**: Professional-grade animation library for smooth UI animations
- **axios**: Promise-based HTTP client for backend API communication
- **swr**: Data fetching with caching, revalidation, and error handling
- **animejs**: Lightweight animation library for entrance effects
- **@stripe/stripe-js**: Official Stripe SDK for payment processing
- **three**: 3D graphics library for animated backgrounds and effects
- **eslint**: Code linting tool for maintaining code quality
- **eslint-config-next**: Next.js specific ESLint rules and configuration

## File Structure Requirements
The frontend expects these key directories:
```
frontend/
├── pages/                  # Next.js pages (routing)
├── src/
│   ├── components/        # Reusable React components
│   ├── contexts/          # React context providers
│   ├── hooks/             # Custom React hooks
│   └── theme/             # Theme tokens and styling
├── public/                # Static assets
└── styles/                # Global styles
```

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development Notes
- Uses Next.js 14 with App Router disabled (Pages Router)
- Supports both client-side and server-side rendering
- Includes GSAP animations for enhanced user experience
- Integrates with Three.js for 3D background effects
- Uses SWR for efficient data fetching and caching