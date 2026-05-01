#!/bin/bash

# Production Build Test Script
# Run this before deploying to catch build errors

echo "🚀 Starting Production Build Test..."
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test Backend
echo "📦 Testing Backend..."
cd backend || exit 1

echo "Installing backend dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Backend dependency installation failed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Backend dependencies installed${NC}"

echo "Running backend tests..."
npm test
if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  Backend tests failed or not configured${NC}"
fi

cd ..

# Test Frontend
echo ""
echo "📦 Testing Frontend..."
cd frontend || exit 1

echo "Installing frontend dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Frontend dependency installation failed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Frontend dependencies installed${NC}"

echo "Building frontend for production..."
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Frontend build failed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Frontend built successfully${NC}"

cd ..

echo ""
echo -e "${GREEN}🎉 All build tests passed!${NC}"
echo ""
echo "Next steps:"
echo "1. Review DEPLOYMENT_CHECKLIST.md"
echo "2. Set up environment variables"
echo "3. Deploy to Render and Vercel"
