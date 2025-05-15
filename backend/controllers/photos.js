
const Photo = require('../models/Photo');
const Portfolio = require('../models/Portfolio');
const path = require('path');
const fs = require('fs');
const upload = require('../middleware/upload');

// @desc    Get all photos
// @route   GET /api/v1/photos
// @access  Public
exports.getPhotos = async (req, res) => {
  try {
    let query;
    
    // Copy req.query
    const reqQuery = { ...req.query };
    
    // Fields to exclude
    const removeFields = ['select', 'sort', 'page', 'limit', 'search'];
    
    // Loop over removeFields and delete them from reqQuery
    removeFields.forEach(param => delete reqQuery[param]);
    
    // Create query string
    let queryStr = JSON.stringify(reqQuery);
    
    // Create operators ($gt, $gte, etc)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
    
    // Basic finding resource
    query = Photo.find(JSON.parse(queryStr)).populate({
      path: 'user',
      select: 'name avatar'
    });
    
    // Search functionality
    if (req.query.search) {
      query = query.find({ $text: { $search: req.query.search } });
    }
    
    // Select fields
    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ');
      query = query.select(fields);
    }
    
    // Sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }
    
    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 12;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Photo.countDocuments();
    
    query = query.skip(startIndex).limit(limit);
    
    // Executing query
    const photos = await query;
    
    // Pagination result
    const pagination = {};
    
    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      };
    }
    
    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      };
    }
    
    res.status(200).json({
      success: true,
      count: photos.length,
      pagination,
      data: photos
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Get single photo
// @route   GET /api/v1/photos/:id
// @access  Public
exports.getPhoto = async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id)
      .populate({
        path: 'user',
        select: 'name avatar'
      })
      .populate({
        path: 'comments',
        populate: {
          path: 'user',
          select: 'name avatar'
        }
      });
    
    if (!photo) {
      return res.status(404).json({
        success: false,
        error: 'Photo not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: photo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Upload photo
// @route   POST /api/v1/portfolios/:portfolioId/photos
// @access  Private
exports.uploadPhoto = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.portfolioId);
    
    if (!portfolio) {
      return res.status(404).json({
        success: false,
        error: 'Portfolio not found'
      });
    }
    
    // Make sure user is portfolio owner
    if (portfolio.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to add photos to this portfolio'
      });
    }
    
    // Handle the file upload manually
    upload.single('image')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          error: err
        });
      }
      
      if (!req.file) {
        return res.status(400).json({
          success: false,
          error: 'Please upload a file'
        });
      }
      
      // Create photo with uploaded file path
      const photo = await Photo.create({
        title: req.body.title,
        description: req.body.description,
        imageUrl: `/uploads/photos/${req.file.filename}`,
        portfolio: req.params.portfolioId,
        user: req.user.id,
        camera: req.body.camera,
        lens: req.body.lens,
        focalLength: req.body.focalLength,
        shutterSpeed: req.body.shutterSpeed,
        aperture: req.body.aperture,
        iso: req.body.iso,
        location: req.body.location,
        takenAt: req.body.takenAt,
        tags: req.body.tags ? req.body.tags.split(',') : []
      });
      
      res.status(201).json({
        success: true,
        data: photo
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Update photo
// @route   PUT /api/v1/photos/:id
// @access  Private
exports.updatePhoto = async (req, res) => {
  try {
    let photo = await Photo.findById(req.params.id);
    
    if (!photo) {
      return res.status(404).json({
        success: false,
        error: 'Photo not found'
      });
    }
    
    // Make sure user is photo owner
    if (photo.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to update this photo'
      });
    }
    
    photo = await Photo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    res.status(200).json({
      success: true,
      data: photo
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Delete photo
// @route   DELETE /api/v1/photos/:id
// @access  Private
exports.deletePhoto = async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    
    if (!photo) {
      return res.status(404).json({
        success: false,
        error: 'Photo not found'
      });
    }
    
    // Make sure user is photo owner
    if (photo.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        error: 'Not authorized to delete this photo'
      });
    }
    
    // Delete the image file
    const imagePath = path.join(__dirname, '..', photo.imageUrl);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    
    await photo.remove();
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// @desc    Like/unlike photo
// @route   PUT /api/v1/photos/:id/like
// @access  Private
exports.likePhoto = async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    
    if (!photo) {
      return res.status(404).json({
        success: false,
        error: 'Photo not found'
      });
    }
    
    // Check if the photo has already been liked by this user
    const alreadyLiked = photo.likes.some(like => 
      like.toString() === req.user.id
    );
    
    if (alreadyLiked) {
      // Unlike the photo
      photo.likes = photo.likes.filter(
        like => like.toString() !== req.user.id
      );
    } else {
      // Like the photo
      photo.likes.push(req.user.id);
    }
    
    await photo.save();
    
    res.status(200).json({
      success: true,
      data: photo.likes,
      liked: !alreadyLiked
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
