
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load env vars
dotenv.config();

// Import route files
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const photographerRoutes = require('./routes/photographers');
const portfolioRoutes = require('./routes/portfolios');
const photoRoutes = require('./routes/photos');
const collectionRoutes = require('./routes/collections');
const commentRoutes = require('./routes/comments');
const errorHandler = require('./middleware/error');

// Initialize app
const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Set static folder for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Mount routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/photographers', photographerRoutes);
app.use('/api/v1/portfolios', portfolioRoutes);
app.use('/api/v1/photos', photoRoutes);
app.use('/api/v1/collections', collectionRoutes);
app.use('/api/v1/comments', commentRoutes);

// Error handler middleware
app.use(errorHandler);

// Set port
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
