const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true, // Allow credentials if needed
}));

// Middleware to parse JSON and form-data requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Import and initialize database connection
require('./config/config');

// Ensure "uploads" directories exist dynamically
const uploadDirs = ['uploads', 'uploads/features', 'uploads/movies', 'uploads/avatars'];
uploadDirs.forEach((dir) => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Directory created: ${dir}`);
  }
});

// Serve static files from the "uploads" folder and subfolders
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import routes
const authRoutes = require('./routes/authRoutes');
const featureRoutes = require('./routes/featuresRoutes');
const hallRoutes = require('./routes/hallRoutes');
const hallwiseSeatRoutes = require('./routes/hallwiseSeatRoutes');
const movieRoutes = require('./routes/movieRoutes');
const movieDirectorRoutes = require('./routes/movieDirectorRoutes');
const movieGenreRoutes = require('./routes/movieGenreRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const userRoutes = require('./routes/userRoutes');
const seatRoutes = require('./routes/seatRoutes');
const shownInRoutes = require('./routes/shownInRoutes');
const showtimeRoutes = require('./routes/showtimeRoutes');
const theatreRoutes = require('./routes/theatreRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/features', featureRoutes);
app.use('/api/halls', hallRoutes);
app.use('/api/hallwiseSeats', hallwiseSeatRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/movieDirectors', movieDirectorRoutes);
app.use('/api/movieGenres', movieGenreRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/seats', seatRoutes);
app.use('/api/shownIn', shownInRoutes);
app.use('/api/showtimes', showtimeRoutes);
app.use('/api/theatres', theatreRoutes);
app.use('/api/tickets', ticketRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
