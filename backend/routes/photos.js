
const express = require('express');
const { 
  getPhotos, 
  getPhoto, 
  uploadPhoto, 
  updatePhoto, 
  deletePhoto,
  likePhoto
} = require('../controllers/photos');
const { protect } = require('../middleware/auth');

// Include other resource routers
const commentRouter = require('./comments');

const router = express.Router({ mergeParams: true });

// Re-route into other resource routers
router.use('/:photoId/comments', commentRouter);

router
  .route('/')
  .get(getPhotos)
  .post(protect, uploadPhoto);

router
  .route('/:id')
  .get(getPhoto)
  .put(protect, updatePhoto)
  .delete(protect, deletePhoto);

router.put('/:id/like', protect, likePhoto);

module.exports = router;
