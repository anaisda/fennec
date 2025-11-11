# ✅ Fennec AI Website - Installation Checklist

## Pre-Installation

- [ ] Node.js 14+ installed ([Download](https://nodejs.org/))
- [ ] Git installed (optional, for deployment)
- [ ] Code editor installed (VS Code recommended)
- [ ] Terminal/Command Prompt available

---

## Installation Steps

### Step 1: Extract Project
- [ ] Download the `fennec-ai-website` folder
- [ ] Extract to your preferred location (e.g., `C:\Projects\` or `~/Projects/`)
- [ ] Open folder in terminal/command prompt

### Step 2: Install Dependencies

**Option A: Automated (Recommended)**
- [ ] Windows: Double-click `quick-start.bat`
- [ ] Mac/Linux: Run `./quick-start.sh`
- [ ] Wait for installation to complete

**Option B: Manual**
- [ ] Open terminal in project folder
- [ ] Run: `cd backend && npm install`
- [ ] Open new terminal
- [ ] Run: `cd frontend && npm install`

### Step 3: Configure (Optional)
- [ ] Copy `backend/.env.example` to `backend/.env`
- [ ] Edit `.env` if you want email notifications (optional)
- [ ] Leave defaults for initial testing

---

## Running the Application

### Backend (Terminal 1)
- [ ] Navigate to backend folder: `cd backend`
- [ ] Start server: `npm start`
- [ ] Verify: "Backend Server running on port 5000"
- [ ] Keep this terminal open

### Frontend (Terminal 2)
- [ ] Open new terminal
- [ ] Navigate to frontend folder: `cd frontend`
- [ ] Start app: `npm start`
- [ ] Browser should open automatically
- [ ] If not, open: http://localhost:3000

---

## Testing

### Website Pages
- [ ] Homepage loads correctly
- [ ] Services page displays all 3 services
- [ ] Industries page shows 5 industries
- [ ] Training page lists programs
- [ ] Contact form is visible
- [ ] Blog page loads (may be empty)
- [ ] About page displays company info
- [ ] Footer has all links
- [ ] Navigation menu works
- [ ] Mobile responsive (resize browser)

### Contact Form
- [ ] Fill out contact form
- [ ] Submit successfully
- [ ] Check backend terminal for log
- [ ] Verify in admin panel (contacts section)

### Newsletter
- [ ] Find newsletter signup in footer
- [ ] Enter email and submit
- [ ] Verify success message
- [ ] Check admin panel (subscribers)

### Admin Panel
- [ ] Go to: http://localhost:3000/admin/login
- [ ] Username: `admin`
- [ ] Password: `Admin@123`
- [ ] Login successfully
- [ ] Dashboard shows statistics
- [ ] Can view contacts
- [ ] Can view subscribers
- [ ] Logout works

---

## Customization

### Branding
- [ ] Update logo in `Navbar.js`
- [ ] Update footer logo in `Footer.js`
- [ ] Change company name throughout
- [ ] Update contact email/phone

### Content
- [ ] Edit homepage hero text
- [ ] Update services descriptions
- [ ] Modify about us content
- [ ] Add your case studies (via admin)
- [ ] Write first blog post (via admin)

### Design
- [ ] Adjust colors in `tailwind.config.js`
- [ ] Customize fonts if desired
- [ ] Add your images

---

## Deployment Preparation

### GitHub Setup
- [ ] Create GitHub account (if needed)
- [ ] Create new repository
- [ ] Push code to GitHub:
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin YOUR_REPO_URL
  git push -u origin main
  ```

### Vercel (Frontend)
- [ ] Sign up at vercel.com
- [ ] Connect GitHub account
- [ ] Import repository
- [ ] Set root directory: `frontend`
- [ ] Deploy and get URL

### Railway (Backend)
- [ ] Sign up at railway.app
- [ ] Connect GitHub account
- [ ] Deploy from GitHub
- [ ] Set root directory: `backend`
- [ ] Add environment variables
- [ ] Get backend URL

### Connect Frontend to Backend
- [ ] Copy Railway backend URL
- [ ] Add to Vercel environment variables
- [ ] Redeploy frontend
- [ ] Test production site

---

## Security Checklist

### Before Going Live
- [ ] Change admin password from default
- [ ] Generate secure JWT_SECRET
- [ ] Update JWT_SECRET in Railway environment
- [ ] Configure CORS for production domains
- [ ] Set up email service (Gmail/SendGrid)
- [ ] Test contact form in production
- [ ] Enable HTTPS (automatic on Vercel/Railway)

---

## Post-Deployment

### Testing Production
- [ ] All pages load correctly
- [ ] Contact form submits successfully
- [ ] Newsletter signup works
- [ ] Admin panel accessible
- [ ] Can login to admin
- [ ] Can create blog posts
- [ ] Mobile responsive
- [ ] Fast loading times

### SEO & Analytics
- [ ] Submit to Google Search Console
- [ ] Add Google Analytics (optional)
- [ ] Create sitemap.xml
- [ ] Verify meta tags
- [ ] Test on mobile devices
- [ ] Check PageSpeed Insights

### Optional Enhancements
- [ ] Add custom domain
- [ ] Set up email marketing
- [ ] Add live chat
- [ ] Integrate payment gateway
- [ ] Add more languages
- [ ] Create mobile app

---

## Maintenance

### Regular Tasks
- [ ] Check contact form submissions
- [ ] Respond to inquiries
- [ ] Publish blog posts weekly/monthly
- [ ] Update case studies
- [ ] Monitor site performance
- [ ] Review analytics
- [ ] Backup database regularly

---

## Troubleshooting

### Common Issues

**"npm install" fails**
- [ ] Check Node.js version (must be 14+)
- [ ] Run: `npm cache clean --force`
- [ ] Delete `node_modules` folder
- [ ] Try again

**Backend won't start**
- [ ] Check if port 5000 is free
- [ ] Verify `.env` file exists
- [ ] Check for syntax errors in code

**Frontend won't start**
- [ ] Ensure backend is running first
- [ ] Check if port 3000 is free
- [ ] Clear browser cache

**Admin login fails**
- [ ] Verify credentials: admin / Admin@123
- [ ] Check backend is running
- [ ] Look for `fennec.db` file in backend folder

**Contact form not working**
- [ ] Check backend logs for errors
- [ ] Verify API endpoints are correct
- [ ] Check CORS settings

---

## Support Resources

### Documentation
- [ ] Read START_HERE.md (overview)
- [ ] Read README.md (technical details)
- [ ] Read DEPLOYMENT_GUIDE.md (hosting)
- [ ] Review code comments

### Learning Resources
- [ ] React documentation: reactjs.org
- [ ] Tailwind CSS: tailwindcss.com
- [ ] Express.js: expressjs.com
- [ ] Vercel docs: vercel.com/docs
- [ ] Railway docs: docs.railway.app

---

## Success Criteria

✅ Website runs locally without errors
✅ All pages load and display correctly
✅ Contact form submits successfully
✅ Admin panel is accessible
✅ Can create and manage content
✅ Deployed to free hosting
✅ Custom domain configured (optional)
✅ Ready to receive clients!

---

## Final Steps

1. [ ] Complete all checklist items
2. [ ] Deploy to production
3. [ ] Share your website URL
4. [ ] Start marketing your services
5. [ ] Get your first client!

---

**Congratulations! Your Fennec AI website is live! 🎉**

Now go make an impact with AI services!
