# Seat of God Ministry Website

A modern, responsive church website built with React and Node.js, inspired by top church websites in Nigeria. This website features a beautiful design, smooth animations, and all the essential features a church needs to connect with its community.

## Features

### Frontend (React)
- **Modern Design**: Beautiful, responsive design with smooth animations
- **Homepage**: Hero section, welcome message, and key features showcase
- **About Page**: Church history, beliefs, and leadership information
- **Sermons**: Video/audio streaming with filtering and search capabilities
- **Events**: Interactive calendar and event management
- **Contact**: Contact form with validation and location information
- **Donations**: Secure donation portal with multiple payment options
- **Responsive**: Mobile-first design that works on all devices

### Backend (Node.js)
- **RESTful API**: Clean API endpoints for all features
- **Database Integration**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based admin authentication
- **File Uploads**: Support for sermon videos and event images
- **Email Integration**: Contact form email notifications
- **Payment Processing**: Stripe integration for donations

## Technology Stack

### Frontend
- React 18
- React Router DOM
- Styled Components
- Framer Motion (animations)
- React Hook Form
- React Toastify
- React Player
- React Calendar
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Multer
- Nodemailer
- Stripe

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd church-website
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install all dependencies (root, server, and client)
npm run install-all
```

### 3. Environment Setup
Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/church-website
JWT_SECRET=your_jwt_secret_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

### 4. Start the Application
```bash
# Start both frontend and backend
npm run dev

# Or start them separately:
# Backend only
npm run server

# Frontend only
npm run client
```

### 5. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Project Structure

```
church-website/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── index.js
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## API Endpoints

### Sermons
- `GET /api/sermons` - Get all sermons
- `GET /api/sermons/:id` - Get single sermon
- `POST /api/sermons` - Create sermon (admin)
- `PUT /api/sermons/:id` - Update sermon (admin)
- `DELETE /api/sermons/:id` - Delete sermon (admin)

### Events
- `GET /api/events` - Get all events
- `GET /api/events/upcoming` - Get upcoming events
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create event (admin)
- `PUT /api/events/:id` - Update event (admin)
- `DELETE /api/events/:id` - Delete event (admin)

### Contact
- `POST /api/contact` - Submit contact form

### Donations
- `POST /api/donations/create-payment-intent` - Create payment intent
- `GET /api/donations/stats` - Get donation statistics (admin)

### Admin
- `POST /api/admin/login` - Admin login
- `GET /api/admin/dashboard` - Admin dashboard (protected)

## Customization

### Colors and Theme
The website uses a custom color scheme with CSS variables. You can easily customize the colors by modifying the styled-components in each component.

### Content
- Update church information in the respective page components
- Add your own images by replacing the placeholder URLs
- Modify the mock data in the components to match your content

### Styling
- All styling is done with Styled Components
- Global styles are in `client/src/index.css`
- Each component has its own styled components

## Deployment

### Frontend (React)
1. Build the production version:
   ```bash
   cd client
   npm run build
   ```

2. Deploy the `build` folder to your hosting service (Netlify, Vercel, etc.)

### Backend (Node.js)
1. Set up environment variables on your server
2. Install dependencies: `npm install`
3. Start the server: `npm start`

### Database
- Set up MongoDB Atlas or use a local MongoDB instance
- Update the `MONGODB_URI` in your environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact us at info@seatofgodministry.ng

---

**Built with ❤️ for the church community**
