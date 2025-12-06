@echo off
echo.
echo 🚀 Anateck AI - Quick Start Script
echo ==================================
echo.

where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js 14+ first.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js found
node -v
echo.

echo 📦 Installing backend dependencies...
cd backend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Backend installation failed
    pause
    exit /b 1
)
echo ✅ Backend dependencies installed
echo.

if not exist .env (
    echo 📝 Creating backend .env file...
    copy .env.example .env
    echo ✅ .env created. Edit it to configure email (optional)
)

echo 📦 Installing frontend dependencies...
cd ..\frontend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Frontend installation failed
    pause
    exit /b 1
)
echo ✅ Frontend dependencies installed
echo.

echo 🎉 Setup Complete!
echo ====================
echo.
echo To start the application:
echo.
echo 1. Start Backend (in one terminal):
echo    cd backend ^&^& npm start
echo.
echo 2. Start Frontend (in another terminal):
echo    cd frontend ^&^& npm start
echo.
echo 3. Access:
echo    Website: http://localhost:3000
echo    Admin: http://localhost:3000/admin/login
echo    (Username: admin, Password: Admin@123)
echo.
echo 📖 Read README.md for detailed instructions
echo 🚀 Read DEPLOYMENT_GUIDE.md for hosting on Vercel/Railway (FREE)
echo.
pause
