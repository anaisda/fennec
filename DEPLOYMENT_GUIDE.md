# Fennec AI - Complete Deployment Guide

## 🎯 Recommended: Vercel + Railway (100% FREE)

This combination provides:
- ✅ Free SSL certificates
- ✅ Automatic deployments
- ✅ Global CDN
- ✅ Easy setup
- ✅ Great performance

---

## 📦 Step-by-Step Deployment

### Phase 1: Prepare Your Code

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Fennec AI website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/fennec-ai.git
   git push -u origin main
   ```

### Phase 2: Deploy Backend (Railway)

1. **Go to Railway**
   - Visit [railway.app](https://railway.app)
   - Sign up with GitHub
   - Click "New Project"

2. **Deploy from GitHub**
   - Select "Deploy from GitHub repo"
   - Choose your fennec-ai repository
   - Railway will detect your project

3. **Configure Backend Service**
   - Click "Add variables"
   - Add these environment variables:
     ```
     PORT=5000
     NODE_ENV=production
     JWT_SECRET=GENERATE_RANDOM_STRING_HERE
     ```
   - Optional (for email):
     ```
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_USER=your-email@gmail.com
     SMTP_PASS=your-app-password
     ```

4. **Set Root Directory**
   - In Settings → Service Settings
   - Root Directory: `backend`
   - Start Command: `npm start`

5. **Deploy**
   - Railway will automatically build and deploy
   - Copy your backend URL (e.g., `fennec-api.railway.app`)

### Phase 3: Deploy Frontend (Vercel)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"

2. **Import Repository**
   - Select your fennec-ai repository
   - Vercel will detect it's a React app

3. **Configure Project**
   - Framework Preset: Create React App
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`

4. **Add Environment Variable**
   ```
   REACT_APP_API_URL=https://your-backend-url.railway.app
   ```

5. **Update API URLs**
   Before deploying, update all API calls in your frontend:
   
   In `frontend/src/pages/Contact.js`, `Blog.js`, etc.:
   ```javascript
   // Change from:
   axios.post('http://localhost:5000/api/contact', ...)
   
   // To:
   axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, ...)
   ```

6. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at `your-project.vercel.app`

### Phase 4: Configure CORS

Update `backend/server.js` CORS settings:

```javascript
app.use(cors({
  origin: ['https://your-frontend-url.vercel.app', 'http://localhost:3000'],
  credentials: true
}));
```

Commit and push changes - Railway will auto-deploy.

### Phase 5: Custom Domain (Optional)

#### For Vercel (Frontend):
1. Go to Project Settings → Domains
2. Add your domain (e.g., `www.fennec.ai`)
3. Follow DNS configuration instructions

#### For Railway (Backend):
1. Go to Project Settings
2. Click "Generate Domain" or add custom domain
3. Update frontend environment variable with new backend URL

---

## 🆓 Alternative: All-in-One Render

### Deploy Both on Render (FREE)

