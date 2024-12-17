const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Import routes
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

// Middleware to parse JSON requests
app.use(express.json());

// Routes
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
  console.log(`Server running on port ${PORT}`);
});
