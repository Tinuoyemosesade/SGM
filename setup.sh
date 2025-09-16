#!/bin/bash

echo "🏗️  Setting up Grace Community Church Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"
echo ""

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install server dependencies
echo "📦 Installing server dependencies..."
cd server
npm install
cd ..

# Install client dependencies
echo "📦 Installing client dependencies..."
cd client
npm install
cd ..

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the development server:"
echo "  npm run dev"
echo ""
echo "This will start both the frontend (http://localhost:3000) and backend (http://localhost:5000)"
echo ""
echo "Don't forget to:"
echo "1. Set up your MongoDB database"
echo "2. Create a .env file in the server directory with your configuration"
echo "3. Update the content to match your church's information"
echo ""
echo "Happy coding! 🙏"