1. **Backend Web Service**
   - Go to [render.com](https://render.com)
   - New → Web Service
   - Connect GitHub repo
   - Settings:
     - Root Directory: `backend`
     - Build Command: `npm install`
     - Start Command: `npm start`
   - Add environment variables
   - Create Web Service

2. **Frontend Static Site**
   - New → Static Site
   - Same repo
   - Settings:
     - Root Directory: `frontend`
     - Build Command: `npm run build`
     - Publish Directory: `build`
   - Add environment variable: `REACT_APP_API_URL`
   - Create Static Site

---

## 🗄️ Database Options

### Keep SQLite (Simple)
- Already configured
- File-based, included in deployment
- Good for small-medium traffic

### Upgrade to PostgreSQL (Recommended for Production)
1. In Railway, add PostgreSQL service
2. Update backend to use PostgreSQL:
   ```bash
   npm install pg
   ```
3. Update database connection in `server.js`

---

## 📧 Email Configuration

### Option 1: Gmail (Free, Limited)
1. Enable 2-Factor Authentication
2. Generate App Password
3. Use in .env:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

### Option 2: SendGrid (Better for Production)
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key (free tier: 100 emails/day)
3. Update nodemailer config

### Option 3: AWS SES (Best for Scale)
- Cheapest at scale
- More setup required
- Highly reliable

---

## 🔐 Security Hardening

After deployment:

1. **Change Admin Password**
   ```bash
   # Connect to your backend
   # Use bcrypt to hash new password
   # Update in database
   ```

2. **Generate Secure JWT Secret**
   ```bash
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```

3. **Enable Rate Limiting**
   - Already configured in backend
   - Adjust limits as needed

4. **Set up HTTPS**
   - Automatic on Vercel/Railway
   - Ensure all API calls use HTTPS

---

## 📊 Monitoring & Analytics

### Add Google Analytics
1. Get tracking ID from analytics.google.com
2. Add to `frontend/public/index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR_ID');
   </script>
   ```

### Error Monitoring with Sentry (Optional)
```bash
npm install @sentry/react @sentry/node
```

---

## 🚀 Deployment Checklist

### Pre-Deployment
- [ ] All tests pass locally
- [ ] Updated all API URLs to environment variables
- [ ] Set secure JWT_SECRET
- [ ] Configured email service
- [ ] Updated admin password
- [ ] Tested contact form
- [ ] Tested newsletter subscription
- [ ] Verified all pages load
- [ ] Mobile responsive check
- [ ] SEO meta tags complete

### During Deployment
- [ ] Backend deployed successfully
- [ ] Frontend deployed successfully
- [ ] Database initialized
- [ ] Environment variables set
- [ ] CORS configured correctly
- [ ] SSL certificates active

### Post-Deployment
- [ ] Test all forms from production site
- [ ] Verify admin login works
- [ ] Check email notifications
- [ ] Test on multiple devices
- [ ] Monitor error logs
- [ ] Set up analytics
- [ ] Configure backups
- [ ] Update DNS if using custom domain
- [ ] Test load times (use PageSpeed Insights)
- [ ] Create admin documentation

---

## 🔄 Continuous Deployment

Both Vercel and Railway support automatic deployments:

1. Push to GitHub main branch
2. Services automatically rebuild and deploy
3. Zero downtime deployments

To disable auto-deploy:
- Vercel: Project Settings → Git
- Railway: Service Settings → Deployments

---

## 💰 Cost Breakdown (FREE Tier)

### Vercel (Frontend)
- Bandwidth: 100GB/month
- Builds: Unlimited
- Domains: Unlimited
- **Cost: FREE**

### Railway (Backend)
- $5 credit/month
- ~500 hours execution
- 512MB RAM
- **Cost: FREE** (covers typical usage)

### Total Monthly Cost: $0
Perfect for:
- Small to medium businesses
- Startups
- MVP launches
- Portfolio projects

---

## 🆙 Scaling (When You Outgrow Free Tier)

### Frontend
- Vercel Pro: $20/month (team features)
- Or migrate to own server

### Backend
- Railway Pro: $20/month
- Or VPS (DigitalOcean, Linode): $5-10/month
- Or AWS/GCP (pay as you go)

### Database
- Railway PostgreSQL: Included
- Or managed database: $7-15/month

---

## 📱 Mobile App (Future)

Consider React Native for mobile:
- Reuse 70%+ of code
- Same API backend
- Deploy to iOS/Android

---

## 🎓 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)
- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)

---

## 🆘 Troubleshooting

### "API calls failing in production"
- Check CORS configuration
- Verify environment variables are set
- Ensure backend URL is correct in frontend

### "Admin login not working"
- Check JWT_SECRET is set
- Verify database initialized with admin user
- Check browser console for errors

### "Email not sending"
- Verify SMTP credentials
- Check email service limits
- Review backend logs

### "Slow load times"
- Enable caching
- Optimize images
- Use CDN (Vercel includes this)
- Check database queries

---

## 📞 Need Help?

1. Check deployment logs (Vercel/Railway dashboard)
2. Review browser console for errors
3. Test API endpoints directly
4. Contact support:
   - Vercel: support@vercel.com
   - Railway: [Discord](https://discord.gg/railway)

---

**🎉 Congratulations! Your Fennec AI website is now live!**

Remember to:
- Share your site URL
- Update social media links
- Monitor traffic and errors
- Gather user feedback
- Iterate and improve

**Website URL**: `your-project.vercel.app`
**Admin Panel**: `your-project.vercel.app/admin/login`

Good luck! 🚀
