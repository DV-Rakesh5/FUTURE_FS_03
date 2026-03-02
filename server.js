const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Database setup
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Database error:', err);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

function initializeDatabase() {
  // Create tables if they don't exist
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      date TEXT NOT NULL,
      time TEXT NOT NULL,
      service TEXT,
      notes TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);

    console.log('Database tables initialized');
  });
}

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/booking', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'booking.html'));
});

// API endpoints
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  db.run(
    'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)',
    [name, email, phone, message],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to save contact' });
      }
      res.json({ success: true, id: this.lastID, message: 'Contact saved successfully' });
    }
  );
});

app.post('/api/booking', (req, res) => {
  const { name, email, phone, date, time, service, notes } = req.body;

  if (!name || !email || !date || !time) {
    return res.status(400).json({ error: 'Name, email, date, and time are required' });
  }

  db.run(
    'INSERT INTO bookings (name, email, phone, date, time, service, notes) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [name, email, phone, date, time, service, notes],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to save booking' });
      }
      res.json({ success: true, id: this.lastID, message: 'Booking confirmed!' });
    }
  );
});

app.get('/api/bookings', (req, res) => {
  db.all('SELECT * FROM bookings ORDER BY created_at DESC', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch bookings' });
    }
    res.json(rows);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`\n📍 Open your browser and navigate to: http://localhost:${PORT}`);
});
