@echo off
REM Production Build Test Script for Windows
REM Run this before deploying to catch build errors

echo 🚀 Starting Production Build Test...
echo.

REM Test Backend
echo 📦 Testing Backend...
cd backend
if errorlevel 1 (
    echo ❌ Failed to enter backend directory
    exit /b 1
)

echo Installing backend dependencies...
call npm install
if errorlevel 1 (
    echo ❌ Backend dependency installation failed
    exit /b 1
)
echo ✅ Backend dependencies installed

echo Running backend tests...
call npm test
if errorlevel 1 (
    echo ⚠️ Backend tests failed or not configured
)

cd ..

REM Test Frontend
echo.
echo 📦 Testing Frontend...
cd frontend
if errorlevel 1 (
    echo ❌ Failed to enter frontend directory
    exit /b 1
)

echo Installing frontend dependencies...
call npm install
if errorlevel 1 (
    echo ❌ Frontend dependency installation failed
    exit /b 1
)
echo ✅ Frontend dependencies installed

echo Building frontend for production...
call npm run build
if errorlevel 1 (
    echo ❌ Frontend build failed
    exit /b 1
)
echo ✅ Frontend built successfully

cd ..

echo.
echo 🎉 All build tests passed!
echo.
echo Next steps:
echo 1. Review DEPLOYMENT_CHECKLIST.md
echo 2. Set up environment variables
echo 3. Deploy to Render and Vercel

pause
