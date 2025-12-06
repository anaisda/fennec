require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Database = require('better-sqlite3');
let nodemailer;
try {
  nodemailer = require('nodemailer');
} catch (e) {
  console.log('Nodemailer not installed - email features will be disabled');
}

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'Anateck-secret-key-change-in-production';

// Database setup
const db = new Database('Anateck.db');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    message TEXT NOT NULL,
    service_interest TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'new'
  );

  CREATE TABLE IF NOT EXISTS newsletter (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'active'
  );

  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    category TEXT,
    image_url TEXT,
    published BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS case_studies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    client_name TEXT,
    industry TEXT,
    challenge TEXT,
    solution TEXT,
    results TEXT,
    image_url TEXT,
    published BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Create default admin if not exists
const checkAdmin = db.prepare('SELECT * FROM admins WHERE username = ?');
const adminExists = checkAdmin.get('admin');

if (!adminExists) {
  const hashedPassword = bcrypt.hashSync('Admin@123', 10);
  const insertAdmin = db.prepare('INSERT INTO admins (username, password, email) VALUES (?, ?, ?)');
  insertAdmin.run('admin', hashedPassword, 'admin@Anateck.ai');
  console.log('Default admin created - Username: admin, Password: Admin@123');
}

// Middleware
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});
app.use(limiter);

// Email transporter (optional - only if nodemailer is available and configured)
let transporter = null;
if (nodemailer && process.env.SMTP_USER && process.env.SMTP_PASS) {
  try {
    transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    console.log('✅ Email notifications enabled');
  } catch (error) {
    console.log('⚠️  Email configuration error - email features disabled');
  }
} else {
  console.log('ℹ️  Email not configured - email notifications disabled (optional)');
}

// Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Public API Routes

// Contact form
app.post('/api/contact',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').trim().notEmpty().withMessage('Message is required')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, company, message, service_interest } = req.body;

    try {
      const stmt = db.prepare('INSERT INTO contacts (name, email, phone, company, message, service_interest) VALUES (?, ?, ?, ?, ?, ?)');
      const result = stmt.run(name, email, phone || null, company || null, message, service_interest || null);

      // Send email notification (if configured)
      if (transporter) {
        try {
          await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: 'contact@Anateck.ai',
            subject: 'New Contact Form Submission',
            html: `
              <h2>New Contact from Anateck Website</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
              <p><strong>Company:</strong> ${company || 'N/A'}</p>
              <p><strong>Service Interest:</strong> ${service_interest || 'N/A'}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `
          });
        } catch (emailError) {
          console.log('Email notification failed:', emailError.message);
          // Don't fail the request if email fails
        }
      }

      res.status(201).json({ 
        success: true, 
        message: 'Thank you for contacting us! We will get back to you soon.',
        id: result.lastInsertRowid 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ error: 'Failed to submit contact form' });
    }
  }
);

// Newsletter subscription
app.post('/api/newsletter',
  [
    body('email').isEmail().withMessage('Valid email is required')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    try {
      const stmt = db.prepare('INSERT INTO newsletter (email) VALUES (?)');
      stmt.run(email);

      res.status(201).json({ 
        success: true, 
        message: 'Successfully subscribed to newsletter!' 
      });
    } catch (error) {
      if (error.message.includes('UNIQUE constraint failed')) {
        res.status(400).json({ error: 'Email already subscribed' });
      } else {
        res.status(500).json({ error: 'Failed to subscribe' });
      }
    }
  }
);

// Get blog posts (public)
app.get('/api/blog', (req, res) => {
  try {
    const stmt = db.prepare('SELECT id, title, slug, excerpt, author, category, image_url, created_at FROM blog_posts WHERE published = 1 ORDER BY created_at DESC');
    const posts = stmt.all();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog posts' });
  }
});

// Get single blog post
app.get('/api/blog/:slug', (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM blog_posts WHERE slug = ? AND published = 1');
    const post = stmt.get(req.params.slug);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
});

