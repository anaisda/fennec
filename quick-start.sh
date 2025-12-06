#!/bin/bash

echo "🚀 Anateck AI - Quick Start Script"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 14+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node -v)"
echo ""

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Backend installation failed"
    exit 1
fi
echo "✅ Backend dependencies installed"
echo ""

# Create .env if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating backend .env file..."
    cp .env.example .env
    echo "✅ .env created. Edit it to configure email (optional)"
fi

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd ../frontend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Frontend installation failed"
    exit 1
fi
echo "✅ Frontend dependencies installed"
echo ""

echo "🎉 Setup Complete!"
echo "===================="
echo ""
echo "To start the application:"
echo ""
echo "1. Start Backend (in one terminal):"
echo "   cd backend && npm start"
echo ""
echo "2. Start Frontend (in another terminal):"
echo "   cd frontend && npm start"
echo ""
echo "3. Access:"
echo "   Website: http://localhost:3000"
echo "   Admin: http://localhost:3000/admin/login"
echo "   (Username: admin, Password: Admin@123)"
echo ""
echo "📖 Read README.md for detailed instructions"
echo "🚀 Read DEPLOYMENT_GUIDE.md for hosting on Vercel/Railway (FREE)"
