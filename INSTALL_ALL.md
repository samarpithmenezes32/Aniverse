# Install All Dependencies - One Command

## Backend Dependencies Installation
```bash
cd backend && npm install axios@^1.12.2 bcryptjs@^2.4.3 cors@^2.8.5 dotenv@^16.3.1 express@^4.18.2 google-auth-library@^9.15.1 jsonwebtoken@^9.0.2 mongoose@^7.5.0 nodemailer@^7.0.6 stripe@^14.0.0 && npm install --save-dev nodemon@^3.0.1
```

## Frontend Dependencies Installation  
```bash
cd frontend && npm install next@^14.0.0 react@^18.2.0 react-dom@^18.2.0 gsap@^3.12.2 axios@^1.5.0 swr@^2.2.0 animejs@^3.2.1 @stripe/stripe-js@^2.2.0 three@^0.161.0 && npm install --save-dev eslint@^8.50.0 eslint-config-next@^14.0.0
```

## Install Everything (Both Frontend & Backend)
```bash
cd backend && npm install && cd ../frontend && npm install
```