// Get case studies (public)
app.get('/api/case-studies', (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM case_studies WHERE published = 1 ORDER BY created_at DESC');
    const caseStudies = stmt.all();
    res.json(caseStudies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch case studies' });
  }
});

// Admin Routes

// Admin login
app.post('/api/admin/login',
  [
    body('username').trim().notEmpty(),
    body('password').trim().notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      const stmt = db.prepare('SELECT * FROM admins WHERE username = ?');
      const admin = stmt.get(username);

      if (!admin || !bcrypt.compareSync(password, admin.password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = jwt.sign(
        { id: admin.id, username: admin.username },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.json({ 
        success: true, 
        token,
        user: {
          id: admin.id,
          username: admin.username,
          email: admin.email
        }
      });
    } catch (error) {
      res.status(500).json({ error: 'Login failed' });
    }
  }
);

// Get all contacts (admin)
app.get('/api/admin/contacts', authenticateToken, (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC');
    const contacts = stmt.all();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Update contact status (admin)
app.patch('/api/admin/contacts/:id', authenticateToken, (req, res) => {
  const { status } = req.body;
  try {
    const stmt = db.prepare('UPDATE contacts SET status = ? WHERE id = ?');
    stmt.run(status, req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update contact' });
  }
});

// Get newsletter subscribers (admin)
app.get('/api/admin/newsletter', authenticateToken, (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM newsletter ORDER BY subscribed_at DESC');
    const subscribers = stmt.all();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
});

// Blog management (admin)
app.get('/api/admin/blog', authenticateToken, (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM blog_posts ORDER BY created_at DESC');
    const posts = stmt.all();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.post('/api/admin/blog', authenticateToken, (req, res) => {
  const { title, slug, excerpt, content, author, category, image_url, published } = req.body;
  try {
    const stmt = db.prepare('INSERT INTO blog_posts (title, slug, excerpt, content, author, category, image_url, published) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
    const result = stmt.run(title, slug, excerpt, content, author, category, image_url, published ? 1 : 0);
    res.status(201).json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

app.put('/api/admin/blog/:id', authenticateToken, (req, res) => {
  const { title, slug, excerpt, content, author, category, image_url, published } = req.body;
  try {
    const stmt = db.prepare('UPDATE blog_posts SET title = ?, slug = ?, excerpt = ?, content = ?, author = ?, category = ?, image_url = ?, published = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?');
    stmt.run(title, slug, excerpt, content, author, category, image_url, published ? 1 : 0, req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post' });
  }
});

app.delete('/api/admin/blog/:id', authenticateToken, (req, res) => {
  try {
    const stmt = db.prepare('DELETE FROM blog_posts WHERE id = ?');
    stmt.run(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

// Case studies management (admin)
app.post('/api/admin/case-studies', authenticateToken, (req, res) => {
  const { title, client_name, industry, challenge, solution, results, image_url, published } = req.body;
  try {
    const stmt = db.prepare('INSERT INTO case_studies (title, client_name, industry, challenge, solution, results, image_url, published) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
    const result = stmt.run(title, client_name, industry, challenge, solution, results, image_url, published ? 1 : 0);
    res.status(201).json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create case study' });
  }
});

// Dashboard stats (admin)
app.get('/api/admin/stats', authenticateToken, (req, res) => {
  try {
    const contactsCount = db.prepare('SELECT COUNT(*) as count FROM contacts').get();
    const newsletterCount = db.prepare('SELECT COUNT(*) as count FROM newsletter').get();
    const blogCount = db.prepare('SELECT COUNT(*) as count FROM blog_posts WHERE published = 1').get();
    const newContacts = db.prepare('SELECT COUNT(*) as count FROM contacts WHERE status = "new"').get();

    res.json({
      totalContacts: contactsCount.count,
      totalSubscribers: newsletterCount.count,
      publishedPosts: blogCount.count,
      newContacts: newContacts.count
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Anateck API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Anateck Backend Server running on port ${PORT}`);
  console.log(`📊 API available at http://localhost:${PORT}`);
});