# Fennec AI - Votre partenaire vers la transformation digitale

A complete, production-ready website for Fennec AI services company with backend, admin panel, and all legal pages.

## 🌟 Features

### Frontend
- **Modern React Application** with React Router
- **Professional Design** similar to BCG with Tailwind CSS
- **Fully Responsive** mobile-first design
- **SEO Optimized** with React Helmet
- **Cookie Consent** banner with proper compliance
- **Complete Pages**:
  - Home
  - Services (AI Development, Training, Consulting)
  - Industries (Healthcare, Retail, Manufacturing, Education, Government)
  - Training & Workshops
  - Case Studies
  - Blog
  - About Us
  - Contact (with working form)
  - Privacy Policy
  - Terms of Use
  - Cookie Policy
  - Admin Login & Dashboard

### Backend
- **Node.js/Express** REST API
- **SQLite Database** (portable and easy to deploy)
- **JWT Authentication** for admin
- **Email Notifications** (configurable)
- **Rate Limiting** for security
- **API Endpoints**:
  - Contact form submission
  - Newsletter subscription
  - Blog posts (CRUD)
  - Case studies (CRUD)
  - Admin authentication
  - Dashboard statistics

### Admin Panel
- Secure login with JWT
- Dashboard with statistics
- View all contacts and messages
- Manage newsletter subscribers
- Create/Edit/Delete blog posts
- Manage case studies
- Default credentials: `admin` / `Admin@123`

## 📋 Prerequisites

- Node.js 14+ and npm
- Git

## 🚀 Installation & Setup

### 1. Clone or Extract the Project

```bash
cd fennec-ai-website
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env file with your settings (optional for email)
npm start
```

Backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run on `http://localhost:3000`

### 4. Access the Application

- **Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin/login
  - Username: `admin`
  - Password: `Admin@123`

## 🎨 Customization

### Update Company Information

1. **Logo**: Replace the "F" logo in `Navbar.js` and `Footer.js`
2. **Contact Info**: Update email/phone in `Footer.js` and `Contact.js`
3. **Colors**: Modify Tailwind config in `tailwind.config.js`
4. **Content**: Edit page components in `frontend/src/pages/`

### Email Configuration (Optional)

Edit `backend/.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

For Gmail:
1. Enable 2FA
2. Generate App Password
3. Use App Password in .env

## 🌐 Free Hosting Options

### Option 1: Vercel (Frontend) + Railway (Backend) ⭐ Recommended

#### Frontend on Vercel (FREE)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Set:
   - Framework: Create React App
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`
6. Add Environment Variable:
   - `REACT_APP_API_URL`: Your backend URL (from Railway)
7. Deploy!

#### Backend on Railway (FREE - $5 credit/month)
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Select repository
4. Set:
   - Root Directory: `backend`
   - Start Command: `npm start`
5. Add Environment Variables:
   - `PORT`: 5000
   - `JWT_SECRET`: (generate secure key)
   - `NODE_ENV`: production
   - Optional: SMTP settings
6. Deploy!
7. Get deployment URL and update frontend

### Option 2: Netlify (Frontend) + Render (Backend)

#### Frontend on Netlify (FREE)
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git"
4. Select repository
5. Settings:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/build`
6. Add Environment Variables
7. Deploy!

#### Backend on Render (FREE)
1. Go to [render.com](https://render.com)
2. "New+" → "Web Service"
3. Connect GitHub
4. Settings:
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add Environment Variables
6. Deploy!

### Option 3: All-in-One with Render (FREE)

Deploy both on Render's free tier:

1. **Backend Web Service** (as above)
2. **Frontend Static Site**:
   - Create new Static Site
   - Root: `frontend`
   - Build: `npm run build`
   - Publish: `build`

### Option 4: Heroku (Simple but paid after free tier removal)

```bash
# Backend
cd backend
heroku create fennec-api
git subtree push --prefix backend heroku main

# Frontend
cd frontend
heroku create fennec-website
heroku buildpacks:set mars/create-react-app
git subtree push --prefix frontend heroku main
```

## 🗄️ Database

The SQLite database (`fennec.db`) is automatically created on first run.

For production, consider upgrading to:
- PostgreSQL (free on Railway/Render)
- MySQL
- MongoDB

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000
JWT_SECRET=your-secret-key
NODE_ENV=production
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FRONTEND_URL=https://your-frontend-url.com
```

### Frontend
Update API URL in `src/pages/` to point to your backend:
```javascript
axios.get('YOUR_BACKEND_URL/api/...')
```

Or use environment variable:
```env
REACT_APP_API_URL=https://your-backend-url.com
```

## 🔐 Security Checklist

Before deploying to production:

- [ ] Change default admin password
- [ ] Update JWT_SECRET to strong random string
- [ ] Enable HTTPS (automatic on Vercel/Netlify/Railway)
- [ ] Configure CORS properly
- [ ] Set up proper email service
- [ ] Review rate limits
- [ ] Add input validation
- [ ] Set up monitoring
- [ ] Configure backups for database

## 📱 Features to Add (Optional)

- [ ] Google Analytics
- [ ] Live chat integration
- [ ] Email marketing integration (Mailchimp, SendGrid)
- [ ] Payment gateway for training programs
- [ ] File upload for case studies
- [ ] Rich text editor for blog posts
- [ ] Image optimization
- [ ] Social media integrations
- [ ] Multi-language support

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, Axios, Framer Motion
- **Backend**: Node.js, Express, SQLite, JWT, Bcrypt
- **Deployment**: Vercel/Netlify (Frontend), Railway/Render (Backend)

## 📞 Support

For issues or questions:
- Email: contact@fennec.ai
- Create an issue in the repository

## 📄 License

All rights reserved © 2025 Fennec AI

## 🎉 Quick Start Commands

```bash
# Install everything
cd backend && npm install && cd ../frontend && npm install

# Run development
# Terminal 1
cd backend && npm start

# Terminal 2
cd frontend && npm start

# Build for production
cd frontend && npm run build

# Deploy
# Push to GitHub, then deploy via Vercel/Railway dashboards
```

## 🌟 Default Admin Access

- URL: `/admin/login`
- Username: `admin`
- Password: `Admin@123`

**⚠️ IMPORTANT: Change this immediately in production!**

To change password:
1. Hash new password using bcrypt
2. Update in database directly or create new endpoint

## 📊 API Documentation

### Public Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/blog` - Get all published blog posts
- `GET /api/blog/:slug` - Get single blog post
- `GET /api/case-studies` - Get all published case studies

### Admin Endpoints (Requires JWT)

- `POST /api/admin/login` - Admin login
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/contacts` - All contact submissions
- `GET /api/admin/newsletter` - All newsletter subscribers
- `GET /api/admin/blog` - All blog posts (including unpublished)
- `POST /api/admin/blog` - Create blog post
- `PUT /api/admin/blog/:id` - Update blog post
- `DELETE /api/admin/blog/:id` - Delete blog post
- `POST /api/admin/case-studies` - Create case study

## 🚢 Production Deployment Checklist

- [ ] Set secure JWT_SECRET
- [ ] Configure production database
- [ ] Set up email service
- [ ] Add SSL certificate (automatic on hosting platforms)
- [ ] Configure domain name
- [ ] Set up error monitoring (Sentry)
- [ ] Configure analytics (Google Analytics)
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Optimize images
- [ ] Test load times
- [ ] Set up backups
- [ ] Document admin procedures

---

**Built with ❤️ for Fennec AI - Making AI Accessible to Everyone**
