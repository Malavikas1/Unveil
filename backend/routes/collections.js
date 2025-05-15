
const express = require('express');
const { 
  getCollections, 
  getCollection, 
  createCollection, 
  updateCollection, 
  deleteCollection,
  getFeaturedCollections,
  addPhotoToCollection,
  removePhotoFromCollection
} = require('../controllers/collections');
const { protect } = require('../middleware/auth');

const router = express.Router();

router
  .route('/')
  .get(getCollections)
  .post(protect, createCollection);

router.get('/featured', getFeaturedCollections);

router
  .route('/:id')
  .get(getCollection)
  .put(protect, updateCollection)
  .delete(protect, deleteCollection);

router
  .route('/:id/photos')
  .put(protect, addPhotoToCollection);

router
  .route('/:id/photos/:photoId')
  .delete(protect, removePhotoFromCollection);

module.exports = router;
