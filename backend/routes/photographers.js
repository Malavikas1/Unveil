
const express = require('express');
const { 
  getPhotographers, 
  getPhotographer, 
  getFeaturedPhotographers,
  getPhotographerWorks
} = require('../controllers/photographers');

const router = express.Router();

router.get('/', getPhotographers);
router.get('/featured', getFeaturedPhotographers);
router.get('/:id', getPhotographer);
router.get('/:id/works', getPhotographerWorks);

module.exports = router;
