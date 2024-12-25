import baseApi from './baseApi';

// User APIs
const loginUser = async (email, password) => baseApi.post('/auth/login', { email, password, type_account });
const getUserProfile = async (token) =>
  baseApi.get('/user/profile', { headers: { Authorization: `Bearer ${token}` } });

// Movie APIs
const getAllMovies = async () => baseApi.get('/movies');
const createMovie = async (movieData) => baseApi.post('/movies', movieData);

// Ticket APIs
const getAllTickets = async () => baseApi.get('/tickets');
const createTicket = async (ticketData) => baseApi.post('/tickets', ticketData);

// Hall APIs
const getAllHalls = async () => baseApi.get('/halls');
const createHall = async (hallData) => baseApi.post('/halls', hallData);

// Showtime APIs
const getAllShowtimes = async () => baseApi.get('/showtimes');
const createShowtime = async (showtimeData) => baseApi.post('/showtimes', showtimeData);

// Payment APIs
const getAllPayments = async () => baseApi.get('/payments');
const processPayment = async (paymentData) => baseApi.post('/payments', paymentData);

// Feature APIs
const getAllFeatures = async () => baseApi.get('/features');
const createFeature = async (featureData, imageFile) => {
  const formData = new FormData();
  Object.keys(featureData).forEach((key) => formData.append(key, featureData[key]));
  if (imageFile) formData.append('image', imageFile);
  return baseApi.post('/features', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

// Movie Director APIs
const getAllMovieDirectors = async () => baseApi.get('/movie-directors');
const createMovieDirector = async (directorData) => baseApi.post('/movie-directors', directorData);

// Movie Genre APIs
const getAllMovieGenres = async () => baseApi.get('/movie-genres');
const createMovieGenre = async (genreData) => baseApi.post('/movie-genres', genreData);

// Seat APIs
const getSeatsByHall = async (hallId) => baseApi.get(`/seats/${hallId}`);
const createSeat = async (seatData) => baseApi.post('/seats', seatData);

// Theatre APIs
const getAllTheatres = async () => baseApi.get('/theatres');
const createTheatre = async (theatreData) => baseApi.post('/theatres', theatreData);

// Hallwise Seat APIs
const getAllHallwiseSeats = async () => baseApi.get('/hallwise-seats');
const createHallwiseSeat = async (seatData) => baseApi.post('/hallwise-seats', seatData);

// Combine
const api = {
  user: {
    loginUser,
    getUserProfile,
  },
  movie: {
    getAllMovies,
    createMovie,
  },
  ticket: {
    getAllTickets,
    createTicket,
  },
  hall: {
    getAllHalls,
    createHall,
  },
  showtime: {
    getAllShowtimes,
    createShowtime,
  },
  payment: {
    getAllPayments,
    processPayment,
  },
  feature: {
    getAllFeatures,
    createFeature,
  },
  movieDirector: {
    getAllMovieDirectors,
    createMovieDirector,
  },
  movieGenre: {
    getAllMovieGenres,
    createMovieGenre,
  },
  seat: {
    getSeatsByHall,
    createSeat,
  },
  theatre: {
    getAllTheatres,
    createTheatre,
  },
  hallwiseSeat: {
    getAllHallwiseSeats,
    createHallwiseSeat,
  },
};

export default api;
