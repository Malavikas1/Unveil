
const express = require('express');
const { 
  getPortfolios, 
  getPortfolio, 
  createPortfolio, 
  updatePortfolio, 
  deletePortfolio 
} = require('../controllers/portfolios');
const { protect } = require('../middleware/auth');

// Include other resource routers
const photoRouter = require('./photos');

const router = express.Router();

// Re-route into other resource routers
router.use('/:portfolioId/photos', photoRouter);

router
  .route('/')
  .get(getPortfolios)
  .post(protect, createPortfolio);

router
  .route('/:id')
  .get(getPortfolio)
  .put(protect, updatePortfolio)
  .delete(protect, deletePortfolio);

module.exports = router;